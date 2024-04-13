import * as React from "react"
import type { SVGProps } from "react"
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M8.793 18.707a1 1 0 0 0 1.414-1.414L5.914 13H21a1 1 0 1 0 0-2H5.914l4.293-4.293a1 1 0 1 0-1.414-1.414L2 12"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgArrowLeft
