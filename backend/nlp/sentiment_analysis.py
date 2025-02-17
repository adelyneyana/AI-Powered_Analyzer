from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

def analyze_interview_sentiment(interview_transcript):
    sentiment_score = analyzer.polarity_scores(interview_transcript)
    
    if sentiment_score['compound'] >= 0.05:
        return "Positive sentiment"
    elif sentiment_score['compound'] <= -0.05:
        return "Negative sentiment"
    else:
        return "Neutral sentiment"
