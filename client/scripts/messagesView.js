var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$chats.on('submit', MessagesView.renderMessage);
    // MessagesView.renderMessage();
  },

  renderMessage: function(data) {
    console.log(data)
    // $('#chats').append('message');

    //if data.results we will iterate over the length of data.
    if(data.results) {
      for (let i = 0; i < data.results.length; i++) {
        //#chats append//from here we are going to call messege view and its going to return messages.
        MessagesView.$chats.append(MessageView.render(data.results[i]));
      }
    }
  }

};