//Begin the login process and set up the listener for new messages
login(start, recieveMessage);

//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
	console.log(user);
	var get = document.getElementById("sendMessage");
	 document.getElementById("recieveMessage");
}

//This function runs every time you recieve a message. It will run for every message already in the database.
//The message information is passed to you in the variable 'message'
function recieveMessage(message) {
if(users[message.uid] == undefined) {
var names = message.name.split(" ");
var inits = "";
for(i in names) {
inits += names[i].charAt(0);
}
users[message.uid] = inits;
}

console.log(users);
}

	

//The sendMessage('text') function will send a message from you to the database.
function send() {
	sendMessage ('hi')
}
