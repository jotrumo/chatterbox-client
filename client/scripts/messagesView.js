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
      var roomObj ={};
      var roomArray=[];
      for (var i = 0; i < data.results.length; i++) {
        //#chats append//from here we are going to call messege view and its going to return messages.
        // RoomsView.initialize(data.results[i]);
        MessagesView.$chats.append(MessageView.render(data.results[i]));
        roomObj[data.results[i].roomname] = 0;

        for(var key in roomObj)
        {
          roomArray.push(JSON.stringify(key))
        }

        for(var j = 0; j<roomArray.length; j++){
          RoomsView.render(roomArray[i]);
        }
      }
    }
  }

};



    // roomArray = Object.keys(roomObj);
    // for(var j =0; j<roomArray.length; j++)
    // {
    //   RoomsView.render(roomArray[j]);
    // }
