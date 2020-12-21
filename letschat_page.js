var firebaseConfig = {
      apiKey: "AIzaSyCrQuU4heAxGLuFRajc_8PpMWYeED30HkM",
      authDomain: "web-letschat.firebaseapp.com",
      databaseURL: "https://web-letschat-default-rtdb.firebaseio.com",
      projectId: "web-letschat",
      storageBucket: "web-letschat.appspot.com",
      messagingSenderId: "1024952712118",
      appId: "1:1024952712118:web:627555993f3307aff05f17",
      measurementId: "G-BZCNHSSG5S"
    };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("nick_name");
room_name = localStorage.getItem("room_name");
function send()
{
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
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> " + name +"<img class='user_tick' src=tick.png></h4>";
         message_with_tag = "<h4 class='message-h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);


      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout()
{
localStorage.removeItem("nick_name");
localStorage.removeItem("room_name");
window.location.replace("LetsChat.html");
}

function back()
{
      window.location = "LetsChat_Room.html";
}