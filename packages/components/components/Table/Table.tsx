import styles from "./Table.module.css"
import type { FC } from "react"
import type { TableProps } from "./Table.types"

const Table: FC<TableProps> = ({ children }) => {
	return <table className={styles.table}>{children}</table>
}

export default Table
