console.log("javascript starts running");

const profileForm = document.querySelector("#profile-form");
profileForm.addEventListener("submit", onUpdateProfile);


function onUpdateProfile(e) {
    e.preventDefault();
    const firstName = document.querySelector("#first-name").value.trim();
    const lastName = document.querySelector("#last-name").value.trim();
    const fullNameDisplay = document.querySelector("#full-name");
    fullNameDisplay.textContent = `${firstName} ${lastName}`;
    console.log(fullNameDisplay);
}