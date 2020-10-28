const socket = io.connect('http://localhost:3000');


function message_send() {
    const user = socket.id;
    const text = document.getElementById("text").value;
    data = {user, text};
    socket.emit('message', data);
    console.log("msg sent")
    document.getElementById("message-con").innerHTML += "<br>.                                                  You: " + text;
}

socket.on('newUser', (data) => {
    message = "User " + data +" Joined";
    document.getElementById("message-con").innerHTML += "<br>" + message;
})

socket.on('message', (data) => {
    message = data.user + ": " + data.text;
    document.getElementById("message-con").innerHTML += "<br>" + message;
})