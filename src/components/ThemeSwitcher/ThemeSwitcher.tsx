"use client"

import { Button, ButtonGroup } from "../.."
import { useState, useEffect } from "react"
import type { ThemeSwitcherProps } from "./ThemeSwitcher.types"

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
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
				size="tiny"
				value={isDark ? "dark" : "light"}
				onClick={toggleTheme}
				intent="silent"
			></Button>
		</ButtonGroup>
	)
}

export default ThemeSwitcher
