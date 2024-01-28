import React from "react"
import styles from "./Upload.module.css"
import Text from "../Text"
import Loading from "../Loading"
import Icon from "../Icon"
import classNames from "@sindresorhus/class-names"
import { getUUID } from "@heliosgraphics/utils/uuid"
import type { UploadProps } from "./Upload.types"

const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
	(props: UploadProps, ref: React.Ref<HTMLInputElement>) => {
		const {
			isDisabled,
			isRequired: _,
			isSmall,
			isLoading,
			icon,
			id,
			...goodProps
		} = props
		const { label } = props

		const htmlFor: string = getUUID(id)
		const inputClasses: string = classNames(
			styles.upload,
			"flex flex-column gap-2",
			{
				[styles.uploadDisabled]: isDisabled,
				[styles.uploadSmall]: props.isSmall,
			},
		)

		const flexClasses: string = classNames(
			styles.upload__label,
			"flex flex-y-center",
			{
				["gap-4"]: !props.isSmall,
				["gap-2"]: props.isSmall,
			},
		)

		return (
			<div className={inputClasses}>
				<label className={flexClasses} htmlFor={htmlFor}>
					{!!icon && <Icon size={isSmall ? 20 : 24} name={icon} />}
					{!!label && (
						<Text
							type={props.isSmall ? "tiny" : "small"}
							color="currentcolor"
							fontWeight="medium"
						>
							{label}
						</Text>
					)}
					<input
						{...goodProps}
						type="file"
						id={htmlFor}
						accept="image/*;capture=camera"
						ref={ref}
						required={props.isRequired}
					/>
					{isLoading && <Loading size={10} />}
				</label>
			</div>
		)
	},
)

Upload.displayName = "Upload"

export default Upload
