import * as React from "react"
import type { SVGProps } from "react"
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M5.293 16.121a1 1 0 0 1 0-1.414L12 8l6.707 6.707a1 1 0 0 1-1.414 1.414L12 10.828l-5.293 5.293a1 1 0 0 1-1.414 0"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgChevronUp
