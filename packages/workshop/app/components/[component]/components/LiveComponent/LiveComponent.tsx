"use client"

import { Flex } from "@heliosgraphics/ui"
import { getClasses } from "@heliosgraphics/utils"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { useContext, type FC } from "react"
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
			style: { color: "hsl(var(--orange-hue), var(--orange-saturation), 50%)" },
		},
	],
}

const LiveComponent: FC<LiveComponentProps> = ({ code, scope }) => {
	const { intent } = useContext(WorkshopContext)
	const liveEditorClasses: string = getClasses(styles.liveEditor, "mono tiny p-16")

	return (
		<Flex isColumn={true}>
			<LiveProvider code={code} scope={{ ...components, ...scope, intent }} theme={PRISM_THEME}>
				<Flex isColumn={true} gap={12} padding={16} className={styles.liveComponent}>
					<LiveError />
					<LivePreview />
				</Flex>
				<LiveEditor className={liveEditorClasses} />
			</LiveProvider>
		</Flex>
	)
}

export default LiveComponent