import { md } from "./Markdown.utils"
import classNames from "@sindresorhus/class-names"
import styles from "./Markdown.module.css"
import type { FC } from "react"
import type { MarkdownProps } from "./Markdown.types"

const Markdown: FC<MarkdownProps> = ({ text, isUnselectable }) => {
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
