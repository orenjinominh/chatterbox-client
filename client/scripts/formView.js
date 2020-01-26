var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    event.preventDefault();

    if ($('#message').val()) {
      var message = {};
      var selectedRoom = $('#rooms select').children('option').filter(':selected').text();
      // console.log("SELECT --->", selectedRoom);
      message.username = App.username;
      message.roomname = ($('#roomInput').val() || selectedRoom) || 'Lobby';
      message.text = $('#message').val();
      Parse.create(message);

      if ($('#roomInput').val()) {
        RoomsView.renderRoom($('#roomInput').val());
        $('roomInput').val('');
        $('#chats').empty();
      }
      MessagesView.renderMessage(message);

      // App.fetch(function(){
      //   App.stopSpinner();
      //   Friends.initialize();
      //   // RoomsView.renderRoom($('#roomInput').val());
      //   // MessagesView.renderMessage(message);
      // });
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

