import styles from "./Table.module.css"
import { getClasses } from "@heliosgraphics/utils"
import type { FC } from "react"
import type { TableProps } from "./Table.types"

const Table: FC<TableProps> = ({ children, hasBorder }) => {
	const tableClasses: string = getClasses(styles.table, {
		[styles.tableBorder]: hasBorder,
	})

	return <table className={tableClasses}>{children}</table>
}

export default Table
