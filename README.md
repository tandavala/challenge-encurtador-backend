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
