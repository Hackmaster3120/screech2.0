var firebaseConfig = {
    apiKey: "AIzaSyATUEl-xB5p8HyvmsUyggF9cDBauAWDuzQ",
    authDomain: "kwitter-7b904.firebaseapp.com",
    databaseURL: "https://kwitter-7b904-default-rtdb.firebaseio.com",
    projectId: "kwitter-7b904",
    storageBucket: "kwitter-7b904.appspot.com",
    messagingSenderId: "27234838682",
    appId: "1:27234838682:web:dfa3c17ccccf9a80af9723"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {
    document.getElementById("suggestingRooms").style.display=block;
    console.log("Room_names");
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("Welcome_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    row="<div class='roomName'><span id="+Room_names+" onclick='goToRoom(this.id)'>#"+Room_names+"</span></div><hr>";
    document.getElementById("Welcome_rooms").innerHTML+=row;
    });});}
function goToRoom(name) {
    localStorage.setItem("RName",name);
    window.location="Room.html";
}
function Login() {
    username=document.getElementById("UserNameInput").value;
    localStorage.setItem("username",username);
    getData();
}