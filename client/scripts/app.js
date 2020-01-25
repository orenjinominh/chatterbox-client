var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // setInterval(function(){App.fetch();}, 2000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // // examine the response from the server request:
      // console.log("DATA --->", data);

      // if(!data.results || !data.results.length) {
      //  return;
      // }

      MessagesView.render(data.results);
      RoomsView.render(data.results);



      // Messages.update(data.results, MessagesView.render)
      // Rooms.update(data.results, RoomsView.render);




      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};



