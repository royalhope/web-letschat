
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCrQuU4heAxGLuFRajc_8PpMWYeED30HkM",
      authDomain: "web-letschat.firebaseapp.com",
      projectId: "web-letschat",
      storageBucket: "web-letschat.appspot.com",
      messagingSenderId: "1024952712118",
      appId: "1:1024952712118:web:627555993f3307aff05f17",
      measurementId: "G-BZCNHSSG5S"
};

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
          window.location = "index.html"; 
}