# AI-Powered Resume & Interview Analyzer

**Description:**  
This project is an AI-powered system that evaluates job applicants by analyzing their resumes and interview sentiment. It uses a fine-tuned BERT model for resume classification, VADER sentiment analysis for interview assessment, and Google Text-to-Speech (TTS) to generate an audio response. The backend is built with Flask and integrates with machine learning models for automated decision-making.

## Table of Contents
1. Prerequisites  
2. Backend Setup (Flask)  
   - Clone Repository  
   - Install Dependencies  
   - Set Up Environment Variables  
   - Run the Flask Server  
3. Model Training & Fine-Tuning  
   - Train the BERT Model for Resume Analysis  
4. API Endpoints & Testing  
   - Testing with Postman/Thunder Client  
5. Push Updates to the Repository

## Prerequisites
Ensure you have the following installed on your system:

- **Python** (v3.8 or higher)
- **pip** (Python package manager)
- **Virtual Environment (venv)**
- **Flask** (for backend API)
  - Install with `pip install flask`
- **Transformers (Hugging Face)**
  - Install with `pip install transformers`
- **Torch (PyTorch for deep learning)**
  - Install with `pip install torch`
- **NLTK & VADER Sentiment Analyzer**
  - Install with `pip install nltk`
- **Google Cloud Text-to-Speech API**
  - Requires authentication JSON key

## Backend Setup (Flask)

### 1. Clone Repository

- Clone the backend repository using:
  ```bash
  git clone https://github.com/yourusername/ai-resume-analysis.git
  cd ai-resume-analysis/backend
  ```

### 2. Install Dependencies

- Create a virtual environment and activate it:
  ```bash
  python -m venv venv
  .\venv\Scripts\activate  # Windows
  source venv/bin/activate  # macOS/Linux
  ```

- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```

### 3. Set Up Environment Variables

- Set your Google Cloud API key path in your system or manually in your script:
  ```bash
  export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account.json"  # macOS/Linux
  set GOOGLE_APPLICATION_CREDENTIALS=C:\Users\Intern\ai_ml_env\backend\your-key.json  # Windows
  ```

### 4. Run the Flask Server

- Start the Flask server:
  ```bash
  python app.py
  ```

- The server will be accessible at `http://127.0.0.1:5000`.

## Model Training & Fine-Tuning

### Train the BERT Model for Resume Analysis
If you haven't trained your BERT model yet, follow these steps:

1. **Prepare a labeled dataset** (e.g., `data/resume_data.csv`) with two columns:
   - `text`: Resume text
   - `label`: 0 (Not Suitable) or 1 (Good Applicant)
2. **Run the training script:**
   ```bash
   python train_bert.py
   ```
3. **The trained model will be saved in:** `bert_resume_classifier/`
4. **Verify that the directory contains:**
   ```
   bert_resume_classifier/
   ├── config.json
   ├── pytorch_model.bin
   ├── tokenizer.json
   ├── vocab.txt
   ├── special_tokens_map.json
   ```

## API Endpoints & Testing

### 1. **Submit Resume & Interview Transcript**
- **Endpoint:** `POST /submit_resume`
- **Request Body:**
  ```json
  {
    "resume_text": "Experienced software developer with expertise in AI and Python.",
    "interview_transcript": "The candidate demonstrated strong technical skills and good communication."
  }
  ```
- **Response:**
  ```json
  {
    "resume_result": "Good applicant",
    "interview_sentiment": "Positive sentiment",
    "final_decision": "Congratulations, you have been selected for the job!",
    "audio_url": "/static/final_decision.mp3"
  }
  ```

### 2. **Testing with Thunder Client (VS Code) or Postman**
1. Install **Thunder Client** extension in VS Code.
2. Open Thunder Client and create a **new POST request**.
3. Set **Request URL** to `http://127.0.0.1:5000/submit_resume`.
4. Choose **Body → JSON**, and paste the sample request.
5. Click **Send** to receive the decision.

## Push Updates to the Repository

Before pushing changes, always pull the latest updates.

### 1. Pull Latest Changes
```bash
  git pull origin main
```

### 2. Push Your Changes
```bash
  git add .
  git commit -m "Updated resume classifier and API improvements"
  git push origin main
```

