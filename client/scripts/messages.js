var Messages = function() {
  //htlm
  var newMessage = {};
  newMessage.text = document.getElementById("message").value;

  newMessage.username = this.window.location.search.substr(10);

  // newMessage.roomName = document.getElementById("roomname").value;
  //{username: username,
      //taxt: newmessage}
  return newMessage;
};