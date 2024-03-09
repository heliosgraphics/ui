"use client"

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import type { LiveComponentProps } from "./LiveComponent.types"
import styles from "./LiveComponent.module.css"
import { Flex } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { PrismTheme } from "prism-react-renderer"

import * as components from "@heliosgraphics/ui"

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
	return (
		<Flex isColumn={true}>
			<LiveProvider code={code} scope={{ ...components }} theme={PRISM_THEME}>
				<LiveEditor className="mono small p-16" />
				<Flex isColumn={true} padding={16} className={styles.liveComponent}>
					<LiveError />
					<LivePreview />
				</Flex>
			</LiveProvider>
		</Flex>
	)
}

export default LiveComponent
