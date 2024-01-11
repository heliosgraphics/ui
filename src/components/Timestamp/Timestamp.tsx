import React from "react"
import { getIsValid, formatDate, getFromNow } from "../../utils/dayjs"
import type { TimestampProps } from "./Timestamp.types"

const Timestamp: React.FC<TimestampProps> = ({
	date,
	fromNow,
	text,
	format = "MMMM D, YYYY",
}) => {
	const fromNowDate = getFromNow(date)
	const isValid: boolean = getIsValid(date)
	const parsedIsoString: string =
		date && isValid ? new Date(Date.parse(date))?.toISOString() : ""

	const timestampDate: string = isValid ? parsedIsoString : ""
	const formattedDate: string = fromNow ? fromNowDate : formatDate(date, format)

	return (
		<time dateTime={timestampDate}>
			{!!text && text}
			{formattedDate}
		</time>
	)
}

export default Timestamp
