import type { SVGProps } from "react"
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12.5 5a5.5 5.5 0 0 1 5.311 4.065A5.001 5.001 0 0 1 17 19H6a4 4 0 1 1 1.036-7.864A5.5 5.5 0 0 1 12.5 5"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgCloud
