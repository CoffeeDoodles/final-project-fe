import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';

const PetPostDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const PET_DETAILS_URL = `http://localhost:8080/posts/${id}`
 
  useEffect(() => {
    fetch(PET_DETAILS_URL)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, [PET_DETAILS_URL]);

  console.log('is this working?')
  return (
    <div className="main-container">
      <Link to="/petposts" className="back-link">
        <button>Go Back</button>
      </Link>
      <div className="petpost-details">
      COMING SOON
      </div>
      {details.status}

    </div>
    
  )
}

export default PetPostDetails