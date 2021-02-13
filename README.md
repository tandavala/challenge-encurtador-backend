<p align="center">
    <img src="./image001.gif" width="120"  alg="Wiser Educação logo" />
</p>

# challange encurtador backend

o Challange encurtador Backend, este é um desafio da wiser edução a ideia é desenvolver uma API que irá receber como parâmtro uma URL que deverá ser encurtada. A URL encurtado deve conter entre 5 a 10 catacteres e apenas letras e números. 5

## Requisitos functionais

- [ ] Dado uma URL como parâmetro, devemos obter uma URL única curta e aleatório.
- [ ] Dado uma encurtada, os usuários devem ser redirecionados para o URL original
- [ ] Os usuários devem ter a optção de poder escolher um link personalizado
- [ ] Os usuários devem, opcionalmente, ser capazes de escolher uma data de expiração.

- [ ] a novo url curta de ter a possibilidade de ter data de validade
- [ ] precisamos de coletar estatisticas ex: numeros de cliques.
- [ ] alem de saber o numeros de cliques tambem queremos saber os despositivos dos usuarios

## Resito não functionais

- [ ] O sistema deve estar altamente disponível. Cada vez que acessamos a URL curta, devemos redirecionar para a página original
- [ ] O sistema deve funcionar com latência mínima. A geração de pequenos URLs e o redirecionamento devem ser rápidos
- [ ] O sistema deve ser escalonável, ele deve lidar com a quantidade crescente de criação de URL e solicitações de leitura.
- [ ] Devemos saber quantas vezes o link foi acessado
