// renders user input

var MessageView = {

  render: _.template(`
    <div class="chat">
      <div class="username <%- username %>">
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

