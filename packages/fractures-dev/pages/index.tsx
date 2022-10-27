import {
	HiOutlineFire,
	HiOutlinePuzzle,
	HiOutlineFingerPrint,
	HiOutlineCube,
	HiOutlineGlobeAlt,
	HiOutlineEyeOff,
} from "react-icons/hi";
import Button from "../components/Button";
import Fractures from "../components/Fractures";
import fracturesPackage from "@fractures/css/package.json";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import Link from "next/link";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import SectionBlock from "../components/SectionBlock";
import SectionCode from "../components/SectionCode";
import Small from "../components/Small";

const Index: React.FC<{}> = () => (
	<Layout>
		<PageContainer>
			<header className="lg:flex-column lg:py-8 flex flex-gap-24 py-24">
				<Fractures color="white" size={96} />
				<div className="flex flex-column flex-gap-8">
					<H0>
						<mark>Functional CSS</mark>, but only the good parts.
					</H0>
					<h2 className="h4 normal">
						Fractures is the <b>atomic CSS toolkit</b> that helps you create
						resilient <u className="underline">design systems</u> and{" "}
						<u className="underline">rapid prototypes</u> by providing a set of
						non-blocking utility classes.
					</h2>
					<div className="flex flex-gap-8">
						<Link href="/setup">
							<a>
								<Button type="primary">Get started</Button>
							</a>
						</Link>
						<a href="https://github.com/fractures/fractures">
							<Button type="secondary">GitHub</Button>
						</a>
					</div>
					<div className="md:flex-column md:flex-gap-4 flex flex-gap-8">
						<div className="flex flex-gap-4 flex-y-center">
							<Small className="mono">
								yarn add @fractures/css
								<span className="unselectable">
									{" "}
									@ {fracturesPackage?.version}
								</span>
							</Small>
						</div>
						<Small className="mono">
							<a href="https://github.com/fractures/fractures/releases/tag/1.3.5">
								Looking for v1?
							</a>
						</Small>
					</div>
				</div>
			</header>
			<SectionBlock title="Goals">
				<div className="lg:grid-cols-1 grid grid-cols-3 grid-gap-3">
					<div className="flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-32 w-32 purple-700 radius-2 p-6">
							<HiOutlineCube size={32} />
						</div>
						<div>Atomic</div>
					</div>
					<div className="flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-32 w-32 purple-700 radius-2 p-6">
							<HiOutlineGlobeAlt size={32} />
						</div>
						<div>Framework agnostic</div>
					</div>
					<div className="flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-32 w-32 purple-700 radius-2 p-6">
							<HiOutlineEyeOff size={32} />
						</div>
						<div>No UI</div>
					</div>
					<div className="flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-32 w-32 purple-700 radius-2 p-6">
							<HiOutlineFire size={32} />
						</div>
						<div>Fast in every way</div>
					</div>
					<div className="flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-32 w-32 purple-700 radius-2 p-6">
							<HiOutlineFingerPrint size={32} />
						</div>
						<div>Small cognitive load</div>
					</div>
					<div className="flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-32 w-32 purple-700 radius-2 p-6">
							<HiOutlinePuzzle size={32} />
						</div>
						<div>Tiny footprint</div>
					</div>
				</div>
			</SectionBlock>
			<SectionBlock title="Features">
				<SectionCode
					title="Encourages composition"
					code={[
						`&lt;article className="<mark>article-block__item flex p-4</mark>"&gt;`,
						`  &lt;span/&gt;`,
						`&lt;/article&gt;`,
					]}
				>
					<P>
						No more class flooding. Do better than repeating flex flex-wrap
						items-baseline pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-black
						text-white.
					</P>
				</SectionCode>
				<SectionCode
					title="Easy but powerful"
					code={[
						`&lt;header className="<mark>flex flex-column</mark>"&gt`,
						`  &lt;a className="<mark>bg-blue-700 blue-600</mark>"/&gt`,
						`&lt;/header&gt;`,
					]}
				>
					<P>
						<b>HSL based</b> color system built in. Customize all color or let
						the linear scale grade your shades for you, zero javascript.
					</P>
				</SectionCode>
				<SectionCode
					title="Extendible"
					code={[
						`&lt;div className="<mark>flex bg-gray-900</mark>"&gt`,
						`  &ltspan className="`,
						`    <mark>teal-700 (forever)</mark>`,
						`    <mark>dark:color-darkest (temporary, by you)</mark>`,
						`  "/&gt`,
						`&lt/div&gt`,
					]}
				>
					<P>
						Fractures was created at the <b>CSS level</b>, and it&apos;s{" "}
						<b>
							<u>incomplete by design</u>
						</b>
						. Configure CSS variables at :root and follow the outlined patterns
						with your own code.
					</P>
				</SectionCode>
			</SectionBlock>
			<SectionBlock title="Manifesto">
				<P>
					Fractures is a relaxed, long term take on design systems and
					prototyping, trying to abstract away some complexities interface
					design has to offer. You can build around it or on top of it, but
					would not replace the work you have to do.
					<br />
					<br />
					Ask a{" "}
					<a href="https://github.com/fractures/fractures/discussions">
						question
					</a>{" "}
					on GitHub, say hi on <a href="https://twitter.com/pyx">twitter</a>.
				</P>
			</SectionBlock>
		</PageContainer>
	</Layout>
);

export default Index;
