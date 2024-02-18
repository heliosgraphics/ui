import { Button, ButtonGroup } from "../.."
import type { FC } from "react"
import type { ThemeSwitcherLoadingProps } from "./ThemeSwitcherLoading.types"

const ThemeSwitcherLoading: FC<ThemeSwitcherLoadingProps> = () => {
	return (
		<ButtonGroup>
			<Button value="Loading" size="small" isRounded={true} icon="dot" intent="silent" isDisabled={true} />
		</ButtonGroup>
	)
}

export default ThemeSwitcherLoading
