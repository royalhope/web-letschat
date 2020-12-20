
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBuGDeYk4TBEQsZRSqi63v727WaJBImqpk",
      authDomain: "letschat-website.firebaseapp.com",
      databaseURL: "https://letschat-website.firebaseio.com",
      projectId: "letschat-website",
      storageBucket: "letschat-website.appspot.com",
      messagingSenderId: "685976069194",
      appId: "1:685976069194:web:7cbb0b5c508977419f72b3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

nick_name = localStorage.getItem("nick_name");
document.getElementById("username_display").innerHTML = "Welcome " + nick_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

         localStorage.setItem("room_name", room_name);

         window.location = "letschat_page.html";
}

function redirectToRoomName(name)

{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "letschat_page.html";
}

function logout()
{
      localStorage.removeItem("nick_name");
      localStorage.removeItem("room_name");
          window.location = "LetsChat.html"; 
}