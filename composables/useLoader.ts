const visible = ref(false);

export function useLoader() {
  function setVisible() {
    visible.value = true;
  }

  function setInvisible() {
    visible.value = false;
  }

  return { visible, setInvisible, setVisible };
}
