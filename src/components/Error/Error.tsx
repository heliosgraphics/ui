import Heading from "../Heading"

const Error = (props) => {
	const errorCode: string | undefined = props.errorCode
		? `${props.errorCode} `
		: undefined

	return <Heading level={1}>{errorCode}Not found.</Heading>
}

export default Error
