import { Button } from "../.."
import type { FC } from "react"
import type { ThemeSwitcherLoadingProps } from "./ThemeSwitcherLoading.types"

export const ThemeSwitcherLoading: FC<ThemeSwitcherLoadingProps> = ({ isIconOnly = false, size = "small" }) => {
	return <Button value="Loading" size={size} icon="dot" intent="silent" isDisabled={true} isIconOnly={isIconOnly} />
}
