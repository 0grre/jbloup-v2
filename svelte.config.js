import preprocess from "svelte-preprocess";
import switchCase from 'svelte-switch-case';
export default {
  preprocess: [
    preprocess({
      postcss: true,
    }),
    switchCase()
  ],
}
