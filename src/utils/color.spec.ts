import { getColor } from "./color"
import { it, describe, expect } from "vitest"

describe("color", () => {
	describe("getColor", () => {
		describe("Normal colors", () => {
			it("Gets normal aqua", () => expect(getColor("aqua")).toEqual("aqua-500"))
			it("Gets normal blue", () => expect(getColor("blue")).toEqual("blue-500"))
			it("Gets normal gray", () => expect(getColor("gray")).toEqual("gray-500"))
			it("Gets normal green", () =>
				expect(getColor("green")).toEqual("green-500"))
			it("Gets normal orange", () =>
				expect(getColor("orange")).toEqual("orange-500"))
			it("Gets normal pink", () => expect(getColor("pink")).toEqual("pink-500"))
			it("Gets normal purple", () =>
				expect(getColor("purple")).toEqual("purple-500"))
			it("Gets normal red", () => expect(getColor("red")).toEqual("red-500"))
			it("Gets normal yellow", () =>
				expect(getColor("yellow")).toEqual("yellow-500"))
		})

		describe("Light colors", () => {
			it("Gets light aqua", () =>
				expect(getColor("light-aqua")).toEqual("aqua-300"))
			it("Gets light blue", () =>
				expect(getColor("light-blue")).toEqual("blue-300"))
			it("Gets light gray", () =>
				expect(getColor("light-gray")).toEqual("gray-300"))
			it("Gets light green", () =>
				expect(getColor("light-green")).toEqual("green-300"))
			it("Gets light orange", () =>
				expect(getColor("light-orange")).toEqual("orange-300"))
			it("Gets light pink", () =>
				expect(getColor("light-pink")).toEqual("pink-300"))
			it("Gets light purple", () =>
				expect(getColor("light-purple")).toEqual("purple-300"))
			it("Gets light red", () =>
				expect(getColor("light-red")).toEqual("red-300"))
			it("Gets light yellow", () =>
				expect(getColor("light-yellow")).toEqual("yellow-300"))
		})

		describe("Lightest colors", () => {
			it("Gets lightest aqua", () =>
				expect(getColor("lightest-aqua")).toEqual("aqua-100"))
			it("Gets lightest blue", () =>
				expect(getColor("lightest-blue")).toEqual("blue-100"))
			it("Gets lightest gray", () =>
				expect(getColor("lightest-gray")).toEqual("gray-100"))
			it("Gets lightest green", () =>
				expect(getColor("lightest-green")).toEqual("green-100"))
			it("Gets lightest orange", () =>
				expect(getColor("lightest-orange")).toEqual("orange-100"))
			it("Gets lightest pink", () =>
				expect(getColor("lightest-pink")).toEqual("pink-100"))
			it("Gets lightest purple", () =>
				expect(getColor("lightest-purple")).toEqual("purple-100"))
			it("Gets lightest red", () =>
				expect(getColor("lightest-red")).toEqual("red-100"))
			it("Gets lightest yellow", () =>
				expect(getColor("lightest-yellow")).toEqual("yellow-100"))
		})

		describe("Dark colors", () => {
			it("Gets dark aqua", () =>
				expect(getColor("dark-aqua")).toEqual("aqua-700"))
			it("Gets dark blue", () =>
				expect(getColor("dark-blue")).toEqual("blue-700"))
			it("Gets dark gray", () =>
				expect(getColor("dark-gray")).toEqual("gray-700"))
			it("Gets dark green", () =>
				expect(getColor("dark-green")).toEqual("green-700"))
			it("Gets dark orange", () =>
				expect(getColor("dark-orange")).toEqual("orange-700"))
			it("Gets dark pink", () =>
				expect(getColor("dark-pink")).toEqual("pink-700"))
			it("Gets dark purple", () =>
				expect(getColor("dark-purple")).toEqual("purple-700"))
			it("Gets dark red", () => expect(getColor("dark-red")).toEqual("red-700"))
			it("Gets dark yellow", () =>
				expect(getColor("dark-yellow")).toEqual("yellow-700"))
		})

		describe("Darkest colors", () => {
			it("Gets darkest aqua", () =>
				expect(getColor("darkest-aqua")).toEqual("aqua-900"))
			it("Gets darkest blue", () =>
				expect(getColor("darkest-blue")).toEqual("blue-900"))
			it("Gets darkest gray", () =>
				expect(getColor("darkest-gray")).toEqual("gray-900"))
			it("Gets darkest green", () =>
				expect(getColor("darkest-green")).toEqual("green-900"))
			it("Gets darkest orange", () =>
				expect(getColor("darkest-orange")).toEqual("orange-900"))
			it("Gets darkest pink", () =>
				expect(getColor("darkest-pink")).toEqual("pink-900"))
			it("Gets darkest purple", () =>
				expect(getColor("darkest-purple")).toEqual("purple-900"))
			it("Gets darkest red", () =>
				expect(getColor("darkest-red")).toEqual("red-900"))
			it("Gets darkest yellow", () =>
				expect(getColor("darkest-yellow")).toEqual("yellow-900"))
		})

		describe("Specials", () => {
			it("Gets currentcolor", () =>
				expect(getColor("currentcolor")).toEqual("currentcolor"))
			it("Gets white", () => expect(getColor("white")).toEqual("gray-0"))
		})

		describe("Sora colors", () => {
			it("Gets sora blue", () =>
				expect(getColor("sora")).toEqual("color-sora-primary"))
		})

		describe("Fallbacks", () => {
			it("Gets any string fallback", () =>
				expect(getColor(null as any, undefined, "red-400")).toEqual("red-400"))
			it("Gets undefined without fallback", () =>
				expect(getColor(undefined as any, undefined as any)).toEqual(undefined))
		})
	})
})
