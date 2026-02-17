import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { Tour } from "../components/Tour";
import { Page } from "../components/Page";
storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        tour: Tour,
        page: Page,
    },
});
