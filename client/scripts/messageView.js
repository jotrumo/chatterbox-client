var MessageView = {

  render: function(data)
  {

    var text = data.text;//<script>kajs;fj</script>

    var user = data.username;


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