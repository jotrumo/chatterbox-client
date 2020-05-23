// var MessagesView = {

//   $chats: $('#chats'),

//   initialize: function() {
//     setInterval (function() {
//       MessagesView.$chats.empty();
//       App.fetch();
//     }, 10000);
//   },

//   renderMessage: function(data) {

//     // $('#chats').append('message');

//     //if data.results we will iterate over the length of data.
//     console.log(data);
//     if(data.results) {
//       var roomObj ={};
//       var roomArray=[];
//       for (var i = 0; i < data.results.length; i++) {
//         //#chats append//from here we are going to call messege view and its going to return messages.
//         // RoomsView.initialize(data.results[i]);
//         MessagesView.$chats.append(MessageView.render(data.results[i]));
//         roomObj[data.results[i].roomname] = 0;

//         for(var key in roomObj)
//         {
//           roomArray.push(JSON.stringify(key))
//         }

//         for(var j = 0; j<roomArray.length; j++){
//           RoomsView.render(roomArray[i]);
//         }
//       }
//     }
//   }

// };



var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
      },

  render: function() {

    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    // Get username from data attribute
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
      }

};
