import type { FC } from "react"
import type { ExampleGridProps } from "./ExampleGrid.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const SAMPLE_CODE = `<Grid columns={2}>
<Text type="small">01</Text>
<Text type="small">02</Text>
<Text type="small">03</Text>
<Text type="small">04</Text>
</Grid>`

const ExampleGrid: FC<ExampleGridProps> = () => {
	return (
		<>
			<LiveComponent code={SAMPLE_CODE} />
		</>
	)
}

export default ExampleGrid
