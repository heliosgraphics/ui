import * as React from "react"
import type { SVGProps } from "react"
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M15.293 5.293a1 1 0 1 0-1.414 1.414L18.172 11H3a1 1 0 1 0 0 2h15.172l-4.293 4.293a1 1 0 0 0 1.414 1.414L22 12z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgArrowRight
