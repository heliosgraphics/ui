import { TooltipTriggerProps } from "components/Tooltip/Tooltip.types"
import { useTooltipContext } from "../../Tooltip.utils"
import type { FC } from "react"

export const TooltipTrigger: FC<TooltipTriggerProps> = ({ children }) => {
	const { triggerRef } = useTooltipContext()

	return <div ref={triggerRef}>{children}</div>
}
