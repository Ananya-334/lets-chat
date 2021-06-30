// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-oqhmkzGs0Xf5GzS2UC3PAYV9_uGNF-I",
  authDomain: "kwitter-v2-e9fc0.firebaseapp.com",
  databaseURL: "https://kwitter-v2-e9fc0-default-rtdb.firebaseio.com",
  projectId: "kwitter-v2-e9fc0",
  storageBucket: "kwitter-v2-e9fc0.appspot.com",
  messagingSenderId: "340886574575",
  appId: "1:340886574575:web:7ebcedc35f08de4103521a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "! ";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
