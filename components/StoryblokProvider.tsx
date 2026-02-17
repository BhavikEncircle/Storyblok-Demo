"use client"
import type { PropsWithChildren } from "react"
import { storyblokInit } from "@storyblok/react"
import { Tour } from "./Tour"
import { Page } from "./Page"
storyblokInit({
    components: {
        tour: Tour,
        page: Page,
    },
    enableFallbackComponent: true,
})

export default function StoryblokProvider({ children }: PropsWithChildren) {
    return <>{children}</>;
}