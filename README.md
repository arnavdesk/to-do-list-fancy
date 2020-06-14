# to-do-list-fancy
This is basic to do list app which is built upon nodejs. Tech Stack involved : HTML,CSS, JS, Node.js, Express.js, EJS templating engine, MongoDB.

# How-To-Use
1. Clone this project
2. Start by installing npm and mongoDB if you don't have them already.
3. Run the Mongo Server.
4. Navigate to Directory structure and run following commands :
```
npm install 
```
```
npm start or node index.js
```
# Basic-Features

1. To add a todo enter description, categeory and due-date. (Everything is mandatory).
2. To mark an item as complete either click on checkbox or the todo item. 
3. "Delete completed" will delete all completed todo from list. 
4. "Delete all" will delete all the todo from the list.
5. To delete a particular item click on dustbin (delete button). 
6. State of items (completed or not) is stored in db therefore they are persistant. On refreshing it
will maintain that item was completed or not.
7. There is deadline feature, ie, if the deadline is in next 4 days it will show deadline is near or
if the deadline is missed it will show deadline missed.
