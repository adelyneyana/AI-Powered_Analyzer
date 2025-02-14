import React, { useState } from "react";
import axios from "axios";
import UploadForm from "./components/UploadForm";

const App = () => {
  const [finalDecision, setFinalDecision] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  // Handle form submission
  const handleFormSubmit = async (resumeText, interviewTranscript) => {
    try {
      const response = await axios.post("http://localhost:5000/submit_resume", {
        resume_text: resumeText,
        interview_transcript: interviewTranscript,
      });

      // Handle the final decision response
      setFinalDecision(response.data.final_decision);

      // Set the audio URL for playing
      setAudioUrl("http://localhost:5000/static/final_decision.mp3");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="App">
      <h1>AI-powered Resume and Interview Analysis</h1>
      <UploadForm onSubmit={handleFormSubmit} />

      {finalDecision && (
        <div>
          <h3>Final Decision:</h3>
          <p>{finalDecision}</p>
          <audio controls>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default App;
