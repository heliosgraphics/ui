import type { SVGProps } from "react"
const SvgAsterisk = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M13 3a1 1 0 1 0-2 0v5.982a.25.25 0 0 1-.427.177L6.636 5.222a1 1 0 0 0-1.414 1.414l3.937 3.937a.25.25 0 0 1-.177.427H3a1 1 0 1 0 0 2h5.982a.25.25 0 0 1 .177.427l-3.937 3.937a1 1 0 1 0 1.414 1.414l3.937-3.937a.25.25 0 0 1 .427.177V21a1 1 0 1 0 2 0v-5.982a.25.25 0 0 1 .427-.177l3.937 3.937a1 1 0 0 0 1.414-1.414l-3.937-3.937a.25.25 0 0 1 .177-.427H21a1 1 0 1 0 0-2h-5.982a.25.25 0 0 1-.177-.427l3.937-3.937a1 1 0 0 0-1.414-1.414l-3.937 3.937A.25.25 0 0 1 13 8.982z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgAsterisk
