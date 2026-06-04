// retrieve the form from the dom
const form = document.querySelector("#fsyForm");
console.log(form);
// user select one campus and checked no campus
// display message "select one campus"

//helper function to return checked campuses
function getCheckedCampuses(campuses){
    return Array.from(campuses)
        .filter(campus => campus.checked)
        .map(campus => campus.value);

}

function isDatevalid(){
    const date = new Date(form.availableDate.value);
    const today = new Date();
    return date > today;
}
function updateNotesField(numberOfCampuses, message){
    const note = document.getElementById("notesContainer");
    if (numberOfCampuses =="many"){
        note.hidden = false;
        if (isNotFilled()){
            message.textContent = "Please add a note.";
        }
    }
    else {
        note.hidden = true;
    }
}
function isNotFilled(){
        return form.notes.value == "";    
}

//add event listner to the form to detect butmet
form.addEventListener("submit", event =>{
    event.preventDefault();
    console.log(form.firstName.value);
    const message = document.getElementById("output");
    message.textContent = "";

    //an array of campuses
    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus;
    console.log(campuses);
    if (numberOfCampuses === "one" && (getCheckedCampuses(campuses).length == 0 || getCheckedCampuses(campuses).length > 1)){
        console.log('has to be only one');
        message.textContent = "Please select one campus.";
    }
    else if (numberOfCampuses === "many" && (getCheckedCampuses(campuses).length < 2)){
        console.log("less than 2 selected");
        message.textContent = "Please choose at least two campuses.";
    }

    if (!isDatevalid()){
        message.textContent = "Please choose a future date.";
    }
    updateNotesField(numberOfCampuses, message);
});