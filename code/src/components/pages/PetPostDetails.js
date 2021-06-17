// import React from 'react'
// import { useParams } from 'react-router-dom'

// import useFetch from '../useFetch';


// const PetProfile = () => {
//   const { id } = useParams();
//   const { data, error, isPending } = useFetch('http://localhost:8080/petposts/' + id )

//   return (
//     <div className="petpost-details">
//       { isPending && <div>Loading...</div> }
//       { error && <div>{ error }</div> }
//     </div>
//   )
// }

// export default PetProfile