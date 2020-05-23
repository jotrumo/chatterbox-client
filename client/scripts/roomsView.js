var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),



  initialize: function(room) {

  },

  render: function(roomname)
  {
    if(roomname !== "undefined"){
      var room= JSON.parse(roomname);
    };
    RoomsView.$select.empty();
    RoomsView.$select.append(`<option id= ${room} value = ${room}>${room}</option>`)
  }

};
