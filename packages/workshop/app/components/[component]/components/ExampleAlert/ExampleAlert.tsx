import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { ExampleAlertProps } from "./ExampleAlert.types"
import type { FC } from "react"

const CODE_SAMPLE = `<Alert intent={intent} icon={icon}>{INTENT_DESCRIPTIONS[intent]}</Alert>`

const ExampleAlert: FC<ExampleAlertProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleAlert
