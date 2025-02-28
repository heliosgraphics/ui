import type { SVGProps } from "react"
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M15.945 8.5c0-2.485-1.555-4.5-4-4.5s-4 2.015-4 4.5c0 1.702.84 3.183 2.079 3.948a.47.47 0 0 1 .205.524.42.42 0 0 1-.307.286c-3.126.815-5.508 2.473-5.915 5.744-.068.548.386.998.938.998h14c.552 0 1.007-.45.939-.998-.407-3.271-2.79-4.93-5.916-5.744a.42.42 0 0 1-.306-.286.47.47 0 0 1 .205-.524c1.238-.765 2.078-2.246 2.078-3.948"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgPerson
