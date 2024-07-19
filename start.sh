#!/bin/bash

# Start Ollama server
ollama serve &

# Wait for Ollama server to start
sleep 5

# Pull the default model (adjust as needed)
ollama pull llama2

# Start the Streamlit app
streamlit run streamlit_app.py