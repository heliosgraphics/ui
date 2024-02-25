"use client"

import { Button, ButtonGroup, type HeliosThemes } from "../.."
import { useState, useEffect } from "react"
import type { FC } from "react"
import type { ThemeSwitcherProps } from "./ThemeSwitcher.types"

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ isIconOnly = false, size = "small" }) => {
	const [theme, setTheme] = useState<HeliosThemes>(global.window?.__theme || "light")
	const isDark: boolean = theme === "dark"

	const toggleTheme = () => {
		global.window?.__setPreferredTheme(isDark ? "light" : "dark")
	}

	useEffect(() => {
		global.window.__onThemeChange = setTheme
	}, [])

	return (
		<ButtonGroup>
			<Button
				value={isDark ? "Light Mode" : "Dark Mode"}
				size={size}
				isRounded={true}
				icon={isDark ? "sun" : "moon"}
				intent="silent"
				onClick={toggleTheme}
				isIconOnly={isIconOnly}
			/>
		</ButtonGroup>
	)
}

export default ThemeSwitcher
