"use client"

import { Button, type HeliosThemes } from "../.."
import { useState, useEffect } from "react"
import type { FC } from "react"
import type { ThemeSwitcherProps } from "./ThemeSwitcher.types"

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ isIconOnly = false, size = "small" }) => {
	const [theme, setTheme] = useState<HeliosThemes>(global.window?.__theme || "light")
	const isDark: boolean = theme === "dark"

	const toggleTheme = () => {
		global.window?.__setPreferredTheme(isDark ? "light" : "dark")
	}

	useEffect(() => {
		global.window.__onThemeChange = setTheme
	}, [])

	return (
		<Button
			value={isDark ? "Light Mode" : "Dark Mode"}
			size={size}
			icon={isDark ? "sun" : "moon"}
			intent="silent"
			onClick={toggleTheme}
			isIconOnly={isIconOnly}
		/>
	)
}
