import { Text, Flex, Tile, Separator, Pill } from "@heliosgraphics/ui"
import Page from "workshop/app/components/Page"

export default function Home() {
	return (
		<Page title="Products">
			<Flex isColumn={true}>
				<Text type="paragraph">
					<a href="https://helios.graphics">Helios</a> is using Helios UI to build products people love.
				</Text>
			</Flex>
			<Separator isLight={true} />
			<Flex isColumn={true} gap={8}>
				<Flex gap={8} isYCentered={true}>
					<Tile size={48} icon="x-sora" color="blue" isRounded={true} />
					<Flex isColumn={true}>
						<Flex isYCentered={true} gap={2}>
							<a href="https://sora.city">
								<Text type="div" fontWeight="semibold">
									Sora
								</Text>
							</a>
							{/* <Pill color="gray" label="Coming Soon" size="tiny" isRounded={true} /> */}
						</Flex>
						<Text type="tiny" emphasis="secondary">
							Publish things on the Internet
						</Text>
					</Flex>
				</Flex>
				<Flex gap={8} isYCentered={true}>
					<Tile size={48} icon="bolt" color="blue" isRounded={true} />
					<Flex isColumn={true}>
						<Flex isYCentered={true} gap={2}>
							<Text type="div" fontWeight="semibold">
								___
							</Text>
							<Pill color="gray" label="WIP" size="tiny" isRounded={true} />
						</Flex>
						<Text type="tiny" emphasis="secondary">
							Coming Soon
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Page>
	)
}
