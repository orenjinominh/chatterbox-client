//for rendering messages on the page
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Rooms.add();


  },
  // this converts to simple object
  render: function(array) { // array = data.results which is an array
    array.forEach(function(obj) {
      var message = {};
      // console.log("I'm ---->", $(this), this)
      if (Friends.allFriends[obj.username]) {
        message.friends = true;
      }
      message.username = obj.username;
      message.roomname = obj.roomname;
      message.text = obj.text;
      // console.log("SIMPLEOBJ --->", message);
      MessagesView.renderMessage(message);
      // return message;

    });

  },

  // this puts object onto the DOM
  renderMessage: function(message) { // message = object below
    // console.log("Message --->", message.friends)
    // if (message.friends) {
    //   // var $messages = $('.username');
    //   // // console.log("MEs =->", $messages);

    //   // console.log(message)
    //   $('#chats').prepend(MessageView.render(message));
    // } else {

      $('#chats').append(MessageView.render(message));
    // }

  }

};

