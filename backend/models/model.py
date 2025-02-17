def combine_results(resume_result, interview_sentiment):
    if resume_result == "Good applicant" and interview_sentiment == "Positive sentiment":
        return "Congratulations, you have been selected for the job!"
    elif resume_result == "Not suitable" or interview_sentiment == "Negative sentiment":
        return "Sorry, you have not been selected."
    else:
        return "We need further review before making a final decision."
