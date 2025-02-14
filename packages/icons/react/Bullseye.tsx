import type { SVGProps } from "react"
const SvgBullseye = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgBullseye
