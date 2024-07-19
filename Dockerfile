# Install Python and pip
# Use the official Ollama image as the base
FROM ollama/ollama:latest

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    python3 \
    python3-pip && \
    pip3 install --no-cache-dir streamlit && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY streamlit_app.py .
COPY start.sh .

RUN sed -i 's/\r$//' start.sh && \
    chmod +x start.sh

EXPOSE 8501

ENTRYPOINT ["/bin/bash", "/app/start.sh"]