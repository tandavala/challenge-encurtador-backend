<p align="center">
    <img src="./image001.gif" width="120"  alg="Wiser Educação logo" />
</p>

# challange encurtador backend

Challenge encurtador Backend é um desafio da wiser educação a ideia é desenvolver uma API que irá receber como parâmetro uma URL que deverá ser encurtada. A URL encurtada deve aceitar o mínimo de 5 e o máximo de 10 caracteres e a URL deve apenas conter letras minúsculas.

## Especificação da API

Este aplicativo segue as especificações da API definidas pela equipe [Thinkster](https://github.com/gothinkster) . Isso ajuda a misturar e combinar qualquer back-end com qualquer outro front-end sem conflitos

> [Especificação completa](https://github.com/gothinkster/realworld/tree/master/api)

## Requisitos functionais

- [x] Dado uma URL como parâmetro, devemos obter uma URL única curta e aleatória.
- [x] Dado uma URL encurtada, os usuários devem ser redirecionados para o URL original.
- [x] Os usuários devem ter a opção de poder escolher um link personalizado.
- [ ] Os usuários devem, opcionalmente, ser capazes de escolher uma data de expiração.
- [ ] O usario poder fazer login via gmail
- [ ] A nova url curta deve ter a possibilidade de ter data de expiração.

## Resito não functionais

- [x] Limitar as solicitações de API.
- [x] Limitar o usuario de encurtar o nosso dominio
- [x] Contenerizar aplicação
- [ ] Só poderá eliminar uma url o usuário que criou a url.
- [ ] O sistema deve estar altamente disponível. Quando um usuário usar a URL curta, deve ser redirecionado para a página original
- [ ] O sistema deve funcionar com latência mínima. A geração de pequenos URLs e o redirecionamento devem ser rápidos
- [ ] O sistema deve ser escalável, ele deve lidar com a quantidade crescente de criação de URL e solicitações de leitura.
- [ ] Devemos saber quantas vezes o link foi acessado

- [ ] alem de saber o numeros de cliques tambem queremos saber os despositivos dos usuarios

# Instruções para rodar o sistema

Para reproduzir este projecto segui - se os passos:

### clonando o projecto

Com o Git instalado na sua maquina e a URL do projeto em mãos, cria em algum lugar do seu pc uma pasta para criarmos uma copia do repositório, dentro dela abra o terminal e digite os comandos abaixo:

```
git clone https://github.com/tandavala/challenge-encurtador-backend.git
cd
```

### Rodando o sistema

Temos duas formas principais de rodar esse projecto.

- Podemos rodar esse projecto como uma aplicação normal Nodejs, mais esse não é o foco principal. Basicamente nesse passo é instalar as dependencias e renomear o arquivo `.env.sample` para `.env`, tenha certeze que tens PostgreSQL instalado em sua maquina, informar os dados de acesso a base de dado no arqui .env executar o command `npm install` e posteriomente `npm run start:dev`, que estaras pronto para testar o sistema.

- A segundo forma de rodar o projecto é usando o [Docker](https://www.docker.com/), antes deixa esclarever como configurei o docker no projecto. Este projecto conta com tres ficheiros docker.

1. O primeiro ficheiro docker será usado em produção
2. O Segundo ficheiro docker será usado em desenvolvimento
3. O terceiro ficheiro Docker será usado em produção.

Quero lembra - lo que cada fechiro docker conta com um ficheiro docker-compose por exemple o ficher docker para teste lhe chamei de `Dockerfile-test` e o seu Docker compose lhe chamai de `test-docker-compose.yml` assim segui a logica com os outros ficheiros com os prefixos de `dev` e `prod`.

### Rodando os container

Para rodar os contaier seguise - se o comanda:

```
docker-compose -f prod-docker-compose.yml up --build
```

A mesma logica se aplica para os dois ambientes, lembrando que para executar esse comando com sucesso precisamos estar na raiz do projecto. Mas queria destacar aqui o Dockerfile de teste o meu foco principal para esse ficheiro é para rodas os testes quando mandamos novo codigo no repositorio no final o github actions criar uma imagem da aplicação e manda para o Dockerhub.
