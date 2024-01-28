import { Toggle } from "../.."
import type { ThemeSwitcherLoadingProps } from "./ThemeSwitcherLoading.types"

const ThemeSwitcherLoading: React.FC<ThemeSwitcherLoadingProps> = () => {
	return (
		<Toggle
			label="Dark Theme"
			isDisabled={true}
			isSmall={true}
			isChecked={false}
			intent="silent"
		/>
	)
}

export default ThemeSwitcherLoading
