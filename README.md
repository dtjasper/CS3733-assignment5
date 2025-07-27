[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/31aN3ZF9)
# Assignment 3 - Creating a Full-stack App
Due M 4-28 at 11:59pm. Late submission policy: 10 points off if submitted by T 4-29 at noon. This assignment is 
to be done in the same teams of two as in the previous assignments.

### Enter both of your names below. If we cannot figure out who did the assignment, we cannot grade it!

### Name: Delia Jasper
  
### Enter a description below of what your form does, and what processing of the data is done by the server

This form collects data about people who crochet and their preferences. The data is processed by the server as it collects the total number of people who voted for each category (or did not vote). It is displayed by the frontend as a bar graph and a list, but it is processed and held by the server.

---
## Assignment Details
* Use Webstorm to clone this repository on your computer.
    * Close any currently open projects.
    * Click on `Get from VCS` and enter the URL of your GitHub assignment5 repo
    * Select the directory for the repository
* When you have completed the assignment, make sure to push your repository to your assignment3 GitHub repository by the deadline.
  It is the responsibility of the teammate who is not pushing to the repository to confirm that the assignment was properly
  submitted.

In this assignment, you will create a simple full-stack web application using React and Express.  
Create a client folder and a server folder. In the client folder, create a blank Vite React.js project in 
Webstorm with Typescript enabled:  
Webstorm -> New Project -> Vite -> Template: react -> check Use TypeScript Template

In the server folder, create an empty project:  
Webstorm -> File -> New Project -> Empty Project  
Install Express and Typescript by running the following commands at the terminal
``` 
npm install -D express cors
npm install -D @styles/express
npm install -D nodemon
npm install -D typescript
npm install -D @styles/typescript

Note: you may use either CORS or a proxy server setting while you are developing the code and 
running two servers (Vite, and Express).  
```  

Create a new `package.json` file:  
Webstorm -> New -> package.json.  
Edit the file by changing `index.js` to `server.ts`. Create a `server.ts` file for your server code.

Change the styling for the form by selecting a font and new background and text colors.
You may use plain CSS or a style framework like Shadcn, Tailwind, MaterialUI, Mantine, etc.

Data will be stored in the Express server in an array of objects (computer memory) instead of being persistent and stored in database. Use React to create a form based on one of your hobbies from Assignment 2. The form must contain at least 5 different fields.
1. The form contains two buttons, a Submit button and a Display Logs button
2. When the Submit button is selected,
    1. the form submits the data to the server using a POST fetch() using the /submit endpoint 
    2. The submitted data is logged (stored) on the server.
    3. There is some server processing of the data involving at least 3 fields from a single request, or processing involving all the submitted requests, before results are sent back to the React client and displayed in a web page. Do NOT do the processing in the client side! See below for examples of processing possibilities.
3. When the Display Logs button is pressed
    1. the form sends a GET fetch() request using the /logs endpoint
    2. a list of submitted requests is displayed one line per request

The Express server runs on port 3000 and has the following endpoints:
1.	/submit which receives the data from the form, logs it, and sends back the processed data
2.	/logs which sends back an array of the data from all form submissions

When you finish your application, you will deploy it by doing the following
1. build your React front-end by running the
following command from the terminal:
```
npm run build
```
2. Copy the contents of the generated dist folder to `server/public`
3. Add the following line to server.js to serve your static files, particularly index.html
```
app.use(express.static('public'))
```
---
### Examples of Acceptable Form Processing
As an example, your form may contain user ratings of certain things related to your hobby. Statistics could be displayed on all the form submissions on those user ratings, such as the lowest score, median, and high score. Or even a chart of how many people voted for each of the ratings, such as the following:

Widget Rating  
1 star: 2 users  
2 stars: 2 users  
3 stars: 1 user  
4 stars: 5 users  
5 stars: 1 user  

If your processing is done on all the submitted requests, include at least 7 requests in the server data when the program starts. In other words, put at least 7 object literals in the server’s logs array

Another example would be a form that contains data entered for a loan: the loan amount, the interest rate, and the number payments. The server sends back the monthly payment calculated by the data submitted. Do not implement this example as there are many solutions on the web.

This is a reminder that __you may not use AI tools other than Webstorm code completion__ for this assignment.




