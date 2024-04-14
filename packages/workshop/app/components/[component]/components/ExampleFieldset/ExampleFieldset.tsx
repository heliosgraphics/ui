import type { FC } from "react"
import type { ExampleFieldsetProps } from "./ExampleFieldset.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const SAMPLE_CODE = `<Fieldset legend="Your favorite flower">
	TBD
</Fieldset>`

const ExampleFieldset: FC<ExampleFieldsetProps> = () => {
	return (
		<>
			<LiveComponent code={SAMPLE_CODE} />
		</>
	)
}

export default ExampleFieldset
