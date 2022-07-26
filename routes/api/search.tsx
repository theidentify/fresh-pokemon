import { HandlerContext } from '$fresh/server.ts';
import { DB, TOKEN } from '../../utils/env.ts';

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
  const url = new URL(req.url);
  const query = url.searchParams.get('q') || '';
  const filter = query.length
    ? `&filter[name][_contains]=${encodeURIComponent(query)}`
    : '';
  const pokemon = await fetch(
    `https://${DB}.directus.app/items/pokemon?access_token=${TOKEN}&limit=9${filter}`
  ).then((res) => res.json());
  if (!pokemon) {
    return new Response('Pokemon search failed', { status: 404 });
  }
  return new Response(JSON.stringify(pokemon.data))
};
