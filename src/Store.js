// src/eventBus.js
import { reactive } from 'vue';

const eventBus = reactive({});

export const emit = (eventName, payload) => {
  if (!eventBus[eventName]) {
    eventBus[eventName] = [];
  }
  eventBus[eventName].forEach(callback => callback(payload));
};

export const on = (eventName, callback) => {
  if (!eventBus[eventName]) {
    eventBus[eventName] = [];
  }
  eventBus[eventName].push(callback);
};

export const off = (eventName, callback) => {
  if (eventBus[eventName]) {
    eventBus[eventName] = eventBus[eventName].filter(cb => cb !== callback);
  }
};
