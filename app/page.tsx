import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: "draft"
  });
  return response.data.story;
};
export default async function HomePage() {
  const story = await fetchHomePage();
  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
}
