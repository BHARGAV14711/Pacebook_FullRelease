const firebaseConfig = {
      apiKey: "AIzaSyDjq4FRBq9wsr7GQSTKHKV1iN5iTcGY64c",
      authDomain: "pacebook-f4b26.firebaseapp.com",
      databaseURL: "https://pacebook-f4b26-default-rtdb.firebaseio.com",
      projectId: "pacebook-f4b26",
      storageBucket: "pacebook-f4b26.appspot.com",
      messagingSenderId: "357178680958",
      appId: "1:357178680958:web:2601012583c57859419a2f"
    };
    
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   //ADD YOUR FIREBASE LINKS HERE
   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name;
   function addRoom(){
         room_name = document.getElementById("room_name").value;
   
         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });
   
         localStorage.setItem("room_name", room_name);
         window.location = "pacebook_page.html";
   }
   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "pacebook_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }