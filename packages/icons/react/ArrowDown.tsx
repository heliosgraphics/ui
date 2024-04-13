import * as React from "react"
import type { SVGProps } from "react"
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="m12 22-6.707-6.707a1 1 0 1 1 1.414-1.414L11 18.172V3a1 1 0 1 1 2 0v15.172l4.293-4.293a1 1 0 0 1 1.414 1.414z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgArrowDown
