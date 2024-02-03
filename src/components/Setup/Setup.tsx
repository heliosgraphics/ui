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
			<script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />
		</>
	)
}

export default Setup
