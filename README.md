const ecomm = `
# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura

## I. Codebase
O código-fonte da aplicação está armazenado em um repositório Git, logo, existe um gerenciamento de versão.

## II. Dependencies
Todas as dependências do aplicativo estão gerenciadas e explicitamente declaradas nos arquivos package.json e dockerCompose

## III. Config
Todas as variáveis de ambientes importantes ou que tem ligação com a segurança do projeto estão contidas em no documento .env que por sua vez não está listado no git, logo, não apresenta risco de vazamento por esse caminho

## IV. Backing services
Os serviços de apoio, nessa aplicação, banco de dados, estão anexados por meio URL ou credenciais de fácil alteração. No entanto, é utilizados códigos específicos de busca/escrita para cada “linguagem” do banco de dados

## V. Build, release, run
A aplicação ainda não tem uma release, logo não tem a divisão recomendado pelos fatores 

## VI. Processes
Qualquer informação necessária é armazenada nos “backing services”, logo essa aplicação não armazena estados

## VII. Port binding
Os serviços da aplicação, como, cadastro, busca apagar, etc, estão vinculadas a portas e são feitas por requisições HTTP

## VIII. Concurrency
Como não existe dependência entre serviços, esse fator está atendido.

## IX. Disposability
Esse fator está atendido, pois a execução é realizada em Docker (deve ser feito um ajuste para ser 100% em Docker, mas conceito é o mesmo)

## X. Dev/prod parity
O projeto ainda não tem um ambiente de produção, mas com poucos ajustes em suas dependências,  ele poderá ser igual ao dev

## XI. Logs
Os logs mais importantes são gerados no terminal, e todas as mensagens direcionadas aos usuários são entregues no body da resposta 

## XII. Admin processes
Tarefas de administração nos processos ainda são feitos de forma manuais, logo esse fator não é respeitado

### Serviços de domínio
Esse padrão é utilizado visto que, temos três serviços diferentes, account, finance e product, cada um com sua lógica de negócio. 

### Serviços de negócio
Não existe um serviço de negócio estipulado nessa aplicação, visto que, não existe uma conexão via código e regras entre um domínio e outro, no entanto, caso a aplicação fosse para release seria extremante necessário, visto que um pedido deve ser feito por um cliente e assim comprar um produto que tem uma categoria. 

### API Gateway
Um ponto único de aplicação ainda não foi implementado, utilizando uma porta para cada domínio 

### Agregador de processos
Como não utilizamos um agregador de negócios, também não usamos um agregador de processos 

### Edge servisse
Esse padrão não foi utilizado, já que, não existe um gateway para cada cliente 

### Single database vs Bancos diferentes
Bancos diferentes foram utilizados para cada serviço diferente 

### Eventos assíncronos
Esse padrão foi utilizado nos serviços da aplicação
