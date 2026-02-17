"use client"
import type { PropsWithChildren } from "react"
import { storyblokInit } from "@storyblok/react"
import { Tour } from "./Tour"
import { Page } from "./Page"
import { Hero } from "./Hero"
import { Grid } from "./Grid"
import { Feature } from "./Feature"
import { Testimonial } from "./Testimonial"
import { RecommendedTours } from "./RecommendedTours"

storyblokInit({
    components: {
        tour: Tour,
        page: Page,
        hero: Hero,
        grid: Grid,
        feature: Feature,
        testimonial: Testimonial,
        recommendedTours: RecommendedTours,
    },
    enableFallbackComponent: true,
})

export default function StoryblokProvider({ children }: PropsWithChildren) {
    return <>{children}</>;
}