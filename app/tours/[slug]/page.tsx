
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";


const fetchTourPage = async (slug: string) => {
    const client = getStoryblokApi();
    const response = await client.getStory(`tours/${slug}`, {
        version: "draft"
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