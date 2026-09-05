import type { APIRoute } from 'astro';
import { auth } from '../../../auth/index';

export const prerender = false;

const GET: APIRoute = (ctx) => auth.handler(ctx.request);
const POST: APIRoute = (ctx) => auth.handler(ctx.request);

export { GET, POST };