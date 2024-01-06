import React from "react"
import Pill from "../Pill"
import type { CategoryProps } from "./Category.types"

const Category: React.FC<CategoryProps> = ({ name, color }) => {
	return <Pill color={color} label={name}></Pill>
}

export default Category
