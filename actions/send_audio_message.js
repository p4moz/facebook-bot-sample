const callSendAPI = require('../api')
/*
 * Send audio using the Send API.
 *
 */
function sendAudioMessage(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "audio",
        payload: {
          url: "http://messengerdemo.parseapp.com/audio/sample.mp3"
        }
      }
    }
  };

  callSendAPI(messageData);
}

module.exports = sendAudioMessage
