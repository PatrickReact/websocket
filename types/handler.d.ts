import type { Next } from 'hono';
import type { BlankEnv, BlankInput, MiddlewareHandler } from 'hono/types';

export type Handler<T = string> = MiddlewareHandler<BlankEnv, T, BlankInput>;
