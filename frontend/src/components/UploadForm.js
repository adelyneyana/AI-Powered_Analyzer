import React, { useState } from "react";

const UploadForm = ({ onSubmit }) => {
  const [resumeText, setResumeText] = useState("");
  const [interviewTranscript, setInterviewTranscript] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(resumeText, interviewTranscript);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resumeText">Resume Text:</label>
        <textarea
          id="resumeText"
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          rows="5"
          cols="50"
        ></textarea>
      </div>
      <div>
        <label htmlFor="interviewTranscript">Interview Transcript:</label>
        <textarea
          id="interviewTranscript"
          value={interviewTranscript}
          onChange={(e) => setInterviewTranscript(e.target.value)}
          rows="5"
          cols="50"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadForm;
