"use client"

import { meta } from "@heliosgraphics/ui/components/Confirm/Confirm.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
import { Flex, Button, ButtonGroup, Confirm } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleConfirmProps } from "./ExampleConfirm.types"

const CODE_SAMPLE = `<Confirm>Halo</Confirm>`

const ExampleConfirm: FC<ExampleConfirmProps> = () => {
	const [isConfirming, setConfirming] = useState<boolean>(false)
	const onConfirmToggle = () => setConfirming(!isConfirming)

	return (
		<div>
			<LiveComponent code={CODE_SAMPLE} />
			<PropsTable meta={meta} />
			<Flex>
				<ButtonGroup>
					<Button value="Toggle" intent="silent" onClick={onConfirmToggle} />
				</ButtonGroup>
				<Confirm
					cancelText="Cancel"
					confirmText="Delete"
					description="Are you sure you want to delete this?"
					icon="trash"
					intent="danger"
					isOpen={isConfirming}
					onCancel={onConfirmToggle}
					onConfirm={onConfirmToggle}
					title="Confirm Delete"
				/>
			</Flex>
		</div>
	)
}

export default ExampleConfirm
