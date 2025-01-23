import React, { useState } from 'react'
    import OpenAI from 'openai'

    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    })

    function App() {
      const [topic, setTopic] = useState('')
      const [questions, setQuestions] = useState([])
      const [loading, setLoading] = useState(false)

      const generateQuiz = async () => {
        if (!topic.trim()) return
        setLoading(true)
        
        try {
          const completion = await openai.chat.completions.create({
            messages: [
              {
                role: 'system',
                content: 'You are a helpful quiz generator. Generate 5 multiple choice questions about the given topic.'
              },
              {
                role: 'user',
                content: `Generate quiz questions about: ${topic}`
              }
            ],
            model: 'gpt-4-0125-preview'
          })

          const generatedQuestions = completion.choices[0].message.content
          setQuestions(generatedQuestions.split('\n').filter(q => q.trim()))
        } catch (error) {
          console.error('Error generating quiz:', error)
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="container">
          <h1>Quiz Generator</h1>
          <div className="quiz-form">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a topic..."
            />
            <button onClick={generateQuiz} disabled={loading}>
              {loading ? 'Generating...' : 'Generate Quiz'}
            </button>
          </div>

          <div className="quiz-results">
            {questions.map((question, index) => (
              <div key={index} className="quiz-card">
                <p>{question}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    export default App
