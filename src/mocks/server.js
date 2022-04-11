import { setupServer } from 'msw/node';
import { handers } from './handers';

export const server = setupServer(...handers);
