import React from "react"
import { getTypographyUtility } from "../utils/typography"
import H0 from "./components/H0/H0"
import H1 from "./components/H1/H1"
import H2 from "./components/H2/H2"
import H3 from "./components/H3/H3"
import H4 from "./components/H4/H4"
import H5 from "./components/H5/H5"
import H6 from "./components/H6/H6"
import styles from "./Heading.module.css"
import type { HeadingProps } from "./Heading.types"

const Heading: React.FC<HeadingProps> = (props) => {
	const utility: string = getTypographyUtility(
		{ ...props, className: styles.heading },
		true,
	)
	// TODO remvoe more
	const {
		level,
		textAlign,
		lineClamp,
		fontFamily,
		fontStyle,
		fontWeight,
		textDecoration,
		...validProps
	} = props

	const lineclampStyle = props.lineClamp
		? {
				display: "-webkit-box",
				WebkitLineClamp: props.lineClamp,
				WebkitBoxOrient: "vertical",
				overflow: "hidden",
			}
		: {}

	const allProps = {
		...validProps,
		style: lineclampStyle,
		className: utility,
	}

	switch (props.level) {
		case 0:
			return <H0 {...allProps} />
		case 1:
			return <H1 {...allProps} />
		case 2:
			return <H2 {...allProps} />
		case 3:
			return <H3 {...allProps} />
		case 4:
			return <H4 {...allProps} />
		case 5:
			return <H5 {...allProps} />
		case 6:
			return <H6 {...allProps} />

		default:
			null
	}

	return null
}

export default Heading
