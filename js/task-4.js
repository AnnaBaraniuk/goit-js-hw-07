const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const data = {
        email: elements.email.value,
        password: elements.password.value,
    };
    if (data.email === "" || data.password=== "") {
        alert("All form fields must be filled in");
    } 
    
    console.log(data);
    event.currentTarget.reset();
}