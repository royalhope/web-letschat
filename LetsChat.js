function addUser()
{
    user_input = document.getElementById("user_name").value;
    
    if(user_input == "")
    {

    }
    else
    {
        nick_name = document.getElementById("user_name").value;

        localStorage.setItem("nick_name", nick_name);
       
        window.location = "LetsChat_Room.html";
    }
}
