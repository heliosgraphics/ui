"use client"

import { Flex, Button, ButtonGroup } from "@heliosgraphics/ui"
import { getClasses } from "@heliosgraphics/utils"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { useContext, useState, type FC } from "react"
import { WorkshopContext } from "../../../../contexts/WorkshopContext/WorkshopContext"
import * as components from "@heliosgraphics/ui"
import styles from "./LiveComponent.module.css"
import type { LiveComponentProps } from "./LiveComponent.types"
import type { PrismTheme } from "prism-react-renderer"
import Page from "../../../Page"

const PRISM_THEME: PrismTheme = {
	plain: {
		backgroundColor: "var(--ui-bg)",
		color: "var(--ui-text-secondary)",
	},
	styles: [
		{
			types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
			style: { color: "var(--ui-text-secondary)" },
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
			],
			style: { color: "hsl(var(--red-hue), var(--red-saturation), 50%)" },
		},
	],
}

const LiveComponent: FC<LiveComponentProps> = ({ code }) => {
	const { intent } = useContext(WorkshopContext)
	const [showBackground, setBackground] = useState<boolean>(true)

	const onBackgroundToggle = () => setBackground(!showBackground)

	const liveComponentClasses: string = getClasses(styles.liveComponent, {
		[styles.liveComponentBackground]: showBackground,
	})

	const liveEditorClasses: string = getClasses(styles.liveEditor, "mono tiny p-16")

	return (
		<Flex isColumn={true}>
			<LiveProvider code={code} scope={{ ...components, intent, onClose: () => null }} theme={PRISM_THEME}>
				<Flex isColumn={true} gap={12} padding={16} className={liveComponentClasses}>
					<LiveError />
					<LivePreview />
					<ButtonGroup align="right">
						<Button intent="silent" size="tiny" icon="bolt" value="Background" onClick={onBackgroundToggle} />
					</ButtonGroup>
				</Flex>
				<LiveEditor className={liveEditorClasses} />
			</LiveProvider>
		</Flex>
	)
}

export default LiveComponent
