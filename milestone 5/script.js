var form = document.getElementById("resume-form");
var resumeDispalyElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
//Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //Collect Input Values
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //Save from data in localStorage with the username as the key
    var resumeData = {
        name: name,
        mobile: mobile,
        email: email,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //saving the data locally
    //Generate the resume content dynamically
    var resumeHtml = "\n <h2><b>Editable Resume</b></P>\n <h3>Personal Information</h3>\n <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></P>\n <p><b>Mobile no:</b><span contenteditable=\"true\">").concat(mobile, "</span></p>\n <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n \n <h3>Education</h3>\n <p contenteditable=\"true\">").concat(education, "</p>\n\n <h3>Experience</h3>\n \n <p contenteditable=\"true\" >").concat(experience, "</p>\n\n <h3>Skills</h3>\n \n <p contenteditable=\"true\">").concat(skills, "</p>\n\n ");
    //Display generated resume
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
    //Generate a shareable URL with the username only
    var shareableURL = "\n ".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //display the shareable link
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//Handle PDF download
downloadPdfButton.addEventListener("click", function () {
    window.print(); //This will open the print dialogue and allow the user to save as PDF
});
//Prefill the form based on the username in the URL
window.addEventListener("DOMContentLoaded", function () {
    var UrlParams = new URLSearchParams(window.location.search);
    var username = UrlParams.get("username");
    if (username) {
        //autofill form if data is found in local storage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value = username;
            document.getElementById("name").value = resumeData.name;
            document.getElementById("mobile").value = resumeData.mobile;
            document.getElementById("email").value = resumeData.email;
            document.getElementById("education").value = resumeData.education;
            document.getElementById("experience").value = resumeData.experience;
            document.getElementById("skills").value = resumeData.skills;
        }
    }
});
