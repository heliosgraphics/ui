import Layout from "./Layout"
import LayoutContent from "./components/LayoutContent"
import LayoutLeft from "./components/LayoutLeft"
import LayoutLeftItem from "./components/LayoutLeftItem"
import LayoutTop from "./components/LayoutTop"
import LayoutLeftItemGroup from "./components/LayoutLeftItemGroup"
import LayoutSeparator from "./components/LayoutSeparator"
import type { FCwithContent, LayoutProps } from "./Layout.types"
;(Layout as FCwithContent<LayoutProps>).Top = LayoutTop
;(Layout as FCwithContent<LayoutProps>).Left = LayoutLeft
;(Layout as FCwithContent<LayoutProps>).LeftItem = LayoutLeftItem
;(Layout as FCwithContent<LayoutProps>).Content = LayoutContent
;(Layout as FCwithContent<LayoutProps>).Separator = LayoutSeparator
;(Layout as FCwithContent<LayoutProps>).LeftItemGroup = LayoutLeftItemGroup

export default Layout as FCwithContent<LayoutProps>
