import router, { routes } from '../router';

export default (store) => {
  store.subscribe((mutation, state) => {
    const { type } = mutation;
    if (type === 'updateIndex') {
      const { path } = routes[state.index];
      router.push(path);
    }
  });
  window.addEventListener('keydown', ({ keyCode }) => {
    if (keyCode === 37 || keyCode === 38) {
      store.commit('updateIndex', -1);
    } else if (keyCode === 39 || keyCode === 40) {
      store.commit('updateIndex', 1);
    }
  });
};

