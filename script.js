function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

   var callAPI = (name, email, subject, message) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built-in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"name": name, "email": email, "subject": subject, "message": message});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://cikbpyqir9.execute-api.us-east-1.amazonaws.com/v1/contactForm", requestOptions)
        .then(response => response.text())
        .then(result => alert("Form submitted successfully!"))
        .catch(error => console.log('error', error));
}



