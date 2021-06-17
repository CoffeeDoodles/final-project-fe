import React, { useState} from 'react';

const PostForm = () => {
  const [status, setStatus] = useState('')
  const [petName, setPetName] = useState('')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [sex, setSex] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { status, petName, species, breed, sex, location, description, email };

    fetch ('http://localhost:8080/petposts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    })
    .then(() => {
      console.log('new post added')
    })    
  }

  return (
    <div className="create-post">
      <h2>Create a new post!</h2>
      <form onSubmit={handleSubmit}>
        <div 
          className="radio-wrapper"
          >
          <label htmlFor="status">Pet Status:</label>
          <input 
            name="status"
            type="radio"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="lost">Lost</label>
          <input 
            name="status"
            type="radio"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <label>Found</label>
          <input
            name="status" 
            type="radio"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="returned-home">Returned Home</label>
        </div>
        <label htmlFor="petName">Pet Name:</label>
        <input 
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <label htmlFor="species">Species:</label>
        <select 
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        >
          <option disabled selected value>
            Select an Species (More coming soon!)
          </option>
          <option 
            value="Dog">
              Dog
          </option>
          <option 
            value="Cat">
              Cat
          </option>
        </select>
        <label>Breed:</label>
        <input
          type="text"
          required
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <label htmlFor="sex">Sex:</label>
        <input 
          name="gender"
          type="radio"
          required
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="female">Female</label>
        <input
          name="gender" 
          type="radio"
          required
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <input 
          name="gender"
          type="radio"
          required
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="other">Other</label>
        <label htmlFor="location">Location:</label>
        <input 
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          placeholder="Please describe in as much detail as possible.
           Fur color/patterns, eye color, distinguishing marks etc."
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
        </textarea>
        <label htmlFor="email">Contact Email:</label>
        <input 
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Post</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default PostForm;