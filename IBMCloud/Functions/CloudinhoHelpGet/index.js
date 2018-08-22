/**
  *
  * main() será executado quando você chamar essa ação
  *
  * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
  *
  * @return A saída dessa ação, que deve ser um objeto JSON.
  *
*/

exports.main = async (params) => {
  const watson = require('watson-developer-cloud')

  try {
    const chatBotResponse = await sendChatbotMessage(params)
    return chatBotResponse
  } catch (error) {
    return { error }
  }

  function sendChatbotMessage (params) {
    return new Promise((resolve, reject) => {
      const conversation = watson.conversation({
        url: params.CONVERSATION_URL,
        username: params.CONVERSATION_USERNAME,
        password: params.CONVERSATION_PASSWORD,
        version_date: '2017-04-10',
        version: 'v1'
      })
      const payload = definePayload(params.CONVERSATION_WORKSPACE)
      conversation.message(payload, (error, data) => {
        if (error) return reject(error)
        return resolve({ text: data.output.text, context: data.context })
      })
    })
  }

  function definePayload (workspace_id) {
    return {
      workspace_id,
      input: params.input || { text: '' },
      context: params.context || ''
    }
  }

}
