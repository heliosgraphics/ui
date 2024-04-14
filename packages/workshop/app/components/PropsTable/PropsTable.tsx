import { Flex, Table, Pill } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { PropsTableProps } from "./PropsTable.types"
import WorkshopColorAccentSelector from "../WorkshopColorAccentSelector"
import WorkshopColorSelector from "../WorkshopColorSelector"
import WorkshopDisabledSelector from "../WorkshopDisabledSelector"
import WorkshopEmphasisSelector from "../WorkshopEmphasisSelector"
import WorkshopIconAccentSelector from "../WorkshopIconAccentSelector"
import WorkshopIconSelector from "../WorkshopIconSelector"
import WorkshopIntentSelector from "../WorkshopIntentSelector"
import WorkshopLoadingSelector from "../WorkshopLoadingSelector"

const PropsTable: FC<PropsTableProps> = ({ meta }) => {
	if (!meta) return null

	return (
		<Table hasBorder={false} isMonoHeader={true}>
			<>
				<thead>
					<tr>
						<td>Name</td>
						<td>Type</td>
						<td>Description</td>
						<td>Required</td>
					</tr>
				</thead>
				<tbody>
					{Object.values(meta).map((value: any, key) => {
						const name: string = Object.keys(meta)[key]
						const type: string = value["type"] || "Unknown"
						const description: string = value["description"] || "-"

						if (name.startsWith("_")) return null

						return (
							<tr key={key}>
								<td>{name}</td>
								<td>
									<Flex gap={4} isWrapping={true} isBetween={true}>
										<Flex>
											<Pill label={type} color="orange" size="small" isMono={true} />
										</Flex>
										{type === "HeliosIntentionType" && name === "intent" && <WorkshopIntentSelector />}
										{type === "HeliosIconType" && name === "icon" && <WorkshopIconSelector />}
										{type === "HeliosIconType" && name === "iconAccent" && <WorkshopIconAccentSelector />}
										{type === "HeliosColors" && name === "color" && <WorkshopColorSelector />}
										{type === "HeliosColors" && name === "colorAccent" && <WorkshopColorAccentSelector />}
										{type === "HeliosEmphasisType" && name === "emphasis" && <WorkshopEmphasisSelector />}
										{type === "boolean" && name === "isDisabled" && <WorkshopDisabledSelector />}
										{type === "boolean" && name === "isLoading" && <WorkshopLoadingSelector />}
									</Flex>
								</td>
								<td>{description}</td>
								<td>
									{!value["isOptional"] && (
										<Flex>
											<Pill color="gray" label="Yes" size="small" isMono={true} />
										</Flex>
									)}
								</td>
							</tr>
						)
					})}
				</tbody>
			</>
		</Table>
	)
}

export default PropsTable
