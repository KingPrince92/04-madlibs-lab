import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [id, setId] = useState(2);
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      author: "Mayor McCheese",
      word1: "Burger King",
      word2: "John",
      word3: "wobbly",
      word4: "chef",
      word5: "9",
      word6: "Family's First.",
    },
  ]);
  const addStory = (story: Story): void => {
    story.id = id;
    setStories((prev) => [...prev, story]);
    setId((prev) => prev + 1);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
