var App = {

  localData: null,

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function() {
      App.stopSpinner();
      Friends.initialize();
    });


    // setInterval(function(){App.fetch();}, 2000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      App.localData = data.results;
      MessagesView.render(data.results);
      RoomsView.render(data.results);
      console.log('DATA --->', data.results);
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



