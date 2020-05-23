// var RoomsView = {

//   $button: $('#rooms button'),
//   $select: $('#rooms select'),



//   initialize: function(room) {

//   },

//   render: function(roomname)
//   {
//     if(roomname !== "undefined"){
//       var room= JSON.parse(roomname);
//     };
//     RoomsView.$select.empty();
//     RoomsView.$select.append(`<option id= ${room} value = ${room}>${room}</option>`)
//   }

// };
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
      },

  render: function() {

    RoomsView.$select.html('');
    Rooms
      .items()
      .each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function(event) {
    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
      }

};