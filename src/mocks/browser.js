// src/mocks/browser.js
import { setupWorker } from 'msw';
import { handers } from './handers';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handers);
