"use client"

import { Flex } from "@heliosgraphics/ui"
import { getClasses } from "@heliosgraphics/utils"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { useContext, useState, type FC } from "react"
import { WorkshopContext } from "../../../../contexts/WorkshopContext/WorkshopContext"
import * as components from "@heliosgraphics/ui"
import styles from "./LiveComponent.module.css"
import type { LiveComponentProps } from "./LiveComponent.types"
import type { PrismTheme } from "prism-react-renderer"

const PRISM_THEME: PrismTheme = {
	plain: {
		backgroundColor: "var(--ui-bg)",
		color: "var(--ui-text-secondary)",
	},
	styles: [
		{
			types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
			style: {
				color: "var(--ui-text-secondary)",
				// fontStyle: "italic",
			},
		},
		{
			types: [
				"boolean",
				"string",
				"entity",
				"url",
				"attr-value",
				"keyword",
				"control",
				"directive",
				"unit",
				"statement",
				"regex",
				"at-rule",
				"placeholder",
				"variable",
				"script",
			],
			style: {
				color: "hsl(var(--orange-hue), var(--orange-saturation), 50%)",
				fontWeight: "700",
			},
		},
	],
}

const LiveComponent: FC<LiveComponentProps> = ({ code, scope, disabledBackground = false }) => {
	const { intent, color, icon, iconAccent, isDisabled, emphasis } = useContext(WorkshopContext)
	const [hasBackground, _] = useState<boolean>(!disabledBackground)

	const liveComponentClasses: string = getClasses(styles.liveComponent, {
		[styles.liveComponentAlt]: hasBackground,
	})

	const liveEditorClasses: string = getClasses(styles.liveEditor, "mono tiny", {})

	// const onBackgroundToggle = () => setBackground(!hasBackground)
	const mockFn = () => console.log("mock")

	return (
		<Flex isColumn={true}>
			<LiveProvider
				code={code}
				scope={{ ...components, ...scope, intent, color, icon, iconAccent, isDisabled, emphasis, mockFn }}
				theme={PRISM_THEME}
			>
				<Flex isColumn={true} gap={12} padding={16} className={liveComponentClasses}>
					<LiveError />
					<LivePreview />
					{/* <Checkbox
						label="Show Grid"
						isChecked={hasBackground}
						intent="silent"
						isSmall={true}
						onChange={onBackgroundToggle}
					/> */}
				</Flex>
				<LiveEditor className={liveEditorClasses} />
			</LiveProvider>
		</Flex>
	)
}

export default LiveComponent
