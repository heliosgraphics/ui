"use client"

import { Button, ButtonGroup, Flex, Separator } from "@heliosgraphics/ui"
import { useContext, useState } from "react"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"
import type { FC, ChangeEvent } from "react"

export const ExampleButton: FC = () => {
	const { intent, icon, iconAccent } = useContext(WorkshopContext)
	const [flair, setFlair] = useState<number>(0)

	const onFlairToggle = () => setFlair(flair === 0 ? 4 : 0)
	const onFileSelect = (event: ChangeEvent) => console.log({ event })

	return (
		<>
			<Separator isLight={true} />
			<Flex isColumn={true} gap={12} padding={16}>
				<ButtonGroup>
					<Button intent={intent} value="Normal" flair={flair} />
					<Button intent={intent} value="Tiny" size="tiny" flair={flair} />
					<Button intent={intent} value="Small" size="small" flair={flair} />
					<Button intent={intent} value="Loading" isLoading={true} />
					<Button intent={intent} value="Disabled" isDisabled={true} />
					<Button intent={intent} value="Both" isLoading={true} isDisabled={true} />
					<Button intent={intent} value="Icon" icon={icon} />
					<Button intent={intent} value="Icon Right" iconRight={iconAccent} />
					<Button intent={intent} value="Icon Right" iconRight={iconAccent} size='small'/>
					<Button intent={intent} value="Icon Right" iconRight={iconAccent} size='tiny'/>
					<Button intent={intent} value="Both" iconLeft={icon} iconRight={iconAccent}/>
					<Button intent={intent} value="Both" iconLeft={icon} iconRight={iconAccent} size='small'/>
					<Button intent={intent} value="Both" iconLeft={icon} iconRight={iconAccent} size='tiny'/>
					<Button intent={intent} value="Icon Only" icon={icon} isIconOnly={true} />
					<Button intent={intent} value="Icon Only Loading" icon={icon} isIconOnly={true} isLoading={true} />
					<Button intent={intent} value="Icon Only Small" icon={icon} size="small" isIconOnly={true} />
					<Button intent={intent} value="Icon Small" icon={icon} size="small" />
					<Button intent={intent} value="Icon Only Loading Small" icon="pin" size="small" isIconOnly={true} isLoading={true} />
					<Button intent={intent} value="Icon Only Tiny" icon={icon} size="tiny" isIconOnly={true} />
					<Button intent={intent} value="Icon Tiny" icon={icon} size="tiny" />
					<Button intent={intent} value="Icon Only Loading Tiny" icon={icon} size="tiny" isLoading={true} isIconOnly={true} />
					<Button intent={intent} value="Rounded" isRounded={true} />
					<Button intent={intent} value="Rounded" isRounded={true} isIconOnly={true} icon={icon} />
					<Button intent={intent} value="Rounded Icon" icon={icon} isRounded={true} />
					<Button intent={intent} value="Round Tiny" isRounded={true} size="tiny" />
					<Button intent={intent} value="Round Tiny Icon" isRounded={true} size="tiny" icon={icon} />
					<Button intent={intent} value="Round Small" isRounded={true} size="small" />
					<Button intent={intent} value="Round Small Icon" isRounded={true} size="small" icon={icon} />
				</ButtonGroup>
				<Separator isLight={true} />
				<ButtonGroup>
					<Button intent="silent" value="Flair" onClick={onFlairToggle} />
				</ButtonGroup>
				<Separator isLight={true} />
				<ButtonGroup>
					<Button
						intent={intent}
						value="Upload"
						icon={iconAccent}
						accept="image/*;capture=camera"
						type="file"
						onChange={onFileSelect}
					/>
					<Button
						intent={intent}
						value="Upload"
						icon={iconAccent}
						accept="image/*;capture=camera"
						isLoading={true}
						type="file"
						onChange={onFileSelect}
					/>
					<Button
						intent={intent}
						value="Upload"
						icon={iconAccent}
						accept="image/*;capture=camera"
						isLoading={true}
						flair={flair}
						isDisabled={true}
						type="file"
						onChange={onFileSelect}
					/>
				</ButtonGroup>
			</Flex>
		</>
	)
}
