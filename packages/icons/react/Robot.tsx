import type { SVGProps } from "react"
const SvgRobot = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M14 5a2 2 0 0 1-1 1.732V8h6a1 1 0 0 1 1 1v3h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3h-.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H4V9a1 1 0 0 1 1-1h6V6.732A2 2 0 1 1 14 5m-6 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-8 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgRobot
