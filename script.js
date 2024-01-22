function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function callAPI(name, email, subject, message) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var myHeaders = new Headers();
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields before submitting.');
      return; // Stop further execution if any field is empty
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return; // Stop further execution if email format is incorrect
    }
  
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"name": name, "email": email, "subject": subject, "message": message});
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
        
        const apiResponse = true;
        if (apiResponse) {
          alert('Form submitted successfully!!!');
        }
}



