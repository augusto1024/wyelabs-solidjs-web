import { createResource } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Image, Options } from '.';
import { fetchPeople } from '../utils/requests';

export const Game = (): JSX.Element => {
  const [data, { refetch }] = createResource<Person[]>(fetchPeople);

  return (
    <div class="game">
      <Image />
      <Options />
      <button onClick={refetch} disabled={data.loading} class="primary">
        Obtener WyeWorker al azar
      </button>
    </div>
  );
};
