import { useState, useCallback } from 'react'
import { sendMessageToGroq } from '../utils/groqClient'

export const useGroqChat = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendMessage = useCallback(async (message) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await sendMessageToGroq(message)
      return response
    } catch (err) {
      setError(err.message)
      return "I'm currently experiencing technical difficulties. Please contact us directly at +234 803 092 4734 or emynitemaxglobal24@gmail.com for immediate assistance."
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { sendMessage, isLoading, error }
}