//for rendering messages on the page


var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {


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
    // return array;

  },

  // this puts object onto the DOM
  renderMessage: function(message) { // message = object below

    $('#chats').prepend(MessageView.render(message));
  }
  // clearAll: function() {
  //   $('#chats').remove();
  // }
};

// var message = {
//   username: 'Mel Brooks',
//   text: 'Never underestimate the power of the Schwartz!',
//   roomname: 'lobby'
// };