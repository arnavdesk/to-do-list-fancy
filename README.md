# to-do-list-fancy
This is basic to do list app which is built upon nodejs. Tech Stack involved : HTML,CSS, JS, Node.js, Express.js, EJS templating engine, MongoDB.

# How-To-Use
0. Clone this project
1. Start by installing npm and mongoDB if you don't have them already.
2. Run the Mongo Server.
3. In the directory do npm install and then npm start.

# Basic-Features

<p>1. To add a todo enter description, categeory and due-date. (Everything is mandatory).</p>
<p>2. To mark an item as complete either click on checkbox or the todo item. </p>
<p>3. "Delete completed" will delete all completed todo from list. </p>
<p>4. "Delete all" will delete all the todo from the list.</p>
<p>5. To delete a particular item click on dustbin (delete button). </p>
<p>6. State of items (completed or not) is stored in db therefore they are persistant. On refreshing it
will maintain that item was completed or not.</p>
<p>7. There is deadline feature, ie, if the deadline is in next 4 days it will show deadline is near or
if the deadline is missed it will show deadline missed.</p>