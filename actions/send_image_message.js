const callSendAPI = require('../config/api')
/*
 * Send an image using the Send API.
 *
 */
function sendImageMessage(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "image",
        payload: {
          url: "http://messengerdemo.parseapp.com/img/rift.png"
        }
      }
    }
  };

  callSendAPI(messageData);
}

module.exports = sendImageMessage
