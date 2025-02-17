import React, { useState } from "react";

const UploadForm = ({ onSubmit }) => {
  const [resumeText, setResumeText] = useState("");
  const [interviewTranscript, setInterviewTranscript] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeText.trim() || !interviewTranscript.trim()) {
      alert("Both fields are required!");
      return;
    }
    onSubmit(resumeText, interviewTranscript);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="resumeText"><strong>Resume Text:</strong></label>
          <textarea
            id="resumeText"
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows="5"
            cols="50"
            style={{ width: "100%", padding: "5px", marginTop: "5px" }}
          ></textarea>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="interviewTranscript"><strong>Interview Transcript:</strong></label>
          <textarea
            id="interviewTranscript"
            value={interviewTranscript}
            onChange={(e) => setInterviewTranscript(e.target.value)}
            rows="5"
            cols="50"
            style={{ width: "100%", padding: "5px", marginTop: "5px" }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
