import { Button, ButtonGroup } from "../.."
import type { FC } from "react"
import type { ThemeSwitcherLoadingProps } from "./ThemeSwitcherLoading.types"

const ThemeSwitcherLoading: FC<ThemeSwitcherLoadingProps> = ({ isIconOnly = false, size = "small" }) => {
	return (
		<ButtonGroup>
			<Button
				value="Loading"
				size={size}
				isRounded={true}
				icon="dot"
				intent="silent"
				isDisabled={true}
				isIconOnly={isIconOnly}
			/>
		</ButtonGroup>
	)
}

export { ThemeSwitcherLoading }
