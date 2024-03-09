import { meta } from "@heliosgraphics/ui/components/Alert/Alert.types"
import { Flex } from "@heliosgraphics/ui"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
import type { FC } from "react"
import type { ExampleAlertProps } from "./ExampleAlert.types"

const CODE_SAMPLE = `<Alert title="Vitae, assumenda aliquid" intent={intent} icon="info">
  {INTENT_DESCRIPTIONS[intent]}
</Alert>`

const ExampleAlert: FC<ExampleAlertProps> = () => {
	return (
		<Flex isColumn={true} gap={0} paddingY={24} withBackground={true}>
			<LiveComponent code={CODE_SAMPLE} />
			<PropsTable meta={meta} />
		</Flex>
	)
}

export default ExampleAlert
