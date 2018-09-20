// Example 2: adds user input and detects intents.

var prompt = require('prompt-sync')();
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

// Set up Assistant service wrapper.
var service = new AssistantV1({
  username: '30d14870-865a-459a-9e26-db645063c8e5', // replace with service username
  password: 'QxxVhORJZubK', // replace with service password
  version: '2018-02-16'
});

var workspace_id = 'ed7e15ad-8108-4ef0-95b5-d72be221113e'; // replace with workspace ID

// Start conversation with empty message.
service.message({
  workspace_id: workspace_id
  }, processResponse);

// Process the service response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // If an intent was detected, log it out to the console.
  if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }

  // Prompt for the next round of input.
  var newMessageFromUser = prompt('>> ');
  service.message({
    workspace_id: workspace_id,
    input: { text: newMessageFromUser }
    }, processResponse)
}