import React from "react"
import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"
import Dot from "./Dot"

describe("Dot", () => {
	it("Should match snapshot", () => {
		const dotElement = render(<Dot size={8} color="red" />)
		expect(dotElement).toMatchSnapshot()
	})
})
