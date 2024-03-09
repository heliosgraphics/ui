"use client"

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import type { LiveComponentProps } from "./LiveComponent.types"
import styles from "./LiveComponent.module.css"
import { Flex } from "@heliosgraphics/ui"
import type { FC } from "react"
import { Highlight } from "prism-react-renderer"

import * as components from "@heliosgraphics/ui"

const PRISM_THEME = {
	plain: {
		backgroundColor: "var(--ui-bg)",
		color: "var(--ui-text-primary)",
	},
	styles: [
		{
			types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
			style: { color: "var(--ui-text-tertiary)" },
		},
		{
			types: ["tag", "operator", "number"],
			style: { color: "var(--ui-text-secondary)" },
		},
		{
			types: ["property", "function"],
			style: { color: "hsl(var(--green-hue), var(--green-saturation), 50%)" },
		},
		{
			types: ["attr-name", "selector"],
			style: { color: "var(--ui-text-tertiary)" },
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
	return (
		<Flex isColumn={true}>
			<LiveProvider code={code} scope={{ ...components }} theme={PRISM_THEME}>
				<Flex isColumn={true} padding={16} className={styles.liveComponent}>
					<LiveError />
					<LivePreview />
				</Flex>
				<LiveEditor />
			</LiveProvider>
		</Flex>
	)
}

export default LiveComponent
