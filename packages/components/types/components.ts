import type { ReactElement } from 'react'

export type HeliosOnClickType = (_?: unknown) => Promise<unknown> | void
export type HeliosChildrenType = ReactElement<unknown> | null
