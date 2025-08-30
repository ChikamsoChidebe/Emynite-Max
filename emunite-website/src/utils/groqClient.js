import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
})

const COMPANY_CONTEXT = `
You are Emynite Max AI assistant. Give SHORT, DIRECT answers only.

COMPANY: Emynite Max Global Enterprise (Lagos, Nigeria)
CONTACT: +234 803 092 4734, emynitemaxglobal24@gmail.com

SERVICES:
• REAL ESTATE: Properties ₦70M-₦550M (Amuwo, Omole)
• AUTOMOBILES: New/used cars, import, financing
• AGRICULTURE: Cocoa, ginger, garlic export
• IMPORT/EXPORT: Global trade solutions
• CONSTRUCTION: Building materials, project management
• MINING: Cassiterite operations

KEY PROPERTIES:
• 7-bedroom duplex: ₦350M (Amuwo)
• 5-bedroom + BQ: ₦380M (Amuwo)
• 3-bedroom flat: ₦70M (Iponri)

HOURS: Mon-Fri 8AM-6PM, Sat 9AM-4PM

Keep responses under 50 words. Direct complex queries to phone/WhatsApp.
`

export const sendMessageToGroq = async (message) => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: COMPANY_CONTEXT
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "llama3-8b-8192",
      temperature: 0.7,
      max_tokens: 150,
    })

    return completion.choices[0]?.message?.content || "I'm sorry, I couldn't process your request."
  } catch (error) {
    console.error('Groq API Error:', error)
    throw error
  }
}

export default groq