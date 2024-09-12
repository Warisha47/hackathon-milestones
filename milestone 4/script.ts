const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDispalyElement = document.getElementById(`resume-display`) as HTMLDivElement;

//Handle form submission
form.addEventListener(`submit`,(event:Event)=>{
    event.preventDefault();


//Collect Input Values
 const name = (document.getElementById(`name`) as HTMLInputElement).value
 const mobile = (document.getElementById(`mobile`)as HTMLInputElement).value
 const email = (document.getElementById(`email`)as HTMLInputElement).value
 const education= (document.getElementById(`education`)as HTMLInputElement).value
 const experience = (document.getElementById(`experience`)as HTMLInputElement).value
 const skills = (document.getElementById(`skills`)as HTMLInputElement).value


 //Generate the resume content dynamically
 const resumeHtml= `
 <h2><b>Editable Resume</b></P>
 <h3>Personal Information</h3>
 <p><b>Name:</b><span contenteditable="true">${name}</span></P>
 <p><b>Email:</b><span contenteditable="true">${email}</span></p>
 <p><b>Mobile no:</b><span contenteditable="true">${mobile}</span></p>

 <h3>Education</h3>
 <p contenteditable="true">${education}</p>

 <h3>Experience</h3>
 
 <p contenteditable="true" >${experience}</p>

 <h3>Skills</h3>
 
 <p contenteditable="true">${skills}</p>

 `;

 //Display generated resume
 
 if(resumeDispalyElement){
    resumeDispalyElement.innerHTML = resumeHtml;
 }else{
    console.error(`The resume display element is missing`)
 }
});

