# Project Title: PetSpotters (Frontend)
Developers: Elaine Bergström & Malin Göthe

### Link to Backend: 

https://github.com/CoffeeDoodles/final-project-be

## Deployed Project:

https://petspotter.netlify.app/

## Description

 We wanted to create a website using React and Redux that allowed users to post for lost or found pets in their area. Basically a digital version of putting up lost posters but on the internet. We wanted users to be able to search for animals they had lost, post lost pets, or post pets they had found with no owner.

## Getting Started

### Dependencies
* ### BACKEND:
  * Node.js 
  * Express
  * Mongoose
  * MongoDB
  * Cloudinary

* ### FRONTEND:
  * React
  * Redux
  * React-dom
  * React-router-dom
  * React-icons
  * React-toolkit
  * React-scripts
  * Styled-components
  * npm-js


### Executing program

* ### Backend 
 * npm run dev (Starts Server)
* ### Frontend 
  * cd petspotter-fe/code
  * npm start (starts local React Server)


## Authors

<a href="https://www.linkedin.com/in/elaine-bergstr%C3%B6m-a204934b/" >
Elaine Bergström (LinkedIn link)
</a>

<a href="https://www.linkedin.com/in/malin-g%C3%B6the-442718103/" >
Malin Göthe (LinkedIn link)
</a>

## Project Log/Issues/Fixes
## PetSpotters 1.0 Logs:

* ## Week 1 - (2021/05/31) - (2021/06/06)
    * Designed Project in Figma for mobile and desktop view.
    * Planned out Basic schedule to follow for all 4 weeks, broke down the project into charts to help
      visualize how the pages connected together and what components we needed. 
    * Set up the repository for the backend first of PetSpotter
    * Set up GET requests for petposts, home, about, pages, login, and register.
    * Set up frontend repository 
    * Created POST requests for login, posts, register
    * Set up Queries for dog, cat, found, lost search options
    * Cloudinary set up in backend for image uploading

* ### Problems: 
    * Queries were not properly working in postman, required some advice from mentors and was solved by 
      basic if/else statments within the GET request.
    * Cloudinary confusion, unsure of how to set up the FE with Cloudinary API in the same fetch as the form.
    * Had trouble getting data to post to MongoDB for pet posts, solved in following week.

* ## Week 2 - (2021/06/07) - (2021/06/13)
    * Started the Frontend, built the bare bones of the HTML for the home page and pet post page. Very
      90's geocities feel.
    * Built form for Login and Register as well as for submitting a pet post (if logged in).
    * We used Redux for Login/Register/Authentication Tokens, and React for the form for pet posts and    later for the pet cards.
    * Some styling of the home page, but not alot. 

* ### Problems: 
    * First issue was none of our data in the form for posts was sending and saving in the backend. After 
      much googling, and some mentor advice, we realized that our backend and frontend routes were named 
      the same so the code was getting confused. After applying seperate naming conventions to both FE and BE our data found it's way to mongoDB.
    * However our Cloudinary was not working, and we could not upload images, there was also the
      issue of having an upload image button and a submit form button. We wanted to combine the two so 
      that the img data would submit at the same time as the form. We eventually got images to upload, 
      but they still weren't saving to our PET SCHEMA in the backend. 

* ## Week 3 - (2021/06/14 - 2021/06/20)
       * Half-time demo presentation to bootcamp group. Recieved advice and feedback on current progress.
       * We figured out how to combine the form and image upload fetch on submit by nesting the fetches 
        so that first the image is uploaded and then the data is all sent to MongoDB. 
       * Styling of forms and pages, started to build pet card. 
       * Started building mobile menu

* ### Problems: 
      * We needed to connect the Image URL to our PET SCHEMA so that we could iterate it into our
        petcards with the other data submitted in the form. This was solved by adding it to our model 
        in the backend.
      * Mobile menu was harder than we thought, had to find a simpliler solution for our first time.
         This carried over into week 4 but we did manage to get it working. 
     
      


* ## Week 4 - (2021/06/21 - 2021/06/24)
    * Styled cards, basic styling of personal pet page, this week was riddled with so many problems. 
    * Everything that could go wrong, did go wrong. 
    * Most time spent problem-solving, googling, and some crying. 
    * Presented on Thursday 24th, at time login and registration were not working (again), 
      only users can create new posts... and we couldn't log in. This was fixed after thursday, 
      naturally. 

* ### Problems:
     * Could not get Form Data to properly map into the PetDetails cards we created, we solved this 
      after realizing our props were not specific enough. We had to add a ? so that if it 
      was true then it would recognize that it needed to continue on in the map or it would realize 
      it was empty. 

     * Login and Register stopped working once we started switching from localhost to heroku host. 
      This was eventually fixed after debugging the code, some due to misspelling or wrong 
      end-point names. Also had to remember to add SECRET STUFF to Heroku VARS. 

     * There was some strange hierarchy going on in our layers, some of the card elements would 
      appear on top of the drop down mobile menu.. this was a surprise on presentation day. However 
      it has been fixed after removing, 'px' from the z-index of the menu. 

* ## Week 5 (2021/06/28 - 2021/07/04) -
    * Everything that was broken is now fixed, and beautiful.

    * Currently working on a comment section below the personal pet page card. Need to 
      reconfigure the fetch setup so the data saves, also need to think about setting the comments
       to that specific card id.

    * Also working on ownership of post to user so they can edit and delete posts.   



## If We Had More Time/For the Future:

  * Add searchability among the cards
  * Add a comment section to individual posts (IN THE   
    WORKS)
  * Add private chatting to user
  * Users can edit/delete/update their own posts
  * Display more recently lost/found pets on home page
    have a contact form page
  * Conditional styling for cards based on status of pet.

## Acknowledgments

Huge thank you to Technigo's Maksymilian Olszewski, Marie Alesund, Poya Tavakolian,
Matilda Arvidsson for all their help putting out our code fires. Another big thanks to our mentor
Evelin Foxell for helping us understand backend coding better!
