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
- [x] Os usuários devem opcionalmente, ser capazes de escolher um periódo de expiração [2 minutos, um dia, uma semana, um mês].

## Documentação

Quando rodamos o projecto em ambiente de produção temos acesso a documentação da api conforme o link abaixo:

```
{base_url}/doc

```

## Resito não functionais

- [x] Limitar as solicitações de API.
- [x] Contenerizar aplicação
- [x] Eliminar automaticamente as url expiradas
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
cd challenge-encurtador-backend
```

### Rodando o sistema

Quero lembra - lo que o projecto tem dois ambientes de execução:

- Ambiente de desenvolvimente
- Ambiente de produção

### Ambiente de desenvolvimento

Para rodar o projecto na máquina local certifica que tens o docker e o docker compose configurado, depois disso executa na raiz do projecto o seguinte comando:

```
docker-compose -f dev-docker-compose.yml up
```

### Ambiente de desenvolvimento

O ambiente de produção pode ser implementado em qualquer cloud que suporta docker, e o comando reponsavel na execução do projecto nas nuvens é o seguinte:

```
docker-compose -f prod-docker-compose.yml up
```

### Documentação

Para acessar a documentação da api use o link abaixa:

```
{base_url}/doc
```

### Adminer

Adminer é uma aplicação cliente para gestão de base de dados, no ambiente de desenvolvimento temos acesso a base de dados via Adminer, depois de executares podes acessar o adminer:

link: locahost:8080

|          |                               |
| -------- | :---------------------------: |
| System   |          PostGreSQL           |
| Server   | challenge-encurtador_postgres |
| Username |           postgres            |
| Password |           postgres            |
| Database |          encurtador           |
