import { type FC } from "react"
import type { ExampleClockProps } from "./ExampleClock.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const CODE_SAMPLE = `<Clock/>`

const ExampleClock: FC<ExampleClockProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleClock
