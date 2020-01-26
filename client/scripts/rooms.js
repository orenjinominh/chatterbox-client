var Rooms = {
  add: function() {
    $('#addRoom').on( 'click', function() {
      RoomsView.renderRoom($('#roomInput').val()); // puts input into dropdown
      $('#roomInput').val('');
      console.log('CLICK');
      $('#chats').empty();
    });
  }
};


