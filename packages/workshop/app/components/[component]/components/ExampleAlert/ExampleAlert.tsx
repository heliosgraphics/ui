import { meta } from "@heliosgraphics/ui/components/Alert/Alert.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
import type { ExampleAlertProps } from "./ExampleAlert.types"
import type { FC } from "react"

const CODE_SAMPLE = `<Alert title="Vitae, assumenda aliquid" intent={intent} icon="info">
  {INTENT_DESCRIPTIONS[intent]}
</Alert>`

const ExampleAlert: FC<ExampleAlertProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
			<PropsTable meta={meta} />
		</>
	)
}

export default ExampleAlert
