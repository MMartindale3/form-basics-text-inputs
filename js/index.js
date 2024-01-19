const profileForm = document.querySelector("#profile-form");
// console.log(profileForm);

profileForm.addEventListener("submit", onUpdateProfile);

 
function onUpdateProfile(e) {
    e.preventDefault();
    const firstName = document.querySelector("#first-name").value.trim();
    const lastName = document.querySelector("#last-name").value.trim();
    console.log(firstName, lastName)
}