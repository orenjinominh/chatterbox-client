// renders user input

var MessageView = {

  render: _.template(`
    <div class="chat">
      <div class="username">
        <%- username %>
      </div>
      <div class="text">
        <%- text %>
      </div>
      <div class="roomname">
        <%- roomname %>
      </div>
    </div>
  `)
};

// var compiled = _.template(
//   "<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>" +
//     "<div class='movie-info'>" +
//       "<h3 class='movie-title'>" +
//          "<%= movieTitle %>" +
//       "</h3>" +
//       "<p class='movie-director'>" +
//          "<%= movieDirector %>" +
//       "</p>" +
//     "</div>" +
//   "</div>"
// );

// var compiled = _.template("hello: <%= name %>");
// compiled({name: 'moe'});
// => "hello: moe"

// var template = _.template("<b><%- value %></b>");
// template({value: '<script>'});
// => "<b>&lt;script&gt;</b>"