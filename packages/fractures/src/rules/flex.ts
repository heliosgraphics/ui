import type { FractureRuleType } from "../types/meta"

export const flex: Array<FractureRuleType> = [
	{ selector: "flex-wrap", declarations: { flexWrap: "wrap" } },
	{ selector: "flex-row", declarations: { flexDirection: "row" } },
	{ selector: "flex-column", declarations: { flexDirection: "column" } },
	{
		selector: "space-around",
		declarations: { justifyContent: "space-around" },
	},
	{
		selector: "space-between",
		declarations: { justifyContent: "space-between" },
	},
	{
		selector: "space-evenly",
		declarations: { justifyContent: "space-evenly" },
	},

	{
		selector: "flex-center",
		declarations: { alignItems: "center", justifyContent: "center" },
	},
	{ selector: "flex-y-center", declarations: { alignItems: "center" } },
	{ selector: "flex-x-center", declarations: { justifyContent: "center" } },
	{ selector: "flex-left", declarations: { justifyContent: "flex-start" } },
	{ selector: "flex-right", declarations: { justifyContent: "flex-end" } },
	{ selector: "flex-baseline", declarations: { alignItems: "baseline" } },
	{ selector: "flex-top", declarations: { alignItems: "flex-start" } },
	{ selector: "flex-bottom", declarations: { alignItems: "flex-end" } },
	{ selector: "flex-stretch", declarations: { alignItems: "stretch" } },

	{ selector: "align-start", declarations: { alignItems: "start" } },
	{ selector: "align-end", declarations: { alignItems: "end" } },
	{ selector: "align-stretch", declarations: { alignItems: "stretch" } },

	{
		selector: "self-center",
		declarations: { alignSelf: "center", justifySelf: "center" },
	},
	{ selector: "self-x-center", declarations: { justifySelf: "center" } },
	{ selector: "self-y-center", declarations: { alignSelf: "center" } },
	{ selector: "self-left", declarations: { justifySelf: "flex-start" } },
	{ selector: "self-right", declarations: { justifySelf: "flex-end" } },
	{ selector: "self-baseline", declarations: { justifySelf: "baseline" } },
	{ selector: "self-top", declarations: { alignSelf: "flex-start" } },
	{ selector: "self-bottom", declarations: { alignSelf: "flex-end" } },

	{ selector: "flex-gap-px", declarations: { gap: "var(--box-px)" } },
	{ selector: "flex-gap-1", declarations: { gap: "var(--box-1)" } },
	{ selector: "flex-gap-2", declarations: { gap: "var(--box-2)" } },
	{ selector: "flex-gap-3", declarations: { gap: "var(--box-3)" } },
	{ selector: "flex-gap-4", declarations: { gap: "var(--box-4)" } },
	{ selector: "flex-gap-5", declarations: { gap: "var(--box-5)" } },
	{ selector: "flex-gap-6", declarations: { gap: "var(--box-6)" } },
	{ selector: "flex-gap-7", declarations: { gap: "var(--box-7)" } },
	{ selector: "flex-gap-8", declarations: { gap: "var(--box-8)" } },
	{ selector: "flex-gap-9", declarations: { gap: "var(--box-9)" } },
	{ selector: "flex-gap-10", declarations: { gap: "var(--box-10)" } },
	{ selector: "flex-gap-11", declarations: { gap: "var(--box-11)" } },
	{ selector: "flex-gap-12", declarations: { gap: "var(--box-12)" } },
	{ selector: "flex-gap-13", declarations: { gap: "var(--box-13)" } },
	{ selector: "flex-gap-14", declarations: { gap: "var(--box-14)" } },
	{ selector: "flex-gap-15", declarations: { gap: "var(--box-15)" } },
	{ selector: "flex-gap-16", declarations: { gap: "var(--box-16)" } },
	{ selector: "flex-gap-24", declarations: { gap: "var(--box-24)" } },
	{ selector: "flex-gap-32", declarations: { gap: "var(--box-32)" } },
	{ selector: "flex-gap-40", declarations: { gap: "var(--box-40)" } },
	{ selector: "flex-gap-48", declarations: { gap: "var(--box-48)" } },

	// TODO minify should consider merging these.
	{ selector: "grow-1", declarations: { flexBasis: 0, flexGrow: 1 } },
	{ selector: "grow-2", declarations: { flexBasis: 0, flexGrow: 2 } },
	{ selector: "grow-3", declarations: { flexBasis: 0, flexGrow: 3 } },
	{ selector: "grow-4", declarations: { flexBasis: 0, flexGrow: 4 } },
	{ selector: "grow-5", declarations: { flexBasis: 0, flexGrow: 5 } },
	{ selector: "grow-6", declarations: { flexBasis: 0, flexGrow: 6 } },
	{ selector: "grow-7", declarations: { flexBasis: 0, flexGrow: 7 } },
	{ selector: "grow-8", declarations: { flexBasis: 0, flexGrow: 8 } },
	{ selector: "grow-9", declarations: { flexBasis: 0, flexGrow: 9 } },
	{ selector: "grow-10", declarations: { flexBasis: 0, flexGrow: 10 } },
	{ selector: "grow-11", declarations: { flexBasis: 0, flexGrow: 11 } },
	{ selector: "grow-12", declarations: { flexBasis: 0, flexGrow: 12 } },
]
