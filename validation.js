function validateForm() {
    //get form values
    let messages = document.getElementById("messages");
    messages.innerHTML = "";

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;

    let genderSelected = document.querySelector('input[name="gender"]:checked');

    const usernameRegex = /^[a-z0-9]{4,12}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu)$/;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
    const passwordRegex = /^[A-Za-z0-9_]{9,}$/;
    
    //display error message
    function addMessage(text, className) {
        let p = document.createElement("p");
        p.innerHTML = text;
        p.className = className;
        messages.appendChild(p);
    }

    // Error Checking
    if (username === "") {
        addMessage("Please Enter Username", "error");
    }

    else if (!usernameRegex.test(username)) {
        addMessage("Please Enter Valid Username", "warning");
    }

    if (email === "") {
        addMessage("Please Enter Email", "error");
    }

    else if (!emailRegex.test(email)) {
        addMessage("Please Enter Valid Email", "warning");
    }

    if (phone === "") {
        addMessage("Please Enter Phone Number", "error");
    }

    else if (!phoneRegex.test(phone)) {
        addMessage("Please Enter Valid Phone Number", "warning");
    }

    if (password === "") {
        addMessage("Please Enter Password", "error");
    }

    else if (!passwordRegex.test(password)) {
        addMessage("Please Enter Valid Password", "warning");
    }

    if (!genderSelected) {
        addMessage("Please Select Gender", "error");
    }

    if (age === "") {
        addMessage("Please Select Age Group", "error");
    }

    if (password !== "" &&
        confirmPassword !== "" &&
        password !== confirmPassword) {
        alert("Passwords do not match");
    }
}

function clearErrors() {
    document.getElementById("messages").innerHTML = "";
}