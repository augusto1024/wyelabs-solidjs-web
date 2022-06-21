import { Show, For, createSignal } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

interface OptionsProps {
  people: Person[];
  onSelection: (person: Person) => boolean;
}

type Selection = {
  correct: boolean;
  person?: Person;
};

export const Options = (props: OptionsProps): JSX.Element => {
  const [selection, setSelection] = createSignal<Selection>({ correct: false });

  const handleSelection = (person: Person): void => {
    const correct = props.onSelection(person);
    setSelection({
      person,
      correct,
    });
  };

  return (
    <div class="options">
      <Show when={props.people.length}>
        <For each={props.people}>
          {(person) => (
            <button
              classList={{
                correct: selection().person === person && selection().correct,
                wrong: selection().person === person && !selection().correct,
              }}
              onClick={() => handleSelection(person)}
              class="secondary"
            >
              {person.name}
            </button>
          )}
        </For>
      </Show>
      <Show when={!props.people.length}>
        <For each={[1, 2, 3, 4]}>
          {() => (
            <button disabled>
              <div>Cargando...</div>
            </button>
          )}
        </For>
      </Show>
    </div>
  );
};
