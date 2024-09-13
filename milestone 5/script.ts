const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDispalyElement = document.getElementById(`resume-display`) as HTMLDivElement;
const shareableLinkContainer=document.getElementById(`shareable-link-container`) as HTMLDivElement;
const shareableLinkElement=document.getElementById(`shareable-link`) as HTMLAnchorElement;
const downloadPdfButton=document.getElementById(`download-pdf`) as HTMLButtonElement;

//Handle form submission
form.addEventListener(`submit`,(event:Event)=>{
    event.preventDefault();


//Collect Input Values
const username =(document.getElementById(`username`)as HTMLInputElement).value
 const name = (document.getElementById(`name`)as HTMLInputElement).value
 const mobile = (document.getElementById(`mobile`)as HTMLInputElement).value
 const email = (document.getElementById(`email`)as HTMLInputElement).value
 const education= (document.getElementById(`education`)as HTMLTextAreaElement).value
 const experience = (document.getElementById(`experience`)as HTMLTextAreaElement).value
 const skills = (document.getElementById(`skills`)as HTMLTextAreaElement).value

//Save from data in localStorage with the username as the key

const resumeData = {
   name,
   mobile,
   email,
   education,
   experience,
   skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); //saving the data locally


 //Generate the resume content dynamically
 const resumeHtml= `
 <h2><b>Editable Resume</b></P>
 <h3>Personal Information</h3>
 <p><b>Name:</b><span contenteditable="true">${name}</span></P>
 <p><b>Mobile no:</b><span contenteditable="true">${mobile}</span></p>
 <p><b>Email:</b><span contenteditable="true">${email}</span></p>
 
 <h3>Education</h3>
 <p contenteditable="true">${education}</p>

 <h3>Experience</h3>
 
 <p contenteditable="true" >${experience}</p>

 <h3>Skills</h3>
 
 <p contenteditable="true">${skills}</p>

 `;

 //Display generated resume
 
 resumeDispalyElement.innerHTML=resumeHtml;
 
 //Generate a shareable URL with the username only
 const shareableURL = `
 ${window.location.origin}?username=${encodeURIComponent(username)}`;

 //display the shareable link
  shareableLinkContainer.style.display = `block`;
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent =shareableURL;

});

//Handle PDF download
downloadPdfButton.addEventListener(`click`, ()=>{
   window.print(); //This will open the print dialogue and allow the user to save as PDF
});

//Prefill the form based on the username in the URL
window.addEventListener(`DOMContentLoaded`,()=>{
   const UrlParams = new URLSearchParams(window.location.search);
   const username = UrlParams.get(`username`);
   if (username) {
      //autofill form if data is found in local storage
   const savedResumeData = localStorage.getItem(username);

   if(savedResumeData){
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById(`username`) as HTMLInputElement).value = username;

      (document.getElementById(`name`) as HTMLInputElement).value = resumeData.name;

      (document.getElementById(`mobile`) as HTMLInputElement).value = resumeData.mobile;

      (document.getElementById(`email`) as HTMLInputElement).value = resumeData.email;

      (document.getElementById(`education`) as HTMLTextAreaElement).value = resumeData.education;

      (document.getElementById(`experience`) as HTMLTextAreaElement).value = resumeData.experience;

      (document.getElementById(`skills`) as HTMLTextAreaElement).value = resumeData.skills;




   }
   
   }
});
