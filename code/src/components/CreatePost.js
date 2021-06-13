import React, { useState, useRef } from 'react'

const API_URL = 'http://localhost:8080/pets'

export const CreatePost = () => {
  const fileInput = useRef()
  const [name, setName] = useState('')

  const [petName, setPetName] = useState('')
  const [breed, setBreed] = useState('')
  const [species, setSpecies] = useState('')
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [photo, setPhoto] = useState('')
  const [sex, setSex] = useState('')
  const [email, setEmail] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)

    fetch(API_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Pet Image
        <input type="file" ref={fileInput} />
      </label>

      <label>
        Pet name
        <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
      </label>

      <label>
        Pet name
        <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} />
      </label>

      <label>
        Breed
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>

      <label>
        Status:
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </label>

      <label>
        Description
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <label>
        Location
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>

      <label>
        Sex
        <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
      </label>

      <label>
        Email
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <button type="submit">
        Submit
      </button>
    </form>
  )
}