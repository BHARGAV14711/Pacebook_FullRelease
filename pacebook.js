function addUser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "Pacebook_room.html";
}
function FP(){
    window.location = "FP.html";
}