import {
	Button,
	Content,
	Donut,
	ButtonGroup,
	Masonry,
	Icon,
	Flex,
	Text,
	Separator,
	Heading,
	Pill,
	COMPONENTS,
} from "@heliosgraphics/ui"
import DebugSelector from "./components/DebugSelector"
import Cover from "./components/Cover"
import uiPackage from "@heliosgraphics/ui/package.json"

export default function Home({}) {
	const stableComponentCount: number = Object.values(COMPONENTS).filter((c) => c._status === "stable").length
	const experimentalComponentCount: number = Object.values(COMPONENTS).filter(
		(c) => c._status === "experimental",
	).length

	return (
		<Content width={1200} padding={8}>
			<Masonry brakepoints={[760, 1280, 1280]} gap={[8, 8, 8]} columns={[1, 2, 3]}>
				<Flex isColumn={true} withBackground={true} withRadius="normal" padding={8}>
					<Heading level={0}>Helios UI</Heading>
				</Flex>
				<Flex isColumn={true} withBackground={true} withRadius="normal" padding={8}>
					<Text type="small" fontFamily="mono" emphasis="secondary">
						@heliosgraphics/ui<span className="non-selectable">@{uiPackage.version}</span>
						<br />
						<span className="non-selectable">Pre-Release</span>
					</Text>
				</Flex>
				<Cover />
				<Flex gap={8} withBackground={true} withRadius="normal" padding={8}>
					<Flex gap={4} isColumn={true}>
						<Flex isColumn={true}>
							<Text type="div" fontWeight="semibold">
								{Object.keys(COMPONENTS).length}
							</Text>
							<Text type="tiny" emphasis="secondary">
								Components
							</Text>
						</Flex>
						<Donut color="orange" percentage={100} size={32}>
							<Icon icon="asterisk" size={16} emphasis="tertiary" />
						</Donut>
					</Flex>
					<Separator isVertical={true} height={64} isLight={true} />
					<Flex gap={4} isColumn={true}>
						<Flex isColumn={true}>
							<Text type="div" fontWeight="semibold">
								{stableComponentCount}
							</Text>
							<Text type="tiny" emphasis="secondary">
								Stable
							</Text>
						</Flex>
						<Donut color="green" percentage={21} size={32}>
							<Icon icon="asterisk" size={16} emphasis="tertiary" />
						</Donut>
					</Flex>
					<Separator isVertical={true} height={64} isLight={true} />
					<Flex gap={4} isColumn={true}>
						<Flex isColumn={true}>
							<Text type="div" fontWeight="semibold">
								{experimentalComponentCount}
							</Text>
							<Text type="tiny" emphasis="secondary">
								Experimental
							</Text>
						</Flex>
						<Donut color="pink" percentage={21} size={32}>
							<Icon icon="bolt" size={16} emphasis="tertiary" />
						</Donut>
					</Flex>
				</Flex>
				<Flex isColumn={true} gap={4} withBackground={true} withRadius="normal" padding={8}>
					<Text type="paragraph">
						Baseline design system documenting our visual and experience standards. Always evolving, intentional and
						opinionated.
					</Text>
				</Flex>
				<Flex isColumn={true} gap={4} withBackground={true} withRadius="normal" padding={8}>
					<Text type="small" emphasis="secondary">
						Typescript components in React as a Module.
					</Text>
				</Flex>
				<Flex isColumn={true} gap={4} withBackground={true} withRadius="normal" padding={8}>
					<ButtonGroup>
						<a href="/get-started" tabIndex={-1}>
							<Button intent="advise" value="Start Building" icon="eye" />
						</a>
						<a href="https://github.com/heliosgraphics/ui" tabIndex={-1}>
							<Button intent="silent" value="Contribute" icon="x-github" />
						</a>
					</ButtonGroup>
				</Flex>
				<Flex isColumn={true} withBackground={true} withRadius="normal" padding={8}>
					<DebugSelector />
				</Flex>
			</Masonry>
		</Content>
	)
}
