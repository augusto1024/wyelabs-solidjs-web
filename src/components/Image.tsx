import { JSX } from 'solid-js/jsx-runtime';
import LogoSquare from '../assets/logo-square.png';
import OldManSmiling from '../assets/old-man-smiling.png';
import OldManMad from '../assets/old-man-mad.png';
import { createEffect, createSignal, Show } from 'solid-js';

interface ImageProps {
  url: string | null | undefined;
}

export const Image = (props: ImageProps): JSX.Element => {
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal(false);

  createEffect(() => {
    if (props.url === undefined) {
      setLoading(true);
    } else if (props.url === null) {
      setLoading(false);
    }
  });

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    handleLoad();
    setError(true);
  };

  return (
    <div class="image-container">
      <Show when={props.url}>
        <img
          classList={{ hidden: loading() || error() }}
          onLoad={handleLoad}
          onError={handleError}
          src={props.url as string}
        />
        <Show when={!(loading() || error())}>
          <p>Quién soy?</p>
        </Show>
      </Show>
      <Show when={loading()}>
        <img src={LogoSquare} />
        <p>Cargando...</p>
      </Show>
      <Show when={props.url === null}>
        <img src={OldManMad} onLoad={handleLoad} />
        <p>Quién es el ortiva que no tiene foto en Notion?</p>
      </Show>
      <Show when={error()}>
        <img src={OldManSmiling} />
        <p>Esto no tenía que pasar</p>
      </Show>
    </div>
  );
};
