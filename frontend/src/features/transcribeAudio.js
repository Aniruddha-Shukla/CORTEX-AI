import api from '../../utils/axios'

async function transcribeAudio(audioBlob) {
  try {
    const formData = new FormData()
    formData.append("audio", audioBlob, "recording.webm")
    const { data } = await api.post("/api/agent/transcribe", formData)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export default transcribeAudio
