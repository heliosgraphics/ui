import { it, describe, expect } from "vitest"
import { getFlexUtility } from "./Flex.utils"
import type { FlexProps } from "./Flex.types"

describe("getFlexUtility", () => {
	const MOCK_FLEX_COLUMN_CLASSES = `flex flex-center flex-column flex-wrap`
	const MOCK_FLEX_COLUMN: FlexProps = {
		children: null,
		isColumn: true,
		isWrapping: true,
		isCentered: true,
	}

	it("Generates simple wrapping column classes", () =>
		expect(getFlexUtility(MOCK_FLEX_COLUMN)).toEqual(MOCK_FLEX_COLUMN_CLASSES))

	const MOCK_FLEX_INLINE_CLASSES = `inline-flex gap-16`
	const MOCK_FLEX_INLINE: FlexProps = {
		children: null,
		isInline: true,
		gap: 16,
	}

	it("Generates inline classes", () =>
		expect(getFlexUtility(MOCK_FLEX_INLINE)).toEqual(MOCK_FLEX_INLINE_CLASSES))

	const MOCK_FLEX_CLASSES = `flex`
	const MOCK_FLEX: FlexProps = { children: null }

	it("Generates empty flex without attrs", () =>
		expect(getFlexUtility(MOCK_FLEX)).toEqual(MOCK_FLEX_CLASSES))
	it("Generates empty flex with undefined", () =>
		expect(getFlexUtility(undefined as any)).toEqual(MOCK_FLEX_CLASSES))

	const MOCK_FLEX_DUPLICATE_CLASSES = `flex flex-center`
	const MOCK_FLEX_DUPLICATE: FlexProps = {
		children: null,
		isCentered: true,
		className: "flex",
	}

	it("Generates without duplicated classes", () =>
		expect(getFlexUtility(MOCK_FLEX_DUPLICATE)).toEqual(
			MOCK_FLEX_DUPLICATE_CLASSES,
		))
})
