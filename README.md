# Processo Seletivo - 2025
Esse é o meu repositório para a API do backend do processo seletivo 2025 da Seals Solutions.

# Instruções

1. Para instalar as dependências do projeto, use o comando:
```bash
$ npm install
```

2. Crie um arquivo .env exatamente como aquele do .env.example. Uso a porta 443, mas caso queira, pode mudar.

3. Gere apropriadamente o schema Prisma para o BD. Use o comando: 
```bash
$ npx prisma generate
```

4. Para rodar a API localmente, use o comando:
```bash
$ npm run start:dev
```

Caso queira ver a documentação da API, estou utilizando Swagger, por isso, acesse http://localhost:443/api ou substitua 443 pela porta que inseriu.

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