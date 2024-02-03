import type { DivProps } from "./Div.types"

const Div: React.FC<DivProps> = (props) => {
	return (
		<div
			{...props}
			className={`p ${props.className}`}
			data-component="Text.Div"
		/>
	)
}

export default Div
