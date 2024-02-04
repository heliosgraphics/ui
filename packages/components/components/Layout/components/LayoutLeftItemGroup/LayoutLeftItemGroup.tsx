import Flex from "../../../Flex"
import Text from "../../../Text"
import type { FC } from "react"
import type { LayoutLeftItemGroupProps } from "./LayoutLeftItemGroup.types"

const LayoutLeftItemGroup: FC<LayoutLeftItemGroupProps> = ({
	children,
	title,
}) => {
	return (
		<Flex isColumn={true} gap={4}>
			{!!title && (
				<Text
					type="tiny"
					textDecoration="uppercase"
					fontWeight="medium"
					fontFamily="mono"
					color="gray"
				>
					{title}
				</Text>
			)}
			<Flex isColumn={true}>{children}</Flex>
		</Flex>
	)
}

export default LayoutLeftItemGroup
