import type { ReactElement } from 'react'

export type HeliosOnClickType = (_?: unknown) => Promise<unknown> | void
export type HeliosChildrenType = Array<ReactElement<unknown>> | ReactElement<unknown> | null
