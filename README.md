# Nuxt Pokédex

Projeto de pokedex utilizando o scafolding do [Nuxt 3](https://nuxt.new/) com base no mocks da pokedex [Figma](https://www.figma.com/community/file/979132880663340794)
utilizando a [Pokeapi](https://pokeapi.co/) para obter os dados dos pokémons

## Atenção: Para executar esse projeto é necessário a versão 18.0.0 ou mais recente do NodeJs

### Instruções para execução

##### Download do projeto e instalação das dependências

```bash
$ git clone https://github.com/tvmota/nuxt-pokedex.git
$ cd nuxt-pokedex
#----------Execução_Com_NPM---------
$ npm i
#----------Execução_Com_YARN---------
$ yarn
```

##### Execução do servidor de desenvolvimento

```bash
#----------Navegar para dentro da pasta do projeto---------
$ cd nuxt-pokedex
#----------Execução_Com_NPM---------
$ npm run dev
#----------Execução_Com_YARN---------
$ yarn dev
```

Após executar o comando será possível acessar o projeto no browser no endereço: [http://localhost:3000/](http://localhost:3000/)

##### Geração do build para deploy ou preview(localhost)

```bash
#----------Navegar para dentro da pasta do projeto---------
$ cd nuxt-pokedex
#----------Execução_Com_NPM---------
$ npm run build
#----------Execução_Com_YARN---------
$ yarn build
```

##### Preview da versão de produção em um server local (Este passo deve ser executado após a execução do build)

```bash
#----------Navegar para dentro da pasta do projeto---------
$ cd nuxt-pokedex
#----------Execução_Com_NPM---------
$ npm run preview
#----------Execução_Com_YARN---------
$ yarn preview
```

### Libs utilizadas

- **Framework SSR**: [Nuxt](https://nuxt.com/).
- **Pré-processador CSS**: [Sass](https://sass-lang.com//).
- **State Management**: [Pinia](https://pinia.vuejs.org/).
- **Internacionalização**: [vue-I18n](https://vue-i18n.intlify.dev/).

