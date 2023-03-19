# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura

# Os Doze Fatores

## I. Base de Código :heavy_check_mark:

<em>Uma base de código com rastreamento utilizando controle de revisão, muitos deploys</em> 
<p>O código do projeto está hospedado no GitHub e todo o desenvolvimento está sendo feito de forma incremental, separado por branches.</p>

## II. Dependências :heavy_check_mark:

<em>Declare e isole as dependências</em> 
<p>As dependências do projeto estão declaradas no arquivo **package.json** de cada pasta. Para instalar as depedências, basta navegar pra dentro da pasta utilizando o terminal e executar o comando npm install.</p>

## III. Configurações :heavy_check_mark:

<em>Armazene as configurações no ambiente</em> 
<p>As configurações de ambiente estão salvas no arquivo **.env** e para rodar o projeto corretamente é necessário preenchê-las previamente.</p>

## IV. Serviços de Apoio :heavy_check_mark:

<em>Trate os serviços de apoio, como recursos ligados</em> 
<p>Os serviços de apoio do projeto (banco de dados) podem ser alterados com o ajuste do arquivo de configuração.</p>

## V. Construa, lance, execute :heavy_check_mark:

<em>Separe estritamente os builds e execute em estágios</em> 
<p>Cada incrementação do código está separada na sua branch específica.</p>

## VI. Processos :heavy_check_mark:

<em>Execute a aplicação como um ou mais processos que não armazenam estado</em> 
<p>Não há armazenamento de estados no projeto</p>

## VII. Vínculo de porta :heavy_check_mark:

<em>Exporte serviços por ligação de porta</em> 
<p>Cada serviço do projeto é acessado através de uma porta única</p>

## VIII. Concorrência :heavy_check_mark:

<em>Dimensione por um modelo de processo</em> 
<p>O projeto está separado por processos não conflitantes o que permite que cada serviço (account, finance ou product) seja executado sem que atrapalhe o funcionamento do outro.</p>

## IX. Descartabilidade :heavy_check_mark:

<em>Maximizar a robustez com inicialização e desligamento rápido</em> 
<p>O projeto utiliza o Docker para seu funcionamento, o que permite enviar um comando para que ele seja encerrado "graciosamente".</p>

## X. Dev/prod semelhantes :heavy_check_mark:

<em>Mantenha o desenvolvimento, teste, produção o mais semelhante possível</em> 
<p>Os serviços utilizados em teste e produção são os mesmos, onde for aplicável.</p>

## XI. Logs :heavy_check_mark:
<em>Trate logs como fluxo de eventos</em> 
<p>O projeto envia mensagens de log conforme sua execução, exibindo mensagens de erros e sucessos no terminal, sem que sejam salvas em algum arquivo.</p>

## XII. Processos de Admin :x:
<em>Executar tarefas de administração/gerenciamento como processos pontuais</em> 
<p>Não há um ambiente separado para rodar tarefas de administrador no projeto.</p>


# Microservices Patterns

## Serviços de domínio

<p>O projeto utiliza domínios diferentes para separar cada parte do serviço conforme sua função.</p>

## Serviços de negócio

<p>Os servicços do projeto estão agrupados conforme sua funcionalidade em um contexto específico (usuários, pagamentos, etc).</p>

## API Gateway

<p>Não implementado.</p>

## Agregador de processos

<p>Não implementado.</p>

## Edge service

<p>Não implementado.</p>

## Single database vs Bancos diferentes

<p>O projeto utiliza bancos de dados diferentes (MongoDB e MySQL).</p>

## Eventos assíncronos‌

<p>Alguns processos dentro do projeto são realizados de forma assíncrona.</p>

## Agregação de logs

<p>Não implementado.</p>

## Agregação de métricas

<p>Não implementado.</p>

