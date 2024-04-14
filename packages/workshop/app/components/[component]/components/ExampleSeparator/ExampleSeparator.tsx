import { type FC } from "react"
import type { ExampleSeparatorProps } from "./ExampleSeparator.types"
import LiveComponent from "../LiveComponent"

const CODE = `<Flex isColumn={true} gap={4}>
	<Separator />
</Flex>`

const ExampleSeparator: FC<ExampleSeparatorProps> = () => {
	return <LiveComponent code={CODE} />
}

export default ExampleSeparator
