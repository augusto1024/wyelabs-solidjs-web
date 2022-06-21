import { createEffect, createResource, createSignal } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Image, Options } from '.';
import { fetchPeople } from '../utils/requests';

export const Game = (): JSX.Element => {
  const [data, { refetch }] = createResource<Person[]>(fetchPeople);
  const [selectedPerson, setSelectedPerson] = createSignal<Person>();

  createEffect(() => {
    const people = data();

    if (data.loading || !people) {
      setSelectedPerson(undefined);
    } else {
      const index = Math.floor(Math.random() * (people.length - 1));
      setSelectedPerson(people[index]);
    }
  });

  const handlePersonSelection = (person: Person): boolean =>
    person === selectedPerson();

  return (
    <div class="game">
      <Image />
      <Options
        people={data.loading ? [] : (data() as Person[])}
        onSelection={handlePersonSelection}
      />
      <button onClick={refetch} disabled={data.loading} class="primary">
        Obtener WyeWorker al azar
      </button>
    </div>
  );
};
