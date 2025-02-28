import type { SVGProps } from "react"
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M18 11a6 6 0 0 0-4.195-5.724C13.613 4.603 13.307 3.613 13 3h-2c-.307.613-.613 1.603-.805 2.276A6 6 0 0 0 6 11v4H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-1zm-4 8a2 2 0 1 1-4 0v-.75a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgBell
