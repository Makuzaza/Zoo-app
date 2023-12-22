import '../index.css'

function About () {
    return (
        <main >
        <div className="about">
       <h1>About Zoo App</h1>
      
<p>Below, I provide an overview of the Minimum Viable Product (MVP), 
    key features implemented in this project, and insights gained from the code.</p>

<h2>Minimum Viable Product (MVP)</h2>

<h2>Navigation Links:</h2>
<p>- Home</p>
<p>- Animals</p>
<p>- Birds</p>
<p>- Fishes</p>
<p>- Insects</p>
<p>- About</p>


<h2>Home Page:</h2>
<p>The Home page serves as a main page with four images, acting as links to the Animals, Birds, Fishes and Insects pages. This design provides with quick access to explore the diverse fauna within the zoo.</p>

<h2>Zoo Pages:</h2>
<p>Dedicated Page: The pages display a complete list of all animals based on category.</p>
<p>Search Feature: Implementation of a search feature enables users to find specific animals by name.</p>
<p>Interactive Cards: Each animal card includes an image, a title, likes/dislikes icon, a count of likes or dislikes, add and remove like buttons, heart images that change depending on positive or negative feedback and the option to remove the card.</p>

<h2>Card page</h2>
<p>Each card can be open by pressing "See more" button.</p>
 <p>SinglePage contains likes or dislikes from Zoo Page, description, image and button "Go back"</p>

<h2>About Page</h2>

<h2>Header and Footer</h2>
<p>Component Integration: Header, Footer, and Card components are imported and integrated into the Root component, enhancing code organization and reusability.</p>
<p>Styling: The application is styled for an improved user interface.</p>

<h2>Additional Learnings from Code:</h2>

<h3>React State and Hooks:</h3>
<p>Utilization of the useState hook for managing state in functional components.</p>

<h3>React Router:</h3>
<p>Implementation of client-side routing using react-router-dom.</p>

<h3>Component Structure:</h3>
<p>Organization of the application into various components for improved readability and maintenance.</p>

<h3>Event Handling:</h3>
<p>Functions are defined to handle user interactions such as removing items, clearing searches, searching, and managing likes.</p>

<h3>Data Management:</h3>
<p>The application manages data related to zoo using state variables.</p>

<h3>Refactoring and Componentization:</h3>
<p>Refactor the application to utilise CategoryPage and SinglePage components instead of the Animal and Bird components.</p>

<h3>UI Interaction:</h3>
<p>Interaction with the user through likes, searches, and removal of items is implemented, improving the user experience.</p>

<h3>Routing and Element Rendering:</h3>
<p>Understanding how routes are defined and how React elements are rendered based on the route configuration.</p>

<h3>React Router Navigation:</h3>
<p>Integration of RouterProvider to organize navigation between different pages.</p>

<p>Development process included state management, routing, componentization, and user interaction implementation. These elements make interface of Zoo App more useful and user-friendly.</p>
        </div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        </main>
    );
}

export default About;