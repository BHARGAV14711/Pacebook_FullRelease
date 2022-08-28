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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
uname = message_data['name'];
message = message_data['message'];
like = message_data['like'];
NameWithTag = "<h4> "+ uname + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+ " value="+like+" onclick='updatedLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row= NameWithTag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
  } });  }); }
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function updatedLike(message_id){
  console.log("clicked on like button - " + message_id);
  button_id = message_id ;
  likes = document.getElementById(button_id).value;
  updatedLikes = Number(likes) + 1;
  console.log(updatedLikes);

  firebase.database().ref(room_name).child(message_id).update({
      like : updatedLikes
  })
}