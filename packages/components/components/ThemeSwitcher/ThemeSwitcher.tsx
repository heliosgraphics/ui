"use client"

import { Button, ButtonGroup, Toggle } from "../.."
import { useState, useEffect } from "react"
import type { FC } from "react"
import type { ThemeSwitcherProps } from "./ThemeSwitcher.types"

const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
	const [theme, setTheme] = useState(global.window?.__theme || "light")
	const isDark = theme === "dark"

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
				size="small"
				isRounded={true}
				icon={isDark ? "sun" : "moon"}
				intent="silent"
				onClick={toggleTheme}
			/>
		</ButtonGroup>
	)
}

export default ThemeSwitcher
