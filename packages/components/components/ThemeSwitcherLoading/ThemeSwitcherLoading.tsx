import { Toggle } from "../.."
import type { FC } from "react"
import type { ThemeSwitcherLoadingProps } from "./ThemeSwitcherLoading.types"

const ThemeSwitcherLoading: FC<ThemeSwitcherLoadingProps> = () => {
	return <Toggle label="Dark Theme" isDisabled={true} isSmall={true} isChecked={false} intent="silent" />
}

export default ThemeSwitcherLoading
