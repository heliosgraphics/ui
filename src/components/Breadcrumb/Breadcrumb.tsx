import React, { Fragment } from "react"
import Link from "next/link"
import Flex from "../Flex"
import Text from "../Text"
import Icon from "../Icon"
import type { BreadcrumbProps } from "./Breadcrumb.types"

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	if (!items?.length) return null

	return (
		<Flex isYCentered={true} gap={3} isWrapping={true}>
			{items?.map((item, key) => {
				const isLast: boolean = Boolean(key + 1 === items?.length)

				return (
					<Fragment key={key}>
						<Link href={item.href}>
							<Text type="div" fontStyle={item?.isActive ? "italic" : "normal"}>
								{item.name}
							</Text>
						</Link>
						{!isLast && (
							<Icon name="arrow-right" size={12} emphasis="tertiary" />
						)}
					</Fragment>
				)
			})}
		</Flex>
	)
}

export default Breadcrumb
