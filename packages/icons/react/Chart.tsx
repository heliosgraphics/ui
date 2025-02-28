import type { SVGProps } from "react"
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path d="M13 4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm4 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-12 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm4 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
	</svg>
)
export default SvgChart
