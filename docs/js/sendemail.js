function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Disable form fields
    var formFields = document.getElementsByClassName("formfield");
    for (var i = 0; i < formFields.length; i++) {
        formFields[i].disabled = true;
    }

    // Get the form data
    var formData = {
        name: document.getElementById("name").value,
        company: document.getElementById("company").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send the email using Email.js
    emailjs.send("service_hou8ki8", "template_t5yo1e8", formData)
        .then(function (response) {
            console.log("Email sent successfully!", response.status, response.text);
            // Clear the form fields if needed
            document.getElementById("myForm").reset();
            // Enable form fields
            for (var i = 0; i < formFields.length; i++) {
                formFields[i].disabled = false;
            }
            // Reset send icon animation
            var sendIcon = document.getElementById("sendIcon");
            sendIcon.classList.add("sending"); // Add this line
            const sendButton = document.getElementById('sendButton');
            sendButton.value = 'Verstuurd! Alvast bedankt';
            for (var i = 0; i < formFields.length; i++) {
                formFields[i].disabled = true;
            }
        }, function (error) {
            console.log("Email sending failed!", error);
            // Enable form fields
            for (var i = 0; i < formFields.length; i++) {
                formFields[i].disabled = false;
            }
            // Reset send icon animation
            var sendIcon = document.getElementById("sendIcon");
            sendIcon.classList.remove("sending");
        });

}