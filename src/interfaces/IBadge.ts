import React from "react"

export interface IBadge {
    value: string
    title?: string
    type?: string
}

export interface IBadgesDiv {
    children: React.ReactNode
}