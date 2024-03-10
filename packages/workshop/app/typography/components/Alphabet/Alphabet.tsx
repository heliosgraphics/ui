import React from "react"
import { getClasses } from "@heliosgraphics/utils/classnames"
import { Flex, Text } from "@heliosgraphics/ui"
import styles from "./Alphabet.module.css"
import type { HeliosFontFamilyTypes } from "@heliosgraphics/ui"
import type { AlphabetProps, FontTypeInfo } from "./Alphabet.types"

const FONT_SETS: Record<HeliosFontFamilyTypes, FontTypeInfo> = {
	mono: {
		name: "JetBrains Mono",
		url: "https://www.jetbrains.com/lp/mono/",
		license: "https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt",
		className: "mono",
	},
	serif: {
		name: "",
		url: "",
		license: "",
		className: "serif",
	},
	sans: {
		name: "Inter",
		url: "https://rsms.me/inter/",
		license: "https://github.com/rsms/inter/blob/master/LICENSE.txt",
		className: "sans",
	},
}

const Alphabet: React.FC<AlphabetProps> = ({ family }) => {
	const { name, url, license, className } = FONT_SETS[family]
	const letterClasses: string = getClasses(styles.alphabet__letter, className)

	return (
		<Flex isColumn={true} className={styles.alphabet}>
			<div className={letterClasses}>
				<b>Aa</b>
			</div>
			<Text type="small" className={className} emphasis="secondary">
				{name}
			</Text>
			<Text type="tiny" emphasis="secondary">
				<Flex gap={2}>
					<a href={url}>Website</a>
					<span>&middot;</span>
					<a href={license}>License</a>
				</Flex>
			</Text>
		</Flex>
	)
}

export default Alphabet
