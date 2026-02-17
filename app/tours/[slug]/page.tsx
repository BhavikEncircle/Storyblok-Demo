
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const generateStaticParams = async () => {
    const client = getStoryblokApi();
    const response = await client.getStories({
        content_type: "tour",
        version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return response.data.stories.map((story: any) => ({
        slug: story.slug,
    }));
}
const fetchTourPage = async (slug: string) => {
    const client = getStoryblokApi();
    const response = await client.getStory(`tours/${slug}`, {
        version: process.env.NODE_ENV === "development" ? "draft" : "published"
    });
    return response.data.story;
};


interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function TourPage({ params }: PageProps) {
    const { slug } = await params;
    const story = await fetchTourPage(slug);
    return (
        <div>
            <StoryblokStory story={story} />
        </div>
    );
}