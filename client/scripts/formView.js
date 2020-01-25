var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    event.preventDefault();

    console.log('click!');

    if ($('#message').val()) {
      var message = {};
      message.username = App.username;
      message.roomname = $('#roomInput').val() || 'Lobby';
      message.text = $('#message').val();
      Parse.create(message);
      MessagesView.renderMessage(message);
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// renderMessage: function(message) { // message = object below
//   $('#chats').append(MessageView.render(message));
// }