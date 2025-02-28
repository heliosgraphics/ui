import type { SVGProps } from "react"
const SvgFlame = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M19 13a7 7 0 1 1-14 0c0-2.521 1.116-4.705 2-7 1.14.38 1.99 1.192 2.607 2.054C10.195 6.456 12 4 13.375 3 15 5 19 7.545 19 13"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgFlame
