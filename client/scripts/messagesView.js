//for rendering messages on the page


var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // this.clearAll();
    // debugger;
    // for (var i = 0; i < Messages.length; i++) { // i = 0
    //   this.render(Messages[i]);
    // }

  },

  render: function(message) { // message = data.results which is an array

      $('#chats').append(MessageView.render(message));


  }

  // clearAll: function() {
  //   $('#chats').remove();
  // }
};