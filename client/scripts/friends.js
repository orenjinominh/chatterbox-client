var Friends = {
  // if person name exists in our obj
  // when we render the elements we need to add the friend class style
  allUsers: [],
  initialize: function() {
    console.log($('.username'))
    $('.username').each(function(i, el){
      console.log(el)
      if (el.innerText) {
        Friends.allUsers.push(el.innerText);
      }
    });
    console.log(Friends.allUsers);
    Friends.allUsers.forEach(function(name, i) {
      let selector = `.${name}`;
      console.log(selector)
      $(selector).on('click', null, function(){Friends.toggleStatus(name)});
    });
    // $('#chats').on('click', '.username', this.toggleStatus)

  },

  allFriends: {
    // Justin: true // sample of friend obj after we add a friend

  },

  toggleStatus: function(name) {
    console.log(name)
    // $('body').on('click', '.username', function() {
    // $('.username').on('click', null, function(e) {
    //   e.stopImmediatePropagation();
    //   // console.log("click");
    //   console.log("element ---->", $(this));
    let selector = `.${name}`;
    $(selector).toggleClass('friend')
      // $('.username').each(function(i, el) {
      //     console.log(el)
      //     el.addClass('friend');

      // })
      // if (Friends.allFriends.hasOwnProperty(this.innerText)) {
      //   delete Friends.allFriends[this.innerText];
      // } else {
      //   Friends.allFriends[this.innerText] = true;
      // }
      console.log("HEERE --->",  Friends.allFriends);
      // MessagesView.render(App.localData);
    // })

  },


};
      // console.log(event.currentTarget.innerText);
      // $('.username').addClass('.friend');



      // $('.username').each(function() {
      //   if ($(this).text() === 'username of clicked element') {

      //   }
    // });
      // if ($('.username').text() === friend) {
      // $('.username').css('color', 'red');
      // $('.username').parent().effect('highlight');
      // }
      // check if all messages inside chats have that username, then we highlight
      // if ($('.chats').children() // chat aka message has that username value
        // console.log("FRIEND ------> ", $('#username').parent().toggleClass('highlight');)
    // });


// var option = $(`<option value= "${_.escape(room)}">${_.escape(room)}</option>"`);
// $('#rooms select').append(option);

  // pseudocode
  // keep variable called friendsList(maybe a Set)
  // when we click a div, we keep the value of that person's username <div class username> usernamehere </div>
  // bold username div (div class "username")
  // then we highlight all messages (div class "chat")

