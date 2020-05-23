var MessageView = {

  render: function()
  {

    var text = JSON.stringify(this.text);//<script>kajs;fj</script>

    var user = JSON.stringify(this.username);
    // console.log(user)
    // var room = data.roomname;
    // console.log(room)
    // var time = data.createdAt;
    // console.log(time)
  return _.template(`

      <div class="chat">
        <div class="username">${user}:</div>
        <div class ="text">${text}</div>
      </div>

    `)
  }
};

/* <div class="room"> ${room}</div>
<div> class="createdAt">${time}</div> */