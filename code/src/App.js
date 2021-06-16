import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// 1. added import form
import form from './reducers/form'
import user from './reducers/user'

import Home from './components/pages/Home'
import PetPosts from './components/pages/PetPosts'
import About from './components/pages/About'
import PostForm from './components/PostForm'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

// 2. added form reducer in combineReducers
const reducer = combineReducers({
  user: user.reducer,
  form: form.reducer
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/petposts" component={PetPosts} />
          <Route path="/create-post" component={PostForm} />
          <Route path="/about-us" component={About} /> 
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
