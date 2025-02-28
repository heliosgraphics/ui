import type { SVGProps } from "react"
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M5.5 4a.5.5 0 0 0-.5.5V7H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-8V4.5a.5.5 0 0 0-.5-.5z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgFolder
