"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { useState, type FC } from "react"
import type { ExampleConfirmProps } from "./ExampleConfirm.types"

const CODE_SAMPLE = `<>
<Confirm
  cancelText="Cancel"
  confirmText="Submit"
  description="Are you sure you want submit?"
  icon={icon}
  intent={intent}
  isOpen={isConfirming}
  onCancel={onConfirmToggle}
  onConfirm={onConfirmToggle}
  title="Confirm Submit"/>
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
		</>
	)
}

export default ExampleConfirm
