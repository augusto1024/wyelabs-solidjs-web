import { createEffect, createResource, createSignal } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Image, Options } from '.';
import { fetchPeople } from '../utils/requests';

export const Game = (): JSX.Element => {
  const [data, { refetch }] = createResource<Person[]>(fetchPeople);
  const [selectedPerson, setSelectedPerson] = createSignal<Person>();

  const [imageLoaded, setImageLoaded] = createSignal(false);

  const loading = () => data.loading || !imageLoaded();

  createEffect(() => {
    const people = data();

    if (data.loading || !people) {
      setSelectedPerson(undefined);
      setImageLoaded(false);
    } else {
      const index = Math.floor(Math.random() * (people.length - 1));
      setSelectedPerson(people[index]);
    }
  });

  const handlePersonSelection = (person: Person): boolean =>
    person === selectedPerson();

  return (
    <div class="game">
      <Image
        onLoad={() => setImageLoaded(true)}
        url={selectedPerson()?.imageUrl}
      />
      <Options
        people={loading() ? [] : (data() as Person[])}
        onSelection={handlePersonSelection}
      />
      <button onClick={refetch} disabled={loading()} class="primary">
        Obtener WyeWorker al azar
      </button>
    </div>
  );
};
