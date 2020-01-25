var RoomsView = {

  $button: $('#rooms button'), // adds a room
  $select: $('#rooms select'), // dropdown menu


  initialize: function() {
    Rooms.add();
  },

  // this render function processes the data.results array of objets
  render: function(array) { // array of objects = data.results
    var roomList = new Set(); // Set does not do duplicates, it's an object
    array.forEach(function(obj) { // go thru the array of crazy objects and for each object
      roomList.add(obj.roomname); // for each object, we add it to our Set object
    });
    // console.log("LIST --->", roomList);
    // console.log("Room -->", room);
    for (var room of roomList) {
      RoomsView.renderRoom(room);
    }
    $( '#select' ).change(function() {
      $('#chats').html('');
      array.forEach(function(obj) { //go thru data.results again
        // check if value of obj.roomname = room selected variable
        var selectedRoom = $('#rooms select').children('option').filter(':selected').text();
        if (obj.roomname === selectedRoom) {
          var message = {};
          message.username = obj.username;
          message.roomname = obj.roomname;
          message.text = obj.text;
          MessagesView.renderMessage(message);
          return message;
        }
      });
    });

  },

  // this renderRoom function takes a string and adds room to dropdown menu $('#rooms select')
  renderRoom: function(room) {
    // we need to update fetch so that it only fetches messages filtered by rooms
    //trigger on click?
    var option = $(`<option value= "${_.escape(room)}">${_.escape(room)}</option>"`);
    $('#rooms select').append(option);
  },

};
