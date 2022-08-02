import "./ViewStoryRoute.css";
import { useContext } from "react";
import StoriesContext from "../context/StoriesContext";
import { useParams } from "react-router-dom";

const ViewStoryRoute = () => {
  const storyId: string | undefined = useParams().id;
  const { stories } = useContext(StoriesContext);
  const story = stories.find((item) => item.id === parseInt(storyId!));

  return (
    <div className="ViewStoryRoute">
      {story && (
        <>
          <h2>Mad Lib by: {story.author}</h2>
          <p>
            As I tried to escape {story.word1}, I was apprehended by{" "}
            {story.word2}. They were absolutely livid at my departure, called me
            a {story.word3} piece of toast, and told me I would never work in
            the {story.word4} business again. I was going to have to wear an
            "I'm with Stupid" novelty T-shirt for {story.word5} years. One of
            these days I'll escape my {story.word3} prison, and I'll be able to
            tell everyone {story.word6}.
          </p>
        </>
      )}
    </div>
  );
};

export default ViewStoryRoute;
