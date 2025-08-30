import { sendMessageToGroq } from '../utils/groqClient'

export const handleChatMessage = async (message) => {
  try {
    const response = await sendMessageToGroq(message)
    return { success: true, response }
  } catch (error) {
    console.error('Chat API Error:', error)
    return { 
      success: false, 
      response: "I'm currently experiencing technical difficulties. Please contact us directly at +234 803 092 4734 or emynitemaxglobal24@gmail.com for immediate assistance." 
    }
  }
}