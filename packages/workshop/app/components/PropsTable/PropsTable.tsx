"use client"

import { type FC } from "react"
import { Flex, Table, Pill, Text } from "@heliosgraphics/ui"
import type { PropsTableProps } from "./PropsTable.types"

const PropsTable: FC<PropsTableProps> = ({ meta }) => {
	if (!meta) return null

	return (
		<Table hasBorder={false}>
			<>
				<thead>
					<tr>
						<td>
							<Text type="small" fontFamily="mono" emphasis="secondary">
								Name
							</Text>
						</td>
						<td>
							<Text type="small" fontFamily="mono" emphasis="secondary">
								Type
							</Text>
						</td>
						<td>
							<Text type="small" fontFamily="mono" emphasis="secondary">
								Description
							</Text>
						</td>
						<td>
							<Text type="small" fontFamily="mono" emphasis="secondary">
								Required
							</Text>
						</td>
					</tr>
				</thead>
				<tbody>
					{Object.values(meta).map((value, key) => {
						const name: string = Object.keys(meta)[key]
						const type: string = value["type"] || "Unknown"
						const description: string = value["description"] || "--"

						return (
							<tr key={key}>
								<td>
									<Text type="small" fontFamily="mono">
										{name}
									</Text>
								</td>
								<td>
									<Flex>
										<Pill label={type} color="orange" size="small" isMono={true} />
									</Flex>
								</td>
								<td>
									<Text type="small" emphasis="secondary">
										{description}
									</Text>
								</td>
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
