import { cleanMarkdown, md } from "./markdown"
import { it, describe, expect } from "vitest"

describe("markdown", () => {
	describe("cleanMarkdown", () => {
		const COLLECTION = {} as any

		it.skip("Returns", () =>
			expect(cleanMarkdown(COLLECTION, "")).toEqual("Expect"))
	})

	describe("md", () => {
		const SAMPLE = `Hello\n\nHey`
		const SAMPLE_OUTPUT = `<p>Hello</p>\n<p>Hey</p>\n`

		it("Returns", () => expect(md.render(SAMPLE)).toEqual(SAMPLE_OUTPUT))
	})
})
