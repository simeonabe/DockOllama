import streamlit as st
import subprocess
import json

def run_ollama_command(command):
    try:
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        st.error(f"Ollama error: {e.stderr}")
        return None

def list_models():
    output = run_ollama_command(["ollama", "list"])
    if output:
        models = [line.split()[0] for line in output.split('\n')[1:]]
        return models
    return []

def generate_text(prompt, model):
    output = run_ollama_command(["ollama", "run", model, prompt])
    return output

st.title("Ollama Text Generation")

# Model selection
models = list_models()
if models:
    selected_model = st.selectbox("Select a model", models)
else:
    st.warning("No models available. Please check Ollama installation.")
    selected_model = None

# Text input
prompt = st.text_area("Enter your prompt")

# Generate button
if st.button("Generate") and selected_model:
    if prompt:
        with st.spinner("Generating text..."):
            generated_text = generate_text(prompt, selected_model)
            if generated_text:
                st.text_area("Generated Text", generated_text, height=300)
    else:
        st.warning("Please enter a prompt.")

# Display available models
st.sidebar.header("Available Models")
st.sidebar.write(models)
