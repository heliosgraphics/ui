import type { SVGProps } from "react"
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<g clipPath="url(#a)">
			<path
				fillRule="evenodd"
				d="M14.536 5.222a2 2 0 0 1 0-2.829l7.07 7.071a2 2 0 0 1-2.828 0l-3.396 3.396a6 6 0 0 1-1.554 5.797l-3.535-3.536-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-3.536-3.535a6 6 0 0 1 5.797-1.554z"
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
export default SvgPin
