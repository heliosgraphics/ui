import classNames from "@sindresorhus/class-names"
import styles from "./Slider.module.css"
import type { FC } from "react"
import type { SliderProps } from "./Slider.types"

const Slider: FC<SliderProps> = ({ items }) => {
	const sliderClasses: string = classNames(styles.slider, "flex")

	return (
		<ul className={sliderClasses}>
			{items?.map((item, key) => <li key={key}>{item}</li>)}
		</ul>
	)
}

export default Slider
