import type { SVGProps } from "react"
const SvgBars = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M5.143 6C4.512 6 4 6.448 4 7s.512 1 1.143 1h13.714C19.488 8 20 7.552 20 7s-.512-1-1.143-1zM4 12c0-.552.512-1 1.143-1h13.714c.631 0 1.143.448 1.143 1s-.512 1-1.143 1H5.143C4.512 13 4 12.552 4 12m0 5c0-.552.512-1 1.143-1h13.714c.631 0 1.143.448 1.143 1s-.512 1-1.143 1H5.143C4.512 18 4 17.552 4 17"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgBars
