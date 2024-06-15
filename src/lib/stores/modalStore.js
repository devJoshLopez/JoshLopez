import { writable } from "svelte/store";

export const modalStore = writable({
  show: false,
  content: null,
  props: {},
});

export const showModal = (/** @type {any} */ content, props = {}) => {
  modalStore.set({
    show: true,
    content,
    props,
  });
};

export const closeModal = () => {
  modalStore.set({
    show: false,
    content: null,
    props: {},
  });
};
