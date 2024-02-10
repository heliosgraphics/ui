import type { FC } from "react"
import type { HeliosThemes } from "../../types/themes"
import type { SetupProps } from "./Setup.types"

declare global {
	interface Window {
		__theme: HeliosThemes
		__onThemeChange: (theme: HeliosThemes) => void
		__setPreferredTheme: (theme: HeliosThemes) => void
	}
}

function code() {
	globalThis.__onThemeChange = function () {}

	function setTheme(newTheme: HeliosThemes) {
		globalThis.__theme = newTheme
		preferredTheme = newTheme
		document.documentElement.dataset.theme = newTheme
		globalThis.__onThemeChange(newTheme)
	}

	var preferredTheme

	try {
		preferredTheme = localStorage.getItem("theme") as HeliosThemes
	} catch (err) {}

	globalThis.__setPreferredTheme = function (newTheme: HeliosThemes) {
		setTheme(newTheme)
		try {
			localStorage.setItem("theme", newTheme)
		} catch (err) {}
	}

	var darkQuery = globalThis.matchMedia("(prefers-color-scheme: dark)")

	darkQuery.addEventListener("change", function (e) {
		globalThis.__setPreferredTheme(e.matches ? "dark" : "light")
	})

	setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"))
}

const Setup: FC<SetupProps> = () => {
	return (
		<>
			<link rel="preconnect" href="https://rsms.me/" crossOrigin="anonymous" />
			<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			<link
				href="https://fonts.googleapis.com/css2?family=DM+Mono&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400;1,9..40,700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
				rel="stylesheet"
			/>
			<script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />
		</>
	)
}

export default Setup
