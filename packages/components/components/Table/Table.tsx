import styles from "./Table.module.css"
import { getClasses } from "@heliosgraphics/utils"
import type { FC } from "react"
import type { TableProps } from "./Table.types"

const Table: FC<TableProps> = ({ children, hasBorder }) => {
	const tableElementClasses: string = getClasses(styles.tableElement, {
		[styles.tableElementBorder]: hasBorder,
	})

	return (
		<div className={styles.table}>
			<table className={tableElementClasses}>{children}</table>
		</div>
	)
}

export { Table }
