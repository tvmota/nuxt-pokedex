import ptBr from './locales/pt-br.json';

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'ptBr',
    messages: {
      ptBr,
    },
  };
});
