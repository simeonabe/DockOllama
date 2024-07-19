# DockerOllama

# Ollama Streamlit Service

## Overview
This project implements a Streamlit-based web interface for the Ollama language model service. It provides a user-friendly way to interact with various language models through a web browser.

## Architecture
The service consists of the following components:
- Ollama: The core language model service
- Streamlit: A Python library for creating web apps
- Docker: Used for containerization
- Kubernetes: For orchestration and scaling
- AWS EKS: Managed Kubernetes service for deployment or
- another cloud provider


### Prerequisites
- Python 3.10 or latest
- Docker
- Streamlit
- k6 (for load testing) for installation refer to this [k6 Docs](https://grafana.com/docs/k6/latest/)

# K6 test Baseline Performance Metrics:
1. Response Time:
   - Average: 500ms
   - 90th percentile: 800ms
   - 95th percentile: 1000ms
2. Throughput: 100 requests/second
3. Error Rate: 1.5%
