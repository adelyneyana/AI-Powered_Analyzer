from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Load pre-trained model and tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForSequenceClassification.from_pretrained("bert-base-uncased")

def analyze_resume(resume_text):
    inputs = tokenizer(resume_text, return_tensors="pt", truncation=True, padding=True)
    with torch.no_grad():
        outputs = model(**inputs)
    logits = outputs.logits
    predicted_class = torch.argmax(logits, dim=1).item()
    
    # 0 for not good, 1 for good
    if predicted_class == 1:
        return "Good applicant"
    else:
        return "Not suitable"