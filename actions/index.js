const sendAudioMessage = require('./send_audio_message')
const sendButtonMessage = require('./send_button_message')
const sendFileMessage = require('./send_file_message')
const sendGenericMessage = require('./send_generic_message')
const sendGifMessage = require('./send_gif_message')
const sendImageMessage = require('./send_image_message')
const sendTextMessage = require('./send_text_message')
const sendVideoMessage = require('./send_video_message')

const sendReadReceipt = require('./send_read_receipt')
const sendQuickReply = require('./send_quick_reply')
const sendReceipt = require('./send_receipt')
const sendTypingOff = require('./send_typing_off')
const sendTypingOn = require('./send_typing_on')

module.exports = {
  sendAudioMessage,
  sendButtonMessage,
  sendFileMessage,
  sendGenericMessage,
  sendGifMessage,
  sendImageMessage,
  sendVideoMessage,
  sendTextMessage,

  sendReadReceipt,
  sendQuickReply,
  sendReceipt,
  sendTypingOff,
  sendTypingOn
}
