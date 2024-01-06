import React from "react"
import styles from "./Table.module.css"
import type { TableProps } from "./Table.types"

const Table: React.FC<TableProps> = ({ children }) => {
	return <table className={styles.table}>{children}</table>
}

export default Table
