document.addEventListener("DOMContentLoaded", function() {

  const form = document.querySelector("form")
  // console.log(form);

  form.addEventListener("submit", function() {
    // event.preventDefault()

    const email = document.getElementById("email-input").value
    const password = document.getElementById("password-input").value
    const telephone = document.getElementById("tel-input").value
    const admin = document.getElementById("admin-input").checked

    console.log("User email is: ", email);
    console.log("User password is: ", password);
    console.log("User telephone is: ", telephone);
    console.log("User admin is: ", admin);
  })

  const admin = document.getElementById("admin-input")
  const body = document.getElementsByTagName("body")[0]

  admin.addEventListener("click", function() {

    if (admin.checked) {
      let newText = document.createElement("p")
      newText.setAttribute("id", "new-text")
      newText.innerText = "Hooray!  You're an admin!"
      body.appendChild(newText)

    } else {
      let newText = document.getElementById("new-text")
      body.removeChild(newText)
    }
  })


}) // END DOMContentLoaded Listener

// ------- Grabbing form field values

//1. I've removed the disabled attribute from the telephone input.

//2. We first need to target the form element and store it in a variable.  The commented out console log can be commented in to show what all is being stored in this variable.

//3. Then, we will add an event listener to the entire form that listens for the submit event.

//4. Within this event listener, we can do a variety of actions.  For this brief example, we will just attempt to grab the values of each form field and console log them.  In a real application, we would likely package up this information and send it off to the server to be verified and allow the user to login.

//4. We can see on submit, that the console log happens, but the default behavior of the form (submission) is forcing the page to reload.  Let's add an event.preventDefault() so we can see the console log.

// -------- Appending new HTML elements depending on form inputs -------

//1. First, we want need to grab the element that will trigger change and store it in a variable. (admin checkbox)

//2. We will add an event listener to the stored variable that listens for clicks.

//3. Within the listener, we will set up an if/else statement that executes different code depending on if the checkbox is selected or not.

//4. If the admin box is checked, we create a new element and store it in a variable.

//5. I prefer to set an ID on the new element so that we can grab it easily later.

//6. We then set the innerText of the new element, so that text will actually appear on the page.

//7. For the sake of simplicity, we will append the new element as a child of the body -- such that it appears below the form.  insertBefore() is the method to be used when appending items in more specific places.  The code for that looks like:

// referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

// Where referenceNode is the node you want to put newNode after. If referenceNode is the last child within its parent element, that's fine, because referenceNode.nextSibling will be null and  insertBefore handles that case by adding to the end of the list.

// You can write your own reuseable function that simplifies this code as follows:

// function insertAfter(newNode, referenceNode) {
//    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

//8. In the case that the box is clicked and is no longer checked, we can use removeChild() to remove the element.
