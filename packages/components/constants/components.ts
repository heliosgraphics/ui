import { meta as metaAlert } from "../components/Alert/Alert.meta"
import { meta as metaBreadcrumb } from "../components/Breadcrumb/Breadcrumb.meta"
import { meta as metaButton } from "../components/Button/Button.meta"
import { meta as metaButtonGroup } from "../components/ButtonGroup/ButtonGroup.meta"
import { meta as metaCheckbox } from "../components/Checkbox/Checkbox.meta"
import { meta as metaColumn } from "../components/Column/Column.meta"
import { meta as metaConfirm } from "../components/Confirm/Confirm.meta"
import { meta as metaContent } from "../components/Content/Content.meta"
import { meta as metaDatePicker } from "../components/DatePicker/DatePicker.meta"
import { meta as metaDetails } from "../components/Details/Details.meta"
import { meta as metaDialog } from "../components/Dialog/Dialog.meta"
import { meta as metaDonut } from "../components/Donut/Donut.meta"
import { meta as metaDot } from "../components/Dot/Dot.meta"
import { meta as metaDropdown } from "../components/Dropdown/Dropdown.meta"
import { meta as metaFieldset } from "../components/Fieldset/Fieldset.meta"
import { meta as metaFlex } from "../components/Flex/Flex.meta"
import { meta as metaGrid } from "../components/Grid/Grid.meta"
import { meta as metaHeading } from "../components/Heading/Heading.meta"
import { meta as metaIcon } from "../components/Icon/Icon.meta"
import { meta as metaInput } from "../components/Input/Input.meta"
import { meta as metaLoading } from "../components/Loading/Loading.meta"
import { meta as metaMain } from "../components/Main/Main.meta"
import { meta as metaMarkdown } from "../components/Markdown/Markdown.meta"
import { meta as metaMasonry } from "../components/Masonry/Masonry.meta"
import { meta as metaMenu } from "../components/Menu/Menu.meta"
import { meta as metaMenuCategory } from "../components/MenuCategory/MenuCategory.meta"
import { meta as metaMenuFilter } from "../components/MenuFilter/MenuFilter.meta"
import { meta as metaMenuItem } from "../components/MenuItem/MenuItem.meta"
import { meta as metaNavigation } from "../components/Navigation/Navigation.meta"
import { meta as metaNavigationPanelButton } from "../components/NavigationPanelButton/NavigationPanelButton.meta"
import { meta as metaOverlay } from "../components/Overlay/Overlay.meta"
import { meta as metaPie } from "../components/Pie/Pie.meta"
import { meta as metaPill } from "../components/Pill/Pill.meta"
import { meta as metaProgress } from "../components/Progress/Progress.meta"
import { meta as metaRadio } from "../components/Radio/Radio.meta"
import { meta as metaSelect } from "../components/Select/Select.meta"
import { meta as metaSeparator } from "../components/Separator/Separator.meta"
import { meta as metaSetup } from "../components/Setup/Setup.meta"
import { meta as metaShimmer } from "../components/Shimmer/Shimmer.meta"
import { meta as metaSlider } from "../components/Slider/Slider.meta"
import { meta as metaSpacer } from "../components/Spacer/Spacer.meta"
import { meta as metaTable } from "../components/Table/Table.meta"
import { meta as metaTabs } from "../components/Tabs/Tabs.meta"
import { meta as metaText } from "../components/Text/Text.meta"
import { meta as metaTextarea } from "../components/Textarea/Textarea.meta"
import { meta as metaThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher.meta"
import { meta as metaThemeSwitcherLoading } from "../components/ThemeSwitcherLoading/ThemeSwitcherLoading.meta"
import { meta as metaTile } from "../components/Tile/Tile.meta"
import { meta as metaTimestamp } from "../components/Timestamp/Timestamp.meta"
import { meta as metaToggle } from "../components/Toggle/Toggle.meta"
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
	DatePicker: metaDatePicker,
	Details: metaDetails,
	Dialog: metaDialog,
	Donut: metaDonut,
	Dot: metaDot,
	Dropdown: metaDropdown,
	Fieldset: metaFieldset,
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
