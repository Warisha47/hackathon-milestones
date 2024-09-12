//Get refrences  to the form and display area
var form = document.getElementById("resume-form");
var resumeDispalyElement = document.getElementById("resume-display");
//Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //Collect Input Values
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //generate the resume content dynamically
    var resumeHtml = "\n <h2><b>Resume</b></P>\n <h3>Personal Information</h3>\n <p><b>Name:</b>".concat(name, "</P>\n <p><b>Email:</b>").concat(email, "</p>\n <p><b>Mobile no:</b>").concat(mobile, "</p>\n\n <h3>Education</h3>\n <p>").concat(education, "</p>\n\n <h3>Experience</h3>\n <p>").concat(experience, "</p>\n\n <h3>Skills</h3>\n <p>").concat(skills, "</p>\n\n ");
    //Display generated resume
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
