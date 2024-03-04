"use client"

import { useState } from "react"
import { Flex, Button, ButtonGroup, Text, Dialog } from "@heliosgraphics/ui"
import type { ExampleDialogProps } from "./ExampleDialog.types"
import type { FC } from "react"

const ExampleDialog: FC<ExampleDialogProps> = () => {
	const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
	const [isLong, setLong] = useState<boolean>(false)
	const [isCentered, setCentered] = useState<boolean>(false)
	const [hasActions, setActions] = useState<boolean>(false)

	const onDialogToggle = () => setDialogOpen(!isDialogOpen)
	const onLongToggle = () => setLong(!isLong)
	const onCenterToggle = () => setCentered(!isCentered)
	const onActionsToggle = () => setActions(!hasActions)

	return null

	return (
		<Flex>
			<ButtonGroup>
				<Button value="Open Dialog" intent="silent" onClick={onDialogToggle} />
			</ButtonGroup>
			<Dialog onClose={onDialogToggle} title="Dialog" isOpen={isDialogOpen} isCentered={isCentered}>
				<Flex isColumn={true} gap={8}>
					<ButtonGroup align="join">
						<Button intent="silent" size="small" value="More" icon="arrow-down" onClick={onLongToggle} />
						<Button intent="silent" size="small" value="Center" icon="bullseye" onClick={onCenterToggle} />
						<Button intent="silent" size="small" value="Actions" icon="arrow-up" onClick={onActionsToggle} />
					</ButtonGroup>
					<Text type="paragraph">
						In the labyrinthine alleys of an ancient city, under the luminescent glow of a crescent moon, a curious
						wordsmith named Theophilius ventured to concoct a lexicon so vast, it could ensnare the essence of the
						cosmos within its alphabetic tapestry. With each stroke of his quill, Theophilius wove together syllables of
						such exquisite complexity, they seemed to dance upon the parchment like shadows flirting with the light.
					</Text>
					{isLong && (
						<>
							<Text type="paragraph">
								His ambition was not merely to create, but to capture the quintessence of every whispering wind, the
								subtle sigh of the sea, and the silent soliloquy of the stars. This monumental manuscript, brimming with
								alliterations, assonances, and arcane analogies, was to be his magnum opus, a typographic tapestry that
								transcended time. Amidst this endeavor, Theophilius discovered peculiar letter-pairs, whose unions
								produced sounds so unique, they could only be described as the auditory equivalent of discovering a new
								color.
							</Text>
							<Text type="paragraph">
								As twilight draped its velvet mantle over the enchanted forest, a whimsical scribe named Penelope
								pondered the perplexities of parallel universes, each brimming with peculiar phonemes and fantastical
								flora. Her ambition was to capture the symphony of these realms in a grand compendium, a tome so rich in
								linguistic diversity, it could make the very fabric of reality quiver with delight. Penelope’s quill
								danced feverishly across the parchment, scripting sentences that spiraled like vines, entwining the
								reader in a lush thicket of thought. Her prose was peppered with palindromes and paradoxes, designed to
								dazzle and disorient, leading one down rabbit holes of reflection. In her quest, she uncovered consonant
								clusters so rare, their utterance conjured images of mythical creatures cavorting in moonlit meadows.
								This manuscript, a mosaic of metaphors and metonymies, sought not just to tell stories, but to weave
								worlds, where the boundary between word and wonder was as thin as a dragonfly&apos;s wing. Amid the
								rustle of leaves and the whisper of the wind, Penelope’s narrative unfurled, a tapestry of text that
								promised to transport its reader beyond the bounds of their imagination, into realms where the
								impossible and the inevitable danced in eternal embrace.
							</Text>
							<Text type="small" emphasis="secondary">
								Thus, in the quietude of his study, surrounded by mountains of musty tomes and flickering candlelight,
								he embarked upon a linguistic odyssey, charting unknown territories of expression and meaning, where
								words acted as both the map and the terrain, guiding and beguiling the reader through a phantasmagorical
								journey of discovery.
							</Text>
						</>
					)}
					{hasActions && (
						<ButtonGroup>
							<Button intent="advise" value="Advise" onClick={onDialogToggle} />
							<Button intent="silent" value="Cancel" onClick={onDialogToggle} />
						</ButtonGroup>
					)}
				</Flex>
			</Dialog>
		</Flex>
	)
}

export default ExampleDialog
