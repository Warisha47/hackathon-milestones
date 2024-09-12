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
    //Generate the resume content dynamically
    var resumeHtml = "\n <h2><b>Editable Resume</b></P>\n <h3>Personal Information</h3>\n <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></P>\n <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n <p><b>Mobile no:</b><span contenteditable=\"true\">").concat(mobile, "</span></p>\n\n <h3>Education</h3>\n <p contenteditable=\"true\">").concat(education, "</p>\n\n <h3>Experience</h3>\n \n <p contenteditable=\"true\" >").concat(experience, "</p>\n\n <h3>Skills</h3>\n \n <p contenteditable=\"true\">").concat(skills, "</p>\n\n ");
    //Display generated resume
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
