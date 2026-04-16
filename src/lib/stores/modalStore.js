import { writable } from "svelte/store";

/**
 * @typedef {Object} ModalState
 * @property {boolean} show
 * @property {import("svelte").Component | null} content
 * @property {Record<string, any>} props
 * @property {HTMLElement | null} trigger
 */

/** @type {import("svelte/store").Writable<ModalState>} */
export const modalStore = writable({
  show: false,
  content: null,
  props: {},
  trigger: null,
});

/**
 * @param {import("svelte").Component} content
 * @param {Record<string, any>} [props]
 */
export const showModal = (content, props = {}) => {
  const trigger =
    typeof document !== "undefined"
      ? /** @type {HTMLElement | null} */ (document.activeElement)
      : null;
  modalStore.set({ show: true, content, props, trigger });
};

export const closeModal = () => {
  modalStore.update((state) => {
    state.trigger?.focus?.();
    return { show: false, content: null, props: {}, trigger: null };
  });
};
