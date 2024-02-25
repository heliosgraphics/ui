import { Button, ButtonGroup } from "../.."
import type { FC } from "react"
import type { ThemeSwitcherLoadingProps } from "./ThemeSwitcherLoading.types"

const ThemeSwitcherLoading: FC<ThemeSwitcherLoadingProps> = (props) => {
	return (
		<ButtonGroup>
			<Button
				value="Loading"
				size="small"
				isRounded={true}
				icon="dot"
				intent="silent"
				isDisabled={true}
				{...(props as Partial<ThemeSwitcherLoadingProps>)}
			/>
		</ButtonGroup>
	)
}

export default ThemeSwitcherLoading
