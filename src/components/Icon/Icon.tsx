import React from "react"
import classNames from "@sindresorhus/class-names"
import Icon_ArrowDown from "@heliosgraphics/icons/out/arrow-down.svg"
import Icon_ArrowLeft from "@heliosgraphics/icons/out/arrow-left.svg"
import Icon_ArrowRight from "@heliosgraphics/icons/out/arrow-right.svg"
import Icon_ArrowUp from "@heliosgraphics/icons/out/arrow-up.svg"
import Icon_Asterisk from "@heliosgraphics/icons/out/asterisk.svg"
import Icon_Bars from "@heliosgraphics/icons/out/bars.svg"
import Icon_Bell from "@heliosgraphics/icons/out/bell.svg"
import Icon_Bolt from "@heliosgraphics/icons/out/bolt.svg"
import Icon_Book from "@heliosgraphics/icons/out/book.svg"
import Icon_Bookmark from "@heliosgraphics/icons/out/bookmark.svg"
import Icon_Bullseye from "@heliosgraphics/icons/out/bullseye.svg"
import Icon_Calendar from "@heliosgraphics/icons/out/calendar.svg"
import Icon_Camera from "@heliosgraphics/icons/out/camera.svg"
import Icon_CaretDown from "@heliosgraphics/icons/out/caret-down.svg"
import Icon_CaretLeft from "@heliosgraphics/icons/out/caret-left.svg"
import Icon_CaretRight from "@heliosgraphics/icons/out/caret-right.svg"
import Icon_CaretUp from "@heliosgraphics/icons/out/caret-up.svg"
import Icon_Chart from "@heliosgraphics/icons/out/chart.svg"
import Icon_Chat from "@heliosgraphics/icons/out/chat.svg"
import Icon_Check from "@heliosgraphics/icons/out/check.svg"
import Icon_Checkbox from "@heliosgraphics/icons/out/checkbox.svg"
import Icon_CheckboxChecked from "@heliosgraphics/icons/out/checkbox-checked.svg"
import Icon_ChevronDown from "@heliosgraphics/icons/out/chevron-down.svg"
import Icon_ChevronLeft from "@heliosgraphics/icons/out/chevron-left.svg"
import Icon_ChevronRight from "@heliosgraphics/icons/out/chevron-right.svg"
import Icon_ChevronUp from "@heliosgraphics/icons/out/chevron-up.svg"
import Icon_Circle from "@heliosgraphics/icons/out/circle.svg"
import Icon_CircleFull from "@heliosgraphics/icons/out/circle-full.svg"
import Icon_CircleHalf from "@heliosgraphics/icons/out/circle-half.svg"
import Icon_Clock from "@heliosgraphics/icons/out/clock.svg"
import Icon_Cloud from "@heliosgraphics/icons/out/cloud.svg"
import Icon_Comment from "@heliosgraphics/icons/out/comment.svg"
import Icon_Crown from "@heliosgraphics/icons/out/crown.svg"
import Icon_Curly from "@heliosgraphics/icons/out/curly.svg"
import Icon_Cursor from "@heliosgraphics/icons/out/cursor.svg"
import Icon_Dash from "@heliosgraphics/icons/out/dash.svg"
import Icon_Database from "@heliosgraphics/icons/out/database.svg"
import Icon_Dot from "@heliosgraphics/icons/out/dot.svg"
import Icon_Ellipsis from "@heliosgraphics/icons/out/ellipsis.svg"
import Icon_Eye from "@heliosgraphics/icons/out/eye.svg"
import Icon_EyeDisabled from "@heliosgraphics/icons/out/eye-disabled.svg"
import Icon_File from "@heliosgraphics/icons/out/file.svg"
import Icon_Flame from "@heliosgraphics/icons/out/flame.svg"
import Icon_Flash from "@heliosgraphics/icons/out/flash.svg"
import Icon_Folder from "@heliosgraphics/icons/out/folder.svg"
import Icon_Gear from "@heliosgraphics/icons/out/gear.svg"
import Icon_Globe from "@heliosgraphics/icons/out/globe.svg"
import Icon_Grab from "@heliosgraphics/icons/out/grab.svg"
import Icon_Heart from "@heliosgraphics/icons/out/heart.svg"
import Icon_Home from "@heliosgraphics/icons/out/home.svg"
import Icon_Info from "@heliosgraphics/icons/out/info.svg"
import Icon_LayoutBottom from "@heliosgraphics/icons/out/layout-bottom.svg"
import Icon_LayoutLeft from "@heliosgraphics/icons/out/layout-left.svg"
import Icon_LayoutRight from "@heliosgraphics/icons/out/layout-right.svg"
import Icon_Link from "@heliosgraphics/icons/out/link.svg"
import Icon_Location from "@heliosgraphics/icons/out/location.svg"
import Icon_Lock from "@heliosgraphics/icons/out/lock.svg"
import Icon_Mail from "@heliosgraphics/icons/out/mail.svg"
import Icon_Middot from "@heliosgraphics/icons/out/middot.svg"
import Icon_Minus from "@heliosgraphics/icons/out/minus.svg"
import Icon_Money from "@heliosgraphics/icons/out/money.svg"
import Icon_Paper from "@heliosgraphics/icons/out/paper.svg"
import Icon_PaperEmpty from "@heliosgraphics/icons/out/paper-empty.svg"
import Icon_Paste from "@heliosgraphics/icons/out/paste.svg"
import Icon_Pause from "@heliosgraphics/icons/out/pause.svg"
import Icon_Pencil from "@heliosgraphics/icons/out/pencil.svg"
import Icon_Person from "@heliosgraphics/icons/out/person.svg"
import Icon_Picture from "@heliosgraphics/icons/out/picture.svg"
import Icon_Pin from "@heliosgraphics/icons/out/pin.svg"
import Icon_Play from "@heliosgraphics/icons/out/play.svg"
import Icon_Plus from "@heliosgraphics/icons/out/plus.svg"
import Icon_ProfilePicture from "@heliosgraphics/icons/out/profile-picture.svg"
import Icon_Rect from "@heliosgraphics/icons/out/rect.svg"
import Icon_Refresh from "@heliosgraphics/icons/out/refresh.svg"
import Icon_Robot from "@heliosgraphics/icons/out/robot.svg"
import Icon_RSS from "@heliosgraphics/icons/out/rss.svg"
import Icon_Search from "@heliosgraphics/icons/out/search.svg"
import Icon_Send from "@heliosgraphics/icons/out/send.svg"
import Icon_Sora from "@heliosgraphics/icons/out/sora.svg"
import Icon_SoraFlash from "@heliosgraphics/icons/out/sora-flash.svg"
import Icon_Speaker from "@heliosgraphics/icons/out/speaker.svg"
import Icon_Square from "@heliosgraphics/icons/out/square.svg"
import Icon_Star from "@heliosgraphics/icons/out/star.svg"
import Icon_Tag from "@heliosgraphics/icons/out/tag.svg"
import Icon_Thebe from "@heliosgraphics/icons/out/thebe.svg"
import Icon_Trash from "@heliosgraphics/icons/out/trash.svg"
import Icon_Triangle from "@heliosgraphics/icons/out/triangle.svg"
import Icon_Unlock from "@heliosgraphics/icons/out/unlock.svg"
import Icon_Writing from "@heliosgraphics/icons/out/writing.svg"
import Icon_X from "@heliosgraphics/icons/out/x.svg"
import Icon_XApple from "@heliosgraphics/icons/out/x-apple.svg"
import Icon_XDiscord from "@heliosgraphics/icons/out/x-discord.svg"
import Icon_XGithub from "@heliosgraphics/icons/out/x-github.svg"
import Icon_XInstagram from "@heliosgraphics/icons/out/x-instagram.svg"
import Icon_XLinkedin from "@heliosgraphics/icons/out/x-linkedin.svg"
import Icon_XMastodon from "@heliosgraphics/icons/out/x-mastodon.svg"
import Icon_XPinterest from "@heliosgraphics/icons/out/x-pinterest.svg"
import Icon_XSnapchat from "@heliosgraphics/icons/out/x-snapchat.svg"
import Icon_XTelegram from "@heliosgraphics/icons/out/x-telegram.svg"
import Icon_XTiktok from "@heliosgraphics/icons/out/x-tiktok.svg"
import Icon_XTwitch from "@heliosgraphics/icons/out/x-twitch.svg"
import Icon_XTwitter from "@heliosgraphics/icons/out/x-twitter.svg"
import Icon_XX from "@heliosgraphics/icons/out/x-x.svg"
import Icon_XYoutube from "@heliosgraphics/icons/out/x-youtube.svg"
import styles from "./Icon.module.css"
import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { IconProps } from "./Icon.types"

const ICONS: Record<HeliosIconType, React.ReactElement> = {
	"arrow-down": <Icon_ArrowDown />,
	"arrow-left": <Icon_ArrowLeft />,
	"arrow-right": <Icon_ArrowRight />,
	"arrow-up": <Icon_ArrowUp />,
	"caret-down": <Icon_CaretDown />,
	"caret-left": <Icon_CaretLeft />,
	"caret-right": <Icon_CaretRight />,
	"caret-up": <Icon_CaretUp />,
	"checkbox-checked": <Icon_CheckboxChecked />,
	"chevron-down": <Icon_ChevronDown />,
	"chevron-left": <Icon_ChevronLeft />,
	"chevron-right": <Icon_ChevronRight />,
	"chevron-up": <Icon_ChevronUp />,
	"circle-full": <Icon_CircleFull />,
	"circle-half": <Icon_CircleHalf />,
	"eye-disabled": <Icon_EyeDisabled />,
	"layout-bottom": <Icon_LayoutBottom />,
	"layout-left": <Icon_LayoutLeft />,
	"layout-right": <Icon_LayoutRight />,
	"paper-empty": <Icon_PaperEmpty />,
	"profile-picture": <Icon_ProfilePicture />,
	"sora-flash": <Icon_SoraFlash />,
	"x-apple": <Icon_XApple />,
	"x-discord": <Icon_XDiscord />,
	"x-github": <Icon_XGithub />,
	"x-instagram": <Icon_XInstagram />,
	"x-linkedin": <Icon_XLinkedin />,
	"x-mastodon": <Icon_XMastodon />,
	"x-pinterest": <Icon_XPinterest />,
	"x-snapchat": <Icon_XSnapchat />,
	"x-telegram": <Icon_XTelegram />,
	"x-tiktok": <Icon_XTiktok />,
	"x-twitch": <Icon_XTwitch />,
	"x-twitter": <Icon_XTwitter />,
	"x-x": <Icon_XX />,
	"x-youtube": <Icon_XYoutube />,
	asterisk: <Icon_Asterisk />,
	bars: <Icon_Bars />,
	bell: <Icon_Bell />,
	bolt: <Icon_Bolt />,
	book: <Icon_Book />,
	bookmark: <Icon_Bookmark />,
	bullseye: <Icon_Bullseye />,
	calendar: <Icon_Calendar />,
	camera: <Icon_Camera />,
	chart: <Icon_Chart />,
	chat: <Icon_Chat />,
	check: <Icon_Check />,
	checkbox: <Icon_Checkbox />,
	circle: <Icon_Circle />,
	clock: <Icon_Clock />,
	cloud: <Icon_Cloud />,
	comment: <Icon_Comment />,
	crown: <Icon_Crown />,
	curly: <Icon_Curly />,
	cursor: <Icon_Cursor />,
	dash: <Icon_Dash />,
	database: <Icon_Database />,
	dot: <Icon_Dot />,
	ellipsis: <Icon_Ellipsis />,
	eye: <Icon_Eye />,
	file: <Icon_File />,
	flame: <Icon_Flame />,
	flash: <Icon_Flash />,
	folder: <Icon_Folder />,
	gear: <Icon_Gear />,
	globe: <Icon_Globe />,
	grab: <Icon_Grab />,
	heart: <Icon_Heart />,
	home: <Icon_Home />,
	info: <Icon_Info />,
	link: <Icon_Link />,
	location: <Icon_Location />,
	lock: <Icon_Lock />,
	mail: <Icon_Mail />,
	middot: <Icon_Middot />,
	minus: <Icon_Minus />,
	money: <Icon_Money />,
	paper: <Icon_Paper />,
	paste: <Icon_Paste />,
	pause: <Icon_Pause />,
	pencil: <Icon_Pencil />,
	person: <Icon_Person />,
	picture: <Icon_Picture />,
	pin: <Icon_Pin />,
	play: <Icon_Play />,
	plus: <Icon_Plus />,
	rect: <Icon_Rect />,
	refresh: <Icon_Refresh />,
	robot: <Icon_Robot />,
	rss: <Icon_RSS />,
	search: <Icon_Search />,
	send: <Icon_Send />,
	sora: <Icon_Sora />,
	speaker: <Icon_Speaker />,
	square: <Icon_Square />,
	star: <Icon_Star />,
	tag: <Icon_Tag />,
	thebe: <Icon_Thebe />,
	trash: <Icon_Trash />,
	triangle: <Icon_Triangle />,
	unlock: <Icon_Unlock />,
	writing: <Icon_Writing />,
	x: <Icon_X />,
}

const Icon: React.FC<IconProps> = ({ name, className, emphasis, size }) => {
	const IconShape = (): React.ReactElement => ICONS[name] || null
	const iconSizeStyle = {
		height: size + "px",
		minHeight: size + "px",
		minWidth: size + "px",
		width: size + "px",
	}

	const iconClasses: string = classNames(
		styles.icon,
		className,
		"flex flex-center",
		{
			[styles.iconInherit]: !emphasis,
			[styles.iconPrimary]: emphasis === "primary",
			[styles.iconSecondary]: emphasis === "secondary",
			[styles.iconTertiary]: emphasis === "tertiary",
		},
	)

	return (
		<div className={iconClasses} style={iconSizeStyle} data-component="Icon">
			<IconShape />
		</div>
	)
}

export default Icon
