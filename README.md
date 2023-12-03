React Profile Component
This React component (Profile.js) fetches user data from the Random User Generator API i.e https://randomuser.me/api/?page=1&results=1&seed=abc and displays the user's photo, name, gender, and phone number.

How to Use
Install the required dependencies: npm install
Run the application: npm start
Open your browser and navigate to http://localhost:3000 to view the profile component.
You can also visit website on below deployed link: https://saurabh23089.github.io/profile/

Code Overview
Dependencies
React
Tailwind CSS (ensure it's installed)
Profile Component
The main component is Profile.js, which is located in the src directory. Here's a brief overview:

Dependencies Installation:
Make sure to install the required dependencies by running npm install before using the component.

Fetching Data:
The component uses the fetch API to retrieve user data from the Random User Generator API. The fetched data includes the user's first name, last name, phone number, gender, and profile picture.

Rendering:
The user data is rendered in a responsive and styled manner. The profile picture, name, gender, and phone number are displayed within a rounded and bordered container.

Styling:
Tailwind CSS classes are utilized for styling, ensuring a clean and responsive design. Custom classes like bg-custom-color and vs:text-base are used for specific styling requirements.