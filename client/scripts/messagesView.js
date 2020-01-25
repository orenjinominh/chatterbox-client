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
      message.username = obj.username;
      message.roomname = obj.roomname;
      message.text = obj.text;
      // console.log("SIMPLEOBJ --->", message);
      MessagesView.renderMessage(message);
      return message;
    });

  },

  // this puts object onto the DOM
  renderMessage: function(message) { // message = object below

    $('#chats').prepend(MessageView.render(message));
  }

};

