# Processo Seletivo - 2025
Esse é o meu repositório para a API do backend do processo seletivo 2025 da Seals Solutions.

# Instruções
Use o comando:
```bash
$ npm install
```
Para instalar as dependências do projeto. Após, isso, use o comando:
```bash
$ npm run start:dev
```
Para rodar a aplicação.

# Desafio Técnico 
## Entidades
As entidades envolvidas neste desafio técnico conectam DUV (Documento Único Virtual) que configura uma viagem de uma embarcação, os navios atrelados à viagem e passageiros.

### DUV
Em uma DUV estão contidas as informações de uma viagem de um navio, incluindo os passageiros e tripulantes que embarcaram nessa viagem, que pode ser estruturada da seguinte forma:

- Id
- Número da DUV
- Data da viagem
- Navio 
- Lista de Passageiros

### Navio
Em uma DUV, o navio é o meio de transporte utilizado na viagem, que pode ser estruturado da seguinte forma:

- Id
- Nome
- Bandeira
- Imagem

### Passageiro
Em uma DUV, o passageiro é a pessoa que embarca na viagem, que pode ser estruturada da seguinte forma:

- Id
- Nome
- Tipo: 
  - Passageiro
  - Tripulante -> é caracterizado pela existência de um documento chamado SID (Seafarers' Identity Document)
- Nacionalidade
- Foto