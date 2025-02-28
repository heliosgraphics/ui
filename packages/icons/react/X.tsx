import type { SVGProps } from "react"
const SvgX = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<g clipPath="url(#a)">
			<path
				fillRule="evenodd"
				d="M19.778 4.222a1 1 0 0 1 0 1.414l-5.656 5.656a1 1 0 0 0 0 1.415v.002l5.656 5.655a1 1 0 0 1-1.414 1.414l-5.655-5.655-.002-.002a1 1 0 0 0-1.414 0l-.001.001-5.656 5.656a1 1 0 0 1-1.414-1.414l5.656-5.656a1 1 0 0 0 .003-1.413l-5.66-5.659a1 1 0 1 1 1.415-1.414l5.655 5.655.002.002a1 1 0 0 0 1.412.002l5.659-5.66a1 1 0 0 1 1.414 0"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
)
export default SvgX
