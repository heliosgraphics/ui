import Box from "workshop/app/components/Box"
import type { FC } from "react"
import LiveComponent from "../LiveComponent"
import type { ExampleMasonryProps } from "./ExampleMasonry.types"

const CODE = `<Masonry>
<Text type="small">
	<Box>01</Box>
</Text>
<Text type="small">
	<Box height={400}>02</Box>
</Text>
<Text type="small">
	<Box height={240}>03</Box>
</Text>
<Text type="small">
	<Box>04</Box>
</Text>
<Text type="small">
	<Box>05</Box>
</Text>
</Masonry>`

const ExampleMasonry: FC<ExampleMasonryProps> = () => {
	return <LiveComponent code={CODE} scope={{ Box }} />
}

export default ExampleMasonry
