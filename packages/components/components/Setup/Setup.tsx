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

// will be dangerously inlined, keep it simple as possible
function code() {
	globalThis.__onThemeChange = function () {}

	function setTheme(newTheme) {
		globalThis.__theme = newTheme
		preferredTheme = newTheme
		document.documentElement.dataset.theme = newTheme
		globalThis.__onThemeChange(newTheme)
	}

	var preferredTheme
	var darkQuery = globalThis.matchMedia("(prefers-color-scheme: dark)")

	try {
		preferredTheme = localStorage.getItem("theme") as HeliosThemes
	} catch (error) {
		console.error(error)
	}

	globalThis.__setPreferredTheme = function (newTheme) {
		try {
			setTheme(newTheme)
			localStorage.setItem("theme", newTheme)
		} catch (error) {
			console.error(error)
		}
	}

	darkQuery.addEventListener("change", function (event) {
		globalThis.__setPreferredTheme(event.matches ? "dark" : "light")
	})

	document.addEventListener("click", ({ x }) => {
		if (x > 256 && globalThis.location.hash === "#ui-menu") {
			globalThis.location.hash = "#ui"
		}
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
				href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
				rel="stylesheet"
			/>
			<script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />
		</>
	)
}

export default Setup
