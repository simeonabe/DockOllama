# DockerOllama

# Ollama Streamlit Service

## Overview
This project implements a Streamlit-based web interface for the Ollama language model service. It provides a user-friendly way to interact with language model through a web browser.

## Architecture
The service consists of the following components:
- Ollama: The core language model service
- Streamlit: A Python library for creating web apps
- Docker: Used for containerization
- Kubernetes: For orchestration and scaling
- AWS EKS: Managed Kubernetes service for deployment or
- another cloud provider i tried this [Render Cloud free](https://simeondockollama.onrender.com)


### Prerequisites
- Python 3.10 or latest
- Docker
- Streamlit
- requirements.txt
- k6 (for load testing) for installation refer to this [k6 Docs](https://grafana.com/docs/k6/latest/)

  
##Testing with HPA
Run your k6 load test again with the HPA in place. Monitor both the k6 output and the HPA status during the test.
with this command k6 run load_test.js

##HPA resource
Target our Ollama deployment
Maintain between 1 and 10 replicas
Scale based on CPU utilization, targeting 50% average utilization

To monitor the HPA:
kubectl get hpa ollama-hpa --watch


# K6 test Baseline Performance Metrics:
1. Response Time:
   - Average: 500ms
   - 90th percentile: 800ms
   - 95th percentile: 1000ms
2. Throughput: 100 requests/second
3. Error Rate: 1.5%


## Docker Local build 

In Docker Use docker build -t ollama-streamlit .  command to build the image.
and docker run -p 8501:8501 ollama-streamlit to view app in [localhost](http://localhost:8501/)

## Push ollama streamlit docker image
gt clone to the cloud providers with their respective manuals and deploy
