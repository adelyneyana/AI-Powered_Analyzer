import os

def synthesize_speech(text):
    from google.cloud import texttospeech

    client = texttospeech.TextToSpeechClient()
    input_text = texttospeech.SynthesisInput(text=text)
    voice = texttospeech.VoiceSelectionParams(
        language_code="en-US", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    response = client.synthesize_speech(
        input=input_text, voice=voice, audio_config=audio_config
    )

    # Ensure the 'static' directory exists
    if not os.path.exists("static"):
        os.makedirs("static")

    filename = "final_decision.mp3"
    with open(f"static/{filename}", "wb") as out:
        out.write(response.audio_content)

    return f"static/{filename}"
