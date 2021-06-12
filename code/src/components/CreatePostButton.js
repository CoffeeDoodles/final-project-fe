import React from 'react'

import { PrimaryButton } from '../components/styled-components/Form'

const CreatePostButton = () => {
 
  return(
    <PrimaryButton
      type='submit'
      // onClick={() => setMode('new-post')}
    >
      Create New Post
    </PrimaryButton>
  )
}

export default CreatePostButton
