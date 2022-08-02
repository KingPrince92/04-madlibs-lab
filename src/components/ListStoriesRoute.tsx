import { useContext } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { stories } = useContext(StoriesContext);
  return (
    <div className="ListStoriesRoute">
      <h2>Pick a Story</h2>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link to={`/stories/${encodeURIComponent(story.id!)}`}>
              Mad Lib by {story.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStoriesRoute;
