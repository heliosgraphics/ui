import type { FC } from "react"
import type { ExampleDatePickerProps } from "./ExampleDatePicker.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const SAMPLE_CODE = `<DatePicker/>`

const ExampleDatePicker: FC<ExampleDatePickerProps> = () => {
	return (
		<>
			<LiveComponent code={SAMPLE_CODE} />
		</>
	)
}

export default ExampleDatePicker
