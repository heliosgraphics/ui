import React, { useEffect, useState } from "react"
import Toggle from "../Toggle"
import type { FUIThemes } from "@heliosgraphics/library/types/themes"

const ThemeSwitcher: React.FC<{}> = () => {
	const [theme, setTheme] = useState<FUIThemes | null>(null)
	const isDark: boolean = theme === "dark"
	const [dark, setDark] = useState<boolean>(isDark)

	const setThemeClass = (localTheme: FUIThemes) => {
		const isLocalDark: boolean = localTheme === "dark"

		if (isLocalDark) {
			document?.body?.classList.remove("light")
			document?.body?.classList.add("dark")
		} else {
			document?.body?.classList.remove("dark")
			document?.body?.classList.add("light")
		}

		setDark(localTheme === "dark")
		return setTheme(localTheme)
	}

	useEffect(() => {
		const currentTheme: FUIThemes | null = localStorage?.getItem(
			"theme",
		) as FUIThemes
		const prefersDarkScheme = globalThis?.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches

		const newTheme: FUIThemes = !!currentTheme
			? currentTheme
			: prefersDarkScheme
				? "dark"
				: "light"

		setThemeClass(newTheme)
	}, [])

	const toggleTheme = () => {
		const newTheme: FUIThemes = isDark ? "light" : "dark"

		setThemeClass(newTheme)
		localStorage?.setItem("theme", newTheme)
	}

	return (
		<Toggle
			onChange={toggleTheme}
			label=""
			isChecked={dark}
			id="theme-switcher"
		/>
	)
}

export default ThemeSwitcher
