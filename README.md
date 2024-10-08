# Padrões Técnicos

- ``yarn init -y``
- ``yarn add express``
- ``yarn add ts-node-dev -D``: Permite atualizar de forma automática ambiente local a cada alteração, sem necessidade de reiniciar o servidor.
  * package.json:
    ``"scripts": {
      "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
    }``

- ``yarn add uuid``: Permite a criação de id's.

- ``yarn add multer``: Permite fazer upload e leitura de arquivos
- ``yarn add @types/multer -D``: tipagens para o multer
- ``yarn add csv-parse``: Permite a leitura do arquivo de forma mais gradativa (linha por linha) no exemplo com csv
- ``yarn add @types/csv-parse -D``: tipagens para o csv-parse
- ``yarn add swagger-ui-express``: Biblioteca para fazer documentação das rotas
- ``yarn add @types/swagger-ui-express``: tipagens para o swagger-ui-express (Biblioteca para fazer documentação)


# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possivel listar todas as categorias.

**RN**
Não deve ser possivel cadastrar um carro com uma placa ja existente.
Não deve ser possivel alterar a placa de um carro ja cadastrado.
O carro deve ser cadastrado com disponibilidade por padrão.
O Usuario responsavel pelo cadastro deve ser um usuario administrador.


# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria.
Deve ser possivel listar todos os carros disponiveis pelo nome da marca.
Deve ser possivel listar todos os carros disponiveis pelo nome do carro.


**RN**
O usuario não precisa estar logado no sistema.


# Cadastro de Especificação no carro

**RF**
Deve ser possivel cadastrar uma especificação para um carro.
Deve ser possivel listar todas as especificações.
Deve ser possivel lsistar todos os carros.


**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação ja existente para o mesmo carro.
O Usuario responsavel pelo cadastro deve ser um usuario administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possivel listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.
O Usuario responsavel pelo cadastro deve ser um usuario administrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel.

**RNF**


**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possviel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario.
Não deve ser possviel cadastrar um novo aluguel casa ja exista um aberto para o mesmo carro.
