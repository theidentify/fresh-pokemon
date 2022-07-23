/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

import { Pokemon } from '../utils/types.ts';
import AddToList from '../islands/AddToList.tsx';

export default function PokemonCard({
  pokemon,
  allowAdd,
}: {
  pokemon: Pokemon;
  allowAdd?: boolean;
}) {
  return (
    <div class={tw`rounded-xl border-1 p-5`}>
      <div class={tw`text-2xl font-bold mb-2`}>{pokemon.name}</div>
      <img
        src={`https://k2hb4brt.directus.app/assets/${pokemon.image}?access_token=5OTPLNmmpAhWXzjeXQN2ww1wnVfI6xDj`}
      />
      <div class={tw`mt-5 flex`}>
        <a href={`/pokemon/${pokemon.id}`} class={tw`underline flex-grow`}>
          View Details
        </a>
        {allowAdd && <AddToList pokemon={pokemon} />}
      </div>
    </div>
  );
}
