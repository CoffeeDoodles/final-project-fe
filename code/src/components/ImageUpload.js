import React, { useRef } from 'react'

const API_URL = 'http://localhost:8080/upload-images'

export const ImageUpload = () => {
  const fileInput = useRef()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])

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
      <button type="submit">
        Upload Image
      </button>
    </form>
  )
}