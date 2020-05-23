var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    setInterval (function() {
      MessagesView.$chats.empty();
      App.fetch();
    }, 10000);
  },

  renderMessage: function(data) {

    // $('#chats').append('message');

    //if data.results we will iterate over the length of data.
    console.log(data);
    if(data.results) {
      for (var i = 0; i < data.results.length; i++) {
        //#chats append//from here we are going to call messege view and its going to return messages.

        MessagesView.$chats.append(MessageView.render(data.results[i]));
        //Roomsview.render(data.results[i].roomname);
      }
    }
  }

};