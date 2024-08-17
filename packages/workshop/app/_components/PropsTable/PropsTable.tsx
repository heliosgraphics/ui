import { Flex, Table, Pill } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { PropsTableProps } from "./PropsTable.types"
import { WorkshopColorAccentSelector } from "./_components/WorkshopColorAccentSelector"
import { WorkshopColorSelector } from "./_components/WorkshopColorSelector"
import { WorkshopDisabledSelector } from "./_components/WorkshopDisabledSelector"
import { WorkshopEmphasisSelector } from "./_components/WorkshopEmphasisSelector"
import { WorkshopIconAccentSelector } from "./_components/WorkshopIconAccentSelector"
import { WorkshopIconSelector } from "./_components/WorkshopIconSelector"
import { WorkshopIntentSelector } from "./_components/WorkshopIntentSelector"
import { WorkshopLoadingSelector } from "./_components/WorkshopLoadingSelector"

export const PropsTable: FC<PropsTableProps> = ({ meta }) => {
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
					{Object.values(meta).map((value: unknown, key) => {
						const name: string = Object.keys(meta)[key]
						const type: string = value["type"] || meta[name].toString() || "Unknown"
						const description: string = value["description"] || "-"
						const isExtends: boolean = name === "_extends"
						const isRequired: boolean = !isExtends && !value["isOptional"]
						const hasAlias: boolean = Boolean(value["alias"]?.length)

						if (name.startsWith("_") && !isExtends) return null
            if (hasAlias) return null;

						return (
							<tr key={key}>
								<td>{!isExtends ? name : <em>extends</em>}</td>
								<td>
									<Flex gap={4} isWrapping={true} isBetween={true}>
										<Flex>
											<Pill label={type} color="orange" size="small" isMono={true} />
										</Flex>
										{type === "HeliosIntentionType" && name === "intent" && <WorkshopIntentSelector />}
										{type === "HeliosIconType" && name === "icon" && <WorkshopIconSelector />}
										{type === "HeliosIconType" && name === "iconAccent" && <WorkshopIconAccentSelector />}
										{type === "HeliosIconType" && (name === "iconAccent" || name === 'iconRight') && <WorkshopIconAccentSelector />}
										{type === "HeliosColors" && name === "color" && <WorkshopColorSelector />}
										{type === "HeliosColors" && name === "colorAccent" && <WorkshopColorAccentSelector />}
										{type === "HeliosEmphasisType" && name === "emphasis" && <WorkshopEmphasisSelector />}
										{type === "boolean" && name === "isDisabled" && <WorkshopDisabledSelector />}
										{type === "boolean" && name === "isLoading" && <WorkshopLoadingSelector />}
									</Flex>
								</td>
								<td>{description}</td>
								<td>
									{isRequired && (
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
