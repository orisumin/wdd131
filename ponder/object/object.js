const aCourse = {
    code: "WDD131",
    name: "Dynamic Web Fundamentals",
    sections: [
        {sectionNum: 1,
        room: "STC 247", 
        enrolled: 24, 
        days:"TTh", 
        instructor: "Brother Warner"},
        {sectionNum: 2,
        room: "STC 112", 
        enrolled: 3, 
        days:"TTh", 
        instructor: "Brother Alvey"}
    ],
    enrollStudent: function(sectionNum){
        //find the section from the array 
        //enroll one more student into that section
        console.log('student enrolled');
        const sectionindex = this.sections.findIndex((section) => (section.sectionNum == sectionNum));
        this.sections[sectionindex].enrolled++;
        renderSections(this.sections);
    }
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.room}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});


