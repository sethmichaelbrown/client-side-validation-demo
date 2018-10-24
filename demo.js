document.addEventListener('DOMContentLoaded', function() {

  let form = document.getElementsByTagName("form")[0] // returns array
    // console.log(form)

  form.addEventListener("submit", function(){
    event.preventDefault() // prevents form submitting immediately (Default)

    let email = document.getElementById("email-input").value
    let password = document.getElementById("password-input").value
    let tel = document.getElementById("tel-input").value
    let admin = document.getElementById("admin-input").checked // don't check for value of checkbox


      console.log("User email is:", email)
      console.log("User password is:", password)
      console.log("User tel is:", tel)
      console.log("User admin is:", admin)

  })

  let admin = document.getElementById("admin-input")
  let body = document.querySelector("body")

  admin.addEventListener("click", function(){
    if(admin.checked){
      //append text to page

      let newText = document.createElement("p")
      newText.setAttribute("id", "new-text")
      newText.innerText = "Hello World!"
      body.appendChild(newText)


    }
    else{
      //remove text from page
      let newText = document.querySelector("#new-text")
      body.removeChild(newText)
    }


  })

}); // End of DOMContentLoaded
