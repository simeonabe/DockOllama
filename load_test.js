import http from 'k6/http';
import { sleep, check } from 'k6';

const BASE_URL = 'http://localhost:8501';  // Adjust if your service is running on a different host/port

export let options = {
  stages: [
    // Ramp-up stage
    { duration: '2m', target: 50 },  // Ramp up to 50 users over 2 minutes
    // Steady state
    { duration: '5m', target: 50 },  // Stay at 50 users for 5 minutes
    // Ramp-down
    { duration: '2m', target: 0 },   // Ramp down to 0 users over 2 minutes

    // Spike test
    { duration: '1m', target: 100 }, // Spike to 100 users over 1 minute
    { duration: '2m', target: 100 }, // Stay at 100 users for 2 minutes
    { duration: '1m', target: 0 },   // Ramp down to 0 users over 1 minute

    // Endurance test
    { duration: '10m', target: 30 }, // Ramp up to 30 users over 10 minutes
    { duration: '30m', target: 30 }, // Stay at 30 users for 30 minutes
    { duration: '5m', target: 0 },   // Ramp down to 0 users over 5 minutes
  ],
};

const PROMPTS = [
  "Tell me a short story",
  "What is the capital of France?",
  "Explain quantum computing",
  "Write a haiku about spring",
  "Describe the taste of an apple"
];

function getRandomPrompt() {
  return PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
}

export default function () {
  // List models
  let modelsResponse = http.get(`${BASE_URL}/`);
  check(modelsResponse, {
    'models page loaded': (r) => r.status === 200,
  });

  sleep(1);

  // Generate text
  let prompt = getRandomPrompt();
  let generateResponse = http.post(`${BASE_URL}/`, {
    prompt: prompt,
    model: 'llama2', // Adjust this if you want to test with different models
  });

  check(generateResponse, {
    'text generated successfully': (r) => r.status === 200,
  });

  sleep(3);  // Wait for 3 seconds between iterations
}