import { createContext } from "react";
import Story from "../models/Story";

interface StoriesContextModel {
  stories: Story[];
  addStory: (story: Story) => void;
}

const defaultValues: StoriesContextModel = {
  stories: [],
  addStory: () => {},
};

const StoriesContext = createContext(defaultValues);

export default StoriesContext;
