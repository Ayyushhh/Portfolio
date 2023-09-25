// ------------------ Education ------------------

const educationData = [
    {
        grade: "Bachelors of Technology",
        institute: "Jaypee University of Engineering and Technology, Guna",
    },
    {
        grade: "Intermediate",
        institute: "St. George's College, Agra",
    },
    {
        grade: "Matric",
        institute: "St. George's College, Agra",
    }
]

const educationBox = document.getElementById("education-box");
educationData.forEach(data => {
    const divElement = document.createElement("div");
    divElement.className = "education-details";
    divElement.classList.add("education-details");

    const gradeElement = document.createElement("h2");
    gradeElement.textContent = data.grade;

    const instituteElement = document.createElement("p");
    instituteElement.textContent = data.institute;

    divElement.appendChild(gradeElement);
    divElement.appendChild(instituteElement);

    educationBox.appendChild(divElement);

});



// ---------------- end of Education ------------