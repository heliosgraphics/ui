import type { FC } from "react"
import type { ExampleShimmerProps } from "./ExampleShimmer.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const CODE_SAMPLE = `<Flex isColumn={true} gap={8}>
<Shimmer height={16} width={256} />
<Shimmer height={16} width={128} />
</Flex>`

const ExampleShimmer: FC<ExampleShimmerProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleShimmer
