module.exports = async function (context, req) {
  const watson = require('watson-developer-cloud')

  try {
    const chatBotResponse = await sendChatbotMessage()
    context.res = {
      body: chatBotResponse
    }
  } catch (error) {
    context.res = {
      status: 400,
      body: error.message
    }
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
      input: req.body.input || { text: '' },
      context: req.body.context || {}
    }
  }
}
