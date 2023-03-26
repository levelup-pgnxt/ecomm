# ecomm

## Projeto de Ecommerce criando durante o programa LevelUp da Alura

## Adequeção da API aos 12 Fatores

### Fator 1 - Base do Código

Código do projeto encontra-se armazenado na plataforma GitHub.

### Fator 2 - Dependências

O projeto possui arquivos package.json onde deixa bem definidos suas despendências e em quais momentos ocorrem essas despendências.

### Fator 3 - Configurações

Nosso projeto possui arquivo DOTENV para uso das configurações de ambiente.

### Fator 4 - Serviços de Apoio

O projeto utiliza o MySQL e o MongoDB para armazenamento de dados.

### Fator 5 - Construa, lance, execute

O projeto não usa ainda esses tipos de fluxo de desenvolvimento.

### Fator 6 - Processos

O projeto não utiliza recursos não stateless. As informações que precisam persistir, são armazendas em banco de dados.

### Fator 7 - Vínculo de Portas

O projeto possui vínculo de portas para HTTP configuráveis via variáveis em arquivo dotenv.

### Fator 8 - Concorrência

Situação em análise.

### Fator 9 - Descartabilidade

Situação em análise.

### Fator 10 - Paridade entre desenvolvimento e produção

O projeto possui e utiliza os mesmos serviços tanto para desenvolvimento, testes e produção.

### Fator 11 - Logs

Situação em análise.

### Fator 12 - Processos administrativos

Situação em análise.

# Micro Serviços ou Monólitos eis a questão

Quem nasceu primeiro? O ovo? Ou a galinha? Um questionamento tão simples e tão complexo ao mesmo tempo, e que a princípio soa como uma brincadeira, mas se aprofundarmos e questionarmos quem surgiu primeiro, uma entidade simples, unicelular que é o ovo ou uma entidade complexa, multicelular que é a galinha. O mesmo ocorre quando necessitamos criar um aplicativo, temos uma noção do que precisamos, mas não temos a dimensão da necessidade que precisamos, e nem sempre possuímos os recursos financeiros para tal aposta.
Então o que fazer? Como agir? Retornando ao nosso questionamento inicial, podemos observar que uma entidade mais simples requer menos esforço para iniciar e apresenta um potencial de desenvolvimento e sucesso muito maior, o mesmo podemos pensar sobre iniciar uma nova API, quais os recursos que possuo, principalmente, qual o recurso financeiro, e como tirar o máximo proveito com pouco, essa é uma decisão que nos leva a optar, em grande parte, por uma solução fechada, compacta e tudo sobre um mesmo espaço, para então, conforme necessidade, crescer e utilizar micro serviços que venha a atender as suas necessidades.

**Serviços de Domínio** – em nosso projeto é imprescindível determinamos nossos domínios, pois sem estes seria uma confusão de solicitações das mais diversas em um mesmo espaço. São bem definidos nossos domínios: account, product, categories, finance e orders.

**Serviços de Negócios** – ao determinar o que serviço se pretende, avaliamos a melhor solução para sua execução. Em nosso projeto temo o serviço de vendas de produtos, quem envolve todos os domínios.

**Gateway** – Esse serviço visa orquestrar todos os acessos aos nossos domínios. Nosso projeto tem necessidade desta implementação.

**Agregador de processos** – quando pensamos em um processo de devolução de mercadoria e os domínios que são atingindo por este, é que percebemos a necessidade de um agregador, para gerir esse mini domínio que se é necessário.

**Edge service** – O serviço não apresenta até o momento uma necessidade de entregas por tipo de usuário.

**Single database vs Bancos diferentes** – Nossa API já possui um banco de dados distinto para cada domínio.

**Eventos Assíncronos** – Esse evento é será evidenciado em nossa API no processo de migração de pedido para compra efetivada, onde o usuário receberá uma mensagem informando sobre confirmação de compra em andamento, enquanto o sistema finaliza todas as verificações de segurança e emite a nota fiscal de venda, onde ao finalizar, será retornado o status atualizado da compra.



# Aspectos dos Microserviços

## Padronização das tecnologias
A padronização das tecnologias de serviços é um aspecto importante da arquitetura de microsserviços. Nossa API, embora use NodeJS, não procurou usar um padrão no modo de abordar os módulos, em um serviço usou módulo ES e em outro usou o módulo CommonJS.

## Solução de descoberta de serviço
Nossa API ainda não implementou esse processo, entendemos nossa necessidade, ainda não optamos qual abordagem seguir, seja descoberta por lado do cliente, do lado do servidor, ou híbrida.

## Aspectos de segurança
Nossa API utiliza autenticação e autorização, com uso de token e as senhas dos nossos usuários são salvas com criptografia com uma pitada de sal.

## Tecnologias para implantar e construir
Tanto CI quanto CD dependem de ferramentas e processos de automação para tornar a entrega de software mais rápida, mais eficiente e menos propensa a erros. Algumas ferramentas permitem que os desenvolvedores automatizem os processos de construção, teste e implantação e se integrem facilmente a outras ferramentas e plataformas de desenvolvimento, nossa API não tem ainda uma definição sobre qual usar.

## Como lidar com tolerância a falhas em aplicações síncronas
Algumas das principais abordagens para lidar com tolerância a falhas em aplicativos síncronos são redundância, timeouts, degradação normal e mecanismos de detecção e recuperação de falhas. No geral, lidar com a tolerância a falhas em aplicativos síncronos requer uma combinação destes, e ao projetar o sistema com essas considerações em mente, é possível garantir que ele continue a operar mesmo na presença de falhas ou erros.

## Em que pontos faz sentido usar comunicação assíncrona
A comunicação assíncrona é adequada para tarefas de execução longa que podem levar um tempo significativo para serem concluídas. Em nossa API o processo que se adequa a esse uso é de pagamento e emissão de nota fiscal do pedido.
