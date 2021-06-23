import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { API_URL } from "../reuseables/urls";
import { MainContainer, Form } from "./styled-components/FormElements";

const IMAGE_API_URL = `https://pet-spotter.herokuapp.com/upload-images`;


const PostForm = () => {
  const [status, setStatus] = useState("");
  const [petName, setPetName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const accessToken = useSelector((store) => store.user.accessToken);
  const history = useHistory();
  const fileInput = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", fileInput.current.files[0]);

    fetch(IMAGE_API_URL, { method: "POST", body: formData })
      .then((res) => res.json())
      .then(({ imageUrl }) => {
        fetch(`https://pet-spotter.herokuapp.com/petposts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
          body: JSON.stringify({
            status,
            petName,
            species,
            breed,
            sex,
            location,
            description,
            email,
            imageUrl,
          }),
        }).then(() => {
          history.push("/petposts");
        });
      });
  };

  return (
    <MainContainer className="create-post">
      <h2>Create a new post!</h2>
      <Form onSubmit={handleOnSubmit}>
        <div className="radio-wrapper">
          <label htmlFor="status">Pet Status:</label>
          <input
            id="statusLost"
            name="statusRadio"
            type="radio"
            required
            value="lost"
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="status">Lost</label>
          <input
            id="statusFound"
            name="statusRadio"
            type="radio"
            required
            value="found"
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="status">Found</label>
          <input
            id="statusReturned"
            name="statusRadio"
            type="radio"
            required
            value="returned"
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="returned-home">Returned Home</label>
        </div>
        <div>
          <label htmlFor="petImage">
            Pet Image
            <input type="file" ref={fileInput} />
          </label>
        </div>
        <label htmlFor="petName">Pet Name:</label>
        <input
          id="petName"
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <label htmlFor="species">Species:</label>
        <select
          id="species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        >
          <option defaultValue>Select an Species (More coming soon!)</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
        <label htmlFor="breed">Breed:</label>
        <input
          id="breed"
          type="text"
          required
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <div className="radio-wrapper">
          <label htmlFor="sex">Sex:</label>
          <input
            id="sexFemale"
            name="sexRadio"
            type="radio"
            required
            value="female"
            onChange={(e) => setSex(e.target.value)}
          />
          <label htmlFor="sex">Female</label>
          <input
            id="sexMale"
            name="sexRadio"
            type="radio"
            required
            value="male"
            onChange={(e) => setSex(e.target.value)}
          />
          <label htmlFor="sex">Male</label>
          <input
            id="sexOther"
            name="sexRadio"
            type="radio"
            required
            value="other"
            onChange={(e) => setSex(e.target.value)}
          />
          <label htmlFor="other">Other</label>
        </div>
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Please describe in as much detail as possible.
           Fur color/patterns, eye color, distinguishing marks etc."
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="email">Contact Email:</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Post</button>
        <button>Cancel</button>
      </Form>
    </MainContainer>
  );
};

export default PostForm;
