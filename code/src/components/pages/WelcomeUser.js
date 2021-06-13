// import React, { useEffect } from 'react'
// import { useSelector, useDispatch, batch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

// import { PETS_API_URL } from '../../reuseables/urls'

// import user from '../../reducers/user'
// import { MainContainer, SubContainer} from './styled-components/secret-style'

// const WelcomeUser = () => {
//     const accessToken = useSelector(store => store.user.accessToken)

//     const dispatch = useDispatch()
//     const history = useHistory()

//     useEffect(() => {
//       if (!accessToken) {
//         history.push('/login')
//       }
//     }, [accessToken, history])

//     useEffect(() => {
//       if (accessToken) {
//         const options = {
//           method: 'GET',
//           headers: {
//               Authorization: accessToken
//           }
//         }
//         fetch(PETS_API_URL('welcome'), options)
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               batch(() => {
//                 dispatch(user.actions.setSecretMessage(data.secretMessage))
//                 dispatch(user.actions.setErrors(null))
//               })
//             } else {
//               dispatch(user.actions.setErrors(data))
//             }
//           })
//       } 
//     }, [accessToken, dispatch]) 

//     const onButtonClick = () => {
//       batch(() => {
//         // remove user from localStorage
//         localStorage.removeItem('user')
//         dispatch(user.actions.setUsername(null));
//         dispatch(user.actions.setAccessToken(null))
//       })
//     }

//     return (
//       <MainContainer>
//         <SubContainer>
         
//         </SubContainer>
//       </MainContainer>
//     )
// }

// export default WelcomeUser