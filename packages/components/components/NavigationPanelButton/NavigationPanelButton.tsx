import { FC } from "react"
import { Button, ButtonGroup } from "../.."
import styles from "./NavigationPanelButton.module.css"
import type { NavigationPanelButtonProps } from "./NavigationPanelButton.types"

const NavigationPanelButton: FC<NavigationPanelButtonProps> = () => {
	return (
		<ButtonGroup className={styles.navigationPanelButton}>
			<a href="#ui-navigation">
				<Button value="Open Menu" intent="silent" icon="bars" isIconOnly={true} />
			</a>
		</ButtonGroup>
	)
}

export default NavigationPanelButton
