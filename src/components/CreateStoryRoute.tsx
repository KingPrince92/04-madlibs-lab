import "./CreateStoryRoute.css";
import { FormEvent, useContext, useState } from "react";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import { Navigate, useNavigate } from "react-router-dom";

const CreateStoryRoute = () => {
  const { addStory } = useContext(StoriesContext);
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [person, setPerson] = useState("");
  const [silly, setSilly] = useState("");
  const [occupation, setOccupation] = useState("");
  const [number, setNumber] = useState("");
  const [tagline, setTagline] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const newStory: Story = {
      author: author,
      word1: place,
      word2: person,
      word3: silly,
      word4: occupation,
      word5: number,
      word6: tagline,
    };
    addStory(newStory);
    navigate(`/stories`);
  };

  return (
    <form className="CreateStoryRoute" onSubmit={handleSubmit}>
      <label htmlFor="Author">Author: </label>
      <input
        type="text"
        name="Author"
        id="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="Place">Place: </label>
      <input
        type="text"
        name="Place"
        id="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <label htmlFor="Person">Person: </label>
      <input
        type="text"
        name="Person"
        id="Person"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
      <label htmlFor="Silly-Word">Silly Word: </label>
      <input
        type="text"
        name="Silly-Word"
        id="Silly-Word"
        value={silly}
        onChange={(e) => setSilly(e.target.value)}
      />
      <label htmlFor="Occupation">Occupation: </label>
      <input
        type="text"
        name="Occupation"
        id="Occupation"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <label htmlFor="Number">Number: </label>
      <input
        type="text"
        name="Number"
        id="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <label htmlFor="Brand-Tagline">Brand-Tagline: </label>
      <input
        type="text"
        name="Brand-Tagline"
        id="Brand-Tagline"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
      <button>Submit Story</button>
    </form>
  );
};

export default CreateStoryRoute;
