import React from 'react'
import { Link } from 'react-router-dom'

import { PrimaryButton } from './styled-components/Form'

const CreatePostButton = () => {
  return (
    <Link to="/create-post">
      <PrimaryButton className="create-button" type="submit">
        Create Post   
      </PrimaryButton>
    </Link>
  );
};

export default CreatePostButton

