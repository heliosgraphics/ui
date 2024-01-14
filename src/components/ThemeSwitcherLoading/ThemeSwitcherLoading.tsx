import { Button, ButtonGroup } from "../.."
import type { ThemeSwitcherLoadingProps } from "./ThemeSwitcherLoading.types"

const ThemeSwitcherLoading: React.FC<ThemeSwitcherLoadingProps> = () => {
	return (
		<ButtonGroup>
			<Button
				size="tiny"
				isLoading={true}
				isDisabled={true}
				value="Loading"
				intent="silent"
			></Button>
		</ButtonGroup>
	)
}

export default ThemeSwitcherLoading
