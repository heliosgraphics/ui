import { type FC } from "react"
import type { ExampleSpacerProps } from "./ExampleSpacer.types"
import LiveComponent from "../LiveComponent"

const CODE = `<Flex isColumn={true}>
	<Text type="tiny" fontFamily="mono">
		there is a spacer
	</Text>
	<Spacer gap={24} />
	<Text type="tiny" fontFamily="mono" emphasis="tertiary">
		between us
	</Text>
</Flex>`

const ExampleSpacer: FC<ExampleSpacerProps> = () => {
	return <LiveComponent code={CODE} />
}

export default ExampleSpacer
