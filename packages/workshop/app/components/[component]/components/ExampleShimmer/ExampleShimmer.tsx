import type { FC } from "react"
import type { ExampleShimmerProps } from "./ExampleShimmer.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const CODE_SAMPLE = `<Shimmer height={20} width={120} />`

const ExampleShimmer: FC<ExampleShimmerProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleShimmer
