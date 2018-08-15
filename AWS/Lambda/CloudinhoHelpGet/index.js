exports.handler = async (event, context, callback) => {
  const watson = require('watson-developer-cloud')

  try {
    const chatBotResponse = await sendChatbotMessage()
    return callback(null, chatBotResponse)
  } catch (error) {
    return callback(error)
  }

  function sendChatbotMessage () {
    return new Promise((resolve, reject) => {
      const conversation = watson.conversation({
        url: process.env.CONVERSATION_URL,
        username: process.env.CONVERSATION_USERNAME,
        password: process.env.CONVERSATION_PASSWORD,
        version_date: '2017-04-10',
        version: 'v1'
      })

      const params = defineParams()
      conversation.message(params, (error, data) => {
        if (error) return reject(error)
        return resolve({ text: data.output.text, context: data.context })
      })
    })
  }

  function defineParams () {
    return {
      workspace_id: process.env.CONVERSATION_WORKSPACE,
      input: event['body-json'].input || { text: '' },
      context: event['body-json'].context || ''
    }
  }
}
