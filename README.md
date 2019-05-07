## Turing Cafe - Reservation Portal

This application was built with `create-react-app`. After you clone down this repo, you will need to remove the current origin and create a new repo that you can push to on your GitHub account (you will need to add this new origin).

Once you have your own repository, you should run `npm install` and `npm start` to get up and running.

### Expectations / Rules

Build a React App that displays the current reservations for the Turing Cafe!

You will have 1 hour to build this application.

![turing-cafe-screenshot](https://user-images.githubusercontent.com/20754511/57332366-dbd59d00-70d7-11e9-9de6-967d7aca98a4.png)

### Iteration 0

Pull down the [API repo](https://github.com/turingschool-examples/turing-cafe-api), get it up and running, and read through the README carefully.

### Iteration 1

Get all existing reservations on page load and display them to the user on the DOM.

### Iteration 2

Create a controlled form component. As a user types into the input fields the components state should change.

### Iteration 3

When the user clicks the `Make Reservation` button, the application should make a post request to the API and update state. The new reservation should display with all of the existing reservations.

**You may not have any fetch calls in any component other than App**

### Iteration 4 (extension)

Delete a reservation when the user clicks the `Cancel` button.