import type { SVGProps } from "react"
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M19.324 5.596a.5.5 0 0 0-.707 0l-9.546 9.546-3.889-3.889a.5.5 0 0 0-.707 0l-2.121 2.121a.5.5 0 0 0 0 .707l3.889 3.89 2.121 2.12a1 1 0 0 0 1.414 0l2.121-2.12 9.546-9.546a.5.5 0 0 0 0-.707z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgCheck
