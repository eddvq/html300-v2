
// JSON DATA

const profileJSON = [
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
];


// // Convert JSON to object
// const profileString = JSON.stringify(profileJSON);
// const profileInfoBank = JSON.parse(profileString);
//
// let output ='';
//
// // Creates Individual Cards
// profileInfoBank.forEach(function(currentUser){
//     //Sets the base card
//     //Creates Profile Base Div
//     let profileBase = `<div class ="profile-base"><img src="img/headshot.jpg" alt="Dashing portrait of ${currentUser.name}"><h2>${currentUser.name}</h2><p>${currentUser.jobTitle}</p></div>`;
//
//     //Creates Profile Deets Div
//     let profileDeets = `<div class="profile-deets">`;
//
//     let jobDeets = `<div class ="company"><h3>Company: </h3><p>${currentUser.company}</p></div>`;
//     let expDeets = `<div class ="experience"><h3>Experience: </h3><p>${currentUser.experience}</p></div>`;
//     let schoolDeets = `<div class ="school"><h3>School: </h3><p>${currentUser.school}</p></div>`;
//     let majorDeets = `<div class ="experience"><h3>Major: </h3><p>${currentUser.major}</p></div>`;
//     let emailDeets = `<div class ="email"><h3>Email: </h3><p>${currentUser.email}</p></div>`
//     let linkedDeets = `<div class="linked"><img src="img/linkedin.svg" alt="LinkedInLogo"><p>${currentUser.linkedInUrl}</p></div>`
//
//     output = '<div class ="card-container">' + profileBase + profileDeets + jobDeets + expDeets + schoolDeets + majorDeets + emailDeets + linkedDeets +'</div>' + '</div>';
//
//
// })
//
// //Outputs to Page
// document.querySelector('.template-hook').innerHTML = output;



// Convert JSON to object
const profileString = JSON.stringify(profileJSON);
const profileInfoBank = JSON.parse(profileString);

let output = "";

// Creates Individual Cards
profileInfoBank.forEach(function(currentUser){
    //Creates Profile Base Div
    let profileBase = `<div class ="card-container"><div class ="profile-base"><img src="img/headshot.jpg" alt="Dashing portrait of ${currentUser.name}"><h2>${currentUser.name}</h2><p>${currentUser.jobTitle}</p></div>`;

    //Creates Profile Deets Div
    let profileDeets = `<div class="profile-deets">`;

    let jobDeets = `<div class ="company"><h3>Company: </h3><p>${currentUser.company}</p></div>`;
    let expDeets = `<div class ="experience"><h3>Experience: </h3><p>${currentUser.experience}</p></div>`;
    let schoolDeets = `<div class ="school"><h3>School: </h3><p>${currentUser.school}</p></div>`;
    let majorDeets = `<div class ="experience"><h3>Major: </h3><p>${currentUser.major}</p></div>`;
    let emailDeets = `<div class ="email"><h3>Email: </h3><p>${currentUser.email}</p></div>`
    let linkedDeets = `<div class="linked"><img src="img/linkedin.svg" alt="LinkedInLogo"><p>${currentUser.linkedInUrl}</p></div>`

    output = output + profileBase + profileDeets + jobDeets + expDeets + schoolDeets + majorDeets + emailDeets + linkedDeets +'</div>' + '</div>';

    document.querySelector('.template-hook').innerHTML = output;
})



// // Convert JSON to object
// const profileString = JSON.stringify(profileJSON);
// const profileInfoBank = JSON.parse(profileString);
//
// let output ='<div class ="card-container">'
//
// // Creates Individual Cards
// profileInfoBank.forEach(function(currentUser){
//     //Sets the base card
//
//     //Creates Profile Base Div
//     let profileBase = `<div class ="profile-base"><img src="img/headshot.jpg" alt="Dashing portrait of ${currentUser.name}"><h2>${currentUser.name}</h2><p>${currentUser.jobTitle}</p></div>`;
//
//     //Creates Profile Deets Div
//     let profileDeets = `<div class="profile-deets">`;
//
//     let jobDeets = `<div class ="company"><h3>Company: </h3><p>${currentUser.company}</p></div>`;
//     let expDeets = `<div class ="experience"><h3>Experience: </h3><p>${currentUser.experience}</p></div>`;
//     let schoolDeets = `<div class ="school"><h3>School: </h3><p>${currentUser.school}</p></div>`;
//     let majorDeets = `<div class ="experience"><h3>Major: </h3><p>${currentUser.major}</p></div>`;
//     let emailDeets = `<div class ="email"><h3>Email: </h3><p>${currentUser.email}</p></div>`
//     let linkedDeets = `<div class="linked"><img src="img/linkedin.svg" alt="LinkedInLogo"><p>${currentUser.linkedInUrl}</p></div>`
//
//     output = output + profileBase + profileDeets + jobDeets + expDeets + schoolDeets + majorDeets + emailDeets + linkedDeets +'</div>' + '</div>';
//
//     //Outputs to Page
//     document.querySelector('.template-hook').innerHTML = output;
//
// })



// // Creates Individual Cards
// profileInfoBank.forEach(function(currentUser){
//
//   for(const key in currentUser){
//
//     //Sets the base card
//     let output ='<div class ="card-container">'
//
//     //Creates Profile Base Div
//     let profileBase = `<div class ="profile-base"><img src="img/headshot.jpg" alt="Dashing portrait of Paolo Maldini"><h2>${currentUser.name}</h2><p>${currentUser.jobTitle}</p></div>`;
//
//     //Creates Profile Deets Div
//     let profileDeets = `<div class="profile-deets">`;
//
//     let jobDeets = `<div class ="company"><h3>Company: </h3><p>${currentUser.company}</p></div>`;
//     let expDeets = `<div class ="experience"><h3>Experience: </h3><p>${currentUser.experience}</p></div>`;
//     let schoolDeets = `<div class ="school"><h3>School: </h3><p>${currentUser.school}</p></div>`;
//     let majorDeets = `<div class ="experience"><h3>Major: </h3><p>${currentUser.major}</p></div>`;
//     let emailDeets = `<div class ="email"><h3>Email: </h3><p>${currentUser.email}</p></div>`
//     let linkedDeets = `<div class="linked"><img src="img/linkedin.svg" alt="LinkedInLogo"><p>${currentUser.linkedInUrl}</p></div>`
//
//     output = output + profileBase + profileDeets + jobDeets + expDeets + schoolDeets + majorDeets + emailDeets + linkedDeets +'</div>' + '</div>';
//
//     //Outputs to Page
//     document.querySelector('.template-hook').innerHTML = output;
//
//   }
// })



// // EXPERIMENT START Trying to see if I can better automate the deets sectiong cuz it repeats
//
// function shellMaker(filling){
//   let shell = `<div class ="${filling}<h3>${filling}</h3><p>${filling}<p></div>"`
// }
//
// function deetConstructor(company, experience, school, major, email){
//   // maybe we don't need this because we are not making a new object?
//   this.company = company;
//   this.experience = experience;
//   this.school = school;
//   this.major = major;
//   this.email = email;
// }
//
// const dummy = new deetConstructor(currentUser.company, currentUser.experience, currentUser.school, currentUser.major, currentUser.email);
// console.log(dummy)
// //EXPERIMENT END

// profileDeets = profileDeets + `</div>`;
