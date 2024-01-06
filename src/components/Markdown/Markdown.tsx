import React from "react"
import styles from "./Markdown.module.css"
import { md } from "../utils/markdown"
import classNames from "@sindresorhus/class-names"
import type { MarkdownProps } from "./Markdown.types"

const Markdown: React.FC<MarkdownProps> = ({ text, isUnselectable }) => {
	if (!text) return null

	const innerHTML = { __html: md.render(text) }
	const markdownClasses: string = classNames(styles.markdown, {
		[styles.markdownUnselectable]: isUnselectable,
	})

	return (
		<div className={markdownClasses} dangerouslySetInnerHTML={innerHTML}></div>
	)
}

export default Markdown
