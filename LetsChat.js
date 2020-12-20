function addUser()
{
    user_input = document.getElementById("user_name").value;
    
    if(user_input == "")
    {
        alert('Display Name input is empty!');
    }
    else
    {
        nick_name = document.getElementById("user_name").value;

        localStorage.setItem("nick_name", nick_name);
       
        window.location = "LetsChat_Room.html";
    }
}
