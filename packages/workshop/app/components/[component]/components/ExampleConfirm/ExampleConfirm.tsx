"use client"

import { meta } from "@heliosgraphics/ui/components/Confirm/Confirm.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
import { useState, type FC } from "react"
import type { ExampleConfirmProps } from "./ExampleConfirm.types"

const CODE_SAMPLE = `<>
<Confirm
  cancelText="Cancel"
  confirmText="Delete"
  description="Are you sure you want to delete this?"
  icon="trash"
  intent="danger"
  isOpen={isConfirming}
  onCancel={onConfirmToggle}
  onConfirm={onConfirmToggle}
  title="Confirm Delete"/>
  <ButtonGroup>
    <Button value="Toggle" intent="silent" onClick={onConfirmToggle} />
  </ButtonGroup>
</>`

const ExampleConfirm: FC<ExampleConfirmProps> = () => {
	const [isConfirming, setConfirming] = useState<boolean>(false)
	const onConfirmToggle = () => setConfirming(!isConfirming)

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ isConfirming, onConfirmToggle }} />
			<PropsTable meta={meta} />
		</>
	)
}

export default ExampleConfirm
