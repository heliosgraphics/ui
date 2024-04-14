import type { FC } from "react"
import LiveComponent from "../LiveComponent"
import type { ExampleMasonryProps } from "./ExampleMasonry.types"

const CODE = `<Masonry>
	<Box height={240}>01</Box>
	<Box>02</Box>
	<Box>03</Box>
	<Box height={120}>04</Box>
	<Box height={280}>05</Box>
	<Box>06</Box>
	<Box>07</Box>
</Masonry>`

const ExampleMasonry: FC<ExampleMasonryProps> = () => {
	return <LiveComponent code={CODE} />
}

export default ExampleMasonry
