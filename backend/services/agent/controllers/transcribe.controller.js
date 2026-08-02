import axios from "axios"
import fs from "fs"
import FormData from "form-data"

export const transcribe = async (req, res) => {
    const file = req.file
    try {
        if (!file) {
            return res.status(400).json({ message: "No audio file received." })
        }

        const formData = new FormData()
        formData.append("file", fs.createReadStream(file.path), file.originalname)
        formData.append("model", "whisper-large-v3-turbo")

        const groqResponse = await axios.post(
            "https://api.groq.com/openai/v1/audio/transcriptions",
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`
                }
            }
        )

        return res.status(200).json({ text: groqResponse.data?.text || "" })

    } catch (error) {
        console.log("transcribe error", error?.response?.data || error.message)
        return res.status(500).json({ message: `transcribe error ${error}` })
    } finally {
        if (file?.path) {
            fs.unlink(file.path, () => {})
        }
    }
}
