"use client"

import { useContext, useState } from "react"
import { Button, ButtonGroup, Flex, Separator } from "@heliosgraphics/ui"
import { IntentContext } from "../../contexts/IntentContext"
import type { ExampleButtonProps } from "./ExampleButton.types"
import type { FC } from "react"

const ExampleButton: FC<ExampleButtonProps> = () => {
	const { intent } = useContext(IntentContext)
	const [flair, setFlair] = useState<number>(0)

	const onFlairToggle = () => setFlair(flair === 0 ? 4 : 0)
	const onFileSelect = (event) => console.log({ event })

	return (
		<Flex isColumn={true} gap={16}>
			<ButtonGroup>
				<Button intent="silent" value="Flair" onClick={onFlairToggle} />
			</ButtonGroup>
			<Separator isLight={true} />
			<ButtonGroup>
				<Button intent={intent} value="Normal" flair={flair} />
				<Button intent={intent} value="Tiny" size="tiny" flair={flair} />
				<Button intent={intent} value="Small" size="small" flair={flair} />
				<Button intent={intent} value="Loading" isLoading={true} />
				<Button intent={intent} value="Disabled" isDisabled={true} />
				<Button
					intent={intent}
					value="Both"
					isLoading={true}
					isDisabled={true}
				/>
				<Button intent={intent} value="Icon" icon="pin" />
				<Button
					intent={intent}
					value="Icon Only"
					icon="pin"
					isIconOnly={true}
				/>
				<Button
					intent={intent}
					value="Icon Only Loading"
					icon="pin"
					isIconOnly={true}
					isLoading={true}
				/>
				<Button
					intent={intent}
					value="Icon Only Small"
					icon="pin"
					size="small"
					isIconOnly={true}
				/>
				<Button intent={intent} value="Icon Small" icon="pin" size="small" />
				<Button
					intent={intent}
					value="Icon Only Loading Small"
					icon="pin"
					size="small"
					isIconOnly={true}
					isLoading={true}
				/>
				<Button
					intent={intent}
					value="Icon Only Tiny"
					icon="pin"
					size="tiny"
					isIconOnly={true}
				/>
				<Button intent={intent} value="Icon Tiny" icon="pin" size="tiny" />
				<Button
					intent={intent}
					value="Icon Only Loading Tiny"
					icon="pin"
					size="tiny"
					isLoading={true}
					isIconOnly={true}
				/>
				<Button intent={intent} value="Rounded" isRounded={true} />
				<Button
					intent={intent}
					value="Rounded Icon"
					icon="bullseye"
					isRounded={true}
				/>
				<Button
					intent={intent}
					value="Round Tiny"
					isRounded={true}
					size="tiny"
				/>
				<Button
					intent={intent}
					value="Round Tiny Icon"
					isRounded={true}
					size="tiny"
					icon="bullseye"
				/>
				<Button
					intent={intent}
					value="Round Small"
					isRounded={true}
					size="small"
				/>
				<Button
					intent={intent}
					value="Round Small Icon"
					isRounded={true}
					size="small"
					icon="bullseye"
				/>
			</ButtonGroup>
			<Separator />
			<ButtonGroup>
				<Button
					intent={intent}
					value="Upload"
					icon="cloud"
					accept="image/*;capture=camera"
					type="file"
					onChange={onFileSelect}
				/>
				<Button
					intent={intent}
					value="Upload"
					icon="cloud"
					accept="image/*;capture=camera"
					isLoading={true}
					type="file"
					onChange={onFileSelect}
				/>
				<Button
					intent={intent}
					value="Upload"
					icon="cloud"
					accept="image/*;capture=camera"
					isLoading={true}
					flair={flair}
					isDisabled={true}
					type="file"
					onChange={onFileSelect}
				/>
			</ButtonGroup>
		</Flex>
	)
}

export default ExampleButton
