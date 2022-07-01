# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

## My process

### Built with

- Semantic / some accessible HTML5 markup
- plain CSS
- CSS Grid for desktop width (like the previous FEM challenge on forms, just use the grid generator netlify app)
- Mobile-first workflow
- plain JS

### What I learned

- Use of ARIA roles and scanning the application with Voice-over.
- Use of parentElement and children to target those tags rather than using classes or IDs everywhere.
- More creative client-side form validation.

### Continued development

This project can be improved:

- Some of the JS code is repetitive, there should be a way to condense the logic or re-use some of it. Probably involves use of classes.
- Could separate some of the conditionals into their own modules to improve the readability. Also, this would make additional code more maintainable.
- More validation: name- case sensitivity; password- should contain combination of alphanumeric and special characters, upper and lowercase.

### Useful resources

- css reset (link provided in stylesheet)
- [For the box-shadow feature](https://www.freecodecamp.org/news/how-to-create-beautiful-box-shadows-in-html-and-css/) - This helped me to add this particular box shadow effect required from the jpeg.
- [How to do the form validation with DOM manipulation](https://www.youtube.com/watch?v=CYlNJpltjMM&ab_channel=JavaScriptAcademy) - This is a relatively short video that gives a similar output to the design requirements.

## Author

wkan17012021

## Acknowledgments

Thanks to the JavaScript Academy for this walk through video tutorial on multi input form client-side validation.
