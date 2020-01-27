var Friends = {

  allUsers: [],
  initialize: function() {
    console.log($('.username'));
    $('.username').each(function(i, el) {
      console.log(el);
      if (el.innerText) {
        Friends.allUsers.push(el.innerText);
      }
    });
    console.log(Friends.allUsers);
    Friends.allUsers.forEach(function(name, i) {
      let selector = `.${name}`;
      console.log(selector);
      $(selector).on('click', null, function() { Friends.toggleStatus(name); });
    });
    // $('#chats').on('click', '.username', this.toggleStatus)

  },

  // allFriends: {
  //   // Justin: true // sample of friend obj after we add a friend

  // },

  toggleStatus: function(name) {
    // console.log(name);
    // $('body').on('click', '.username', function() {
    // $('.username').on('click', null, function(e) {
    //   e.stopImmediatePropagation();
    //   // console.log("click");
    //   console.log("element ---->", $(this));
    let selector = `.${name}`;
    $(selector).toggleClass('friend');
    // $('.username').each(function(i, el) {
    //     console.log(el)
    //     el.addClass('friend');

    // })
    // if (Friends.allFriends.hasOwnProperty(this.innerText)) {
    //   delete Friends.allFriends[this.innerText];
    // } else {
    //   Friends.allFriends[this.innerText] = true;
    // }
    // console.log('HEERE --->', Friends.allFriends);
    // MessagesView.render(App.localData);
    // })

  },


};


