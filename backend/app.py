from flask import Flask, request, jsonify
from nlp.resume_analysis import analyze_resume
from nlp.sentiment_analysis import analyze_interview_sentiment
from models.model import combine_results  
from speech.text_to_speech import synthesize_speech
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "C:\\Users\\Intern\\ai_ml_env\\backend\\spry-effect-450807-v7-8d79c1cc7c49.json"

app = Flask(__name__)

@app.route('/submit_resume', methods=['POST'])
def submit_resume():
    data = request.json
    resume_text = data.get('resume_text', '')
    interview_transcript = data.get('interview_transcript', '')

    resume_result = analyze_resume(resume_text)
    interview_sentiment = analyze_interview_sentiment(interview_transcript)
    final_decision = combine_results(resume_result, interview_sentiment)

    audio_file = synthesize_speech(final_decision)

    return jsonify({
        "resume_result": resume_result,
        "interview_sentiment": interview_sentiment,
        "final_decision": final_decision,
        "audio_url": f"/static/{audio_file}"
    })

if __name__ == "__main__":
    app.run(debug=True)
