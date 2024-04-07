import { meta as metaAlert } from "../components/Alert/Alert.types"
import { meta as metaBreadcrumb } from "../components/Breadcrumb/Breadcrumb.types"
import { meta as metaButton } from "../components/Button/Button.types"
import { meta as metaButtonGroup } from "../components/ButtonGroup/ButtonGroup.types"
import { meta as metaCheckbox } from "../components/Checkbox/Checkbox.types"
import { meta as metaColumn } from "../components/Column/Column.types"
import { meta as metaConfirm } from "../components/Confirm/Confirm.types"
import { meta as metaContent } from "../components/Content/Content.types"
import { meta as metaDetails } from "../components/Details/Details.types"
import { meta as metaDialog } from "../components/Dialog/Dialog.types"
import { meta as metaDonut } from "../components/Donut/Donut.types"
import { meta as metaDot } from "../components/Dot/Dot.types"
import { meta as metaDropdown } from "../components/Dropdown/Dropdown.types"
import { meta as metaFlex } from "../components/Flex/Flex.types"
import { meta as metaGrid } from "../components/Grid/Grid.types"
import { meta as metaHeading } from "../components/Heading/Heading.types"
import { meta as metaIcon } from "../components/Icon/Icon.types"
import { meta as metaInput } from "../components/Input/Input.types"
import { meta as metaLoading } from "../components/Loading/Loading.types"
import { meta as metaMain } from "../components/Main/Main.types"
import { meta as metaMarkdown } from "../components/Markdown/Markdown.types"
import { meta as metaMasonry } from "../components/Masonry/Masonry.types"
import { meta as metaMenu } from "../components/Menu/Menu.types"
import { meta as metaMenuCategory } from "../components/MenuCategory/MenuCategory.types"
import { meta as metaMenuFilter } from "../components/MenuFilter/MenuFilter.types"
import { meta as metaMenuItem } from "../components/MenuItem/MenuItem.types"
import { meta as metaNavigation } from "../components/Navigation/Navigation.types"
import { meta as metaNavigationPanelButton } from "../components/NavigationPanelButton/NavigationPanelButton.types"
import { meta as metaOverlay } from "../components/Overlay/Overlay.types"
import { meta as metaPie } from "../components/Pie/Pie.types"
import { meta as metaPill } from "../components/Pill/Pill.types"
import { meta as metaProgress } from "../components/Progress/Progress.types"
import { meta as metaRadio } from "../components/Radio/Radio.types"
import { meta as metaSelect } from "../components/Select/Select.types"
import { meta as metaSeparator } from "../components/Separator/Separator.types"
import { meta as metaSetup } from "../components/Setup/Setup.types"
import { meta as metaShimmer } from "../components/Shimmer/Shimmer.types"
import { meta as metaSlider } from "../components/Slider/Slider.types"
import { meta as metaSpacer } from "../components/Spacer/Spacer.types"
import { meta as metaTable } from "../components/Table/Table.types"
import { meta as metaTabs } from "../components/Tabs/Tabs.types"
import { meta as metaText } from "../components/Text/Text.types"
import { meta as metaTextarea } from "../components/Textarea/Textarea.types"
import { meta as metaThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher.types"
import { meta as metaThemeSwitcherLoading } from "../components/ThemeSwitcherLoading/ThemeSwitcherLoading.types"
import { meta as metaTile } from "../components/Tile/Tile.types"
import { meta as metaTimestamp } from "../components/Timestamp/Timestamp.types"
import { meta as metaToggle } from "../components/Toggle/Toggle.types"
import type { HeliosAttributeMeta } from ".."

export const COMPONENTS: Record<string, HeliosAttributeMeta<unknown>> = {
	Alert: metaAlert,
	Breadcrumb: metaBreadcrumb,
	Button: metaButton,
	ButtonGroup: metaButtonGroup,
	Checkbox: metaCheckbox,
	Column: metaColumn,
	Confirm: metaConfirm,
	Content: metaContent,
	Details: metaDetails,
	Dialog: metaDialog,
	Donut: metaDonut,
	Dot: metaDot,
	Dropdown: metaDropdown,
	Flex: metaFlex,
	Grid: metaGrid,
	Heading: metaHeading,
	Icon: metaIcon,
	Input: metaInput,
	Loading: metaLoading,
	Main: metaMain,
	Markdown: metaMarkdown,
	Masonry: metaMasonry,
	Menu: metaMenu,
	MenuCategory: metaMenuCategory,
	MenuFilter: metaMenuFilter,
	MenuItem: metaMenuItem,
	Navigation: metaNavigation,
	NavigationPanelButton: metaNavigationPanelButton,
	Overlay: metaOverlay,
	Pie: metaPie,
	Pill: metaPill,
	Progress: metaProgress,
	Radio: metaRadio,
	Select: metaSelect,
	Separator: metaSeparator,
	Setup: metaSetup,
	Shimmer: metaShimmer,
	Slider: metaSlider,
	Spacer: metaSpacer,
	Table: metaTable,
	Tabs: metaTabs,
	Text: metaText,
	Textarea: metaTextarea,
	ThemeSwitcher: metaThemeSwitcher,
	ThemeSwitcherLoading: metaThemeSwitcherLoading,
	Tile: metaTile,
	Timestamp: metaTimestamp,
	Toggle: metaToggle,
}
