> # 25.2 - Deploy com Heroku e CI/CD e Docker
> ## Pré-Requisito
> * [ ]   Instalar Heroku-CLI
>   
>   * **URL**
>     https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli
> 
> ## Exercício
> * [ ]   [Página com o exercício](https://app.betrybe.com/course/back-end/deployment/deploy-docker-heroku/915a6dce-162b-4015-b499-31ecae9e9411/exercicios/d03d578f-c864-46ed-bb63-a2089812a3c4/agora-a-pratica/7d0e089a-d6aa-44a8-afc8-773be8bd7ae5?use_case=side_bar)
> 
> ## Deploy do Frontend
> * [ ]   Clonar [Frontend](https://github.com/tryber/herocker-exercise-frontend) e abrir no vs code
> * [ ]   Criar um app no heroku
> * [ ]   Subir o código no repositório git do heroku (deploy)
> * [ ]   Abrir o app e verificar que o **loading** irá aparecer
> 
> ## Deploy do Backend
> * [ ]   Clonar [Backend](https://github.com/tryber/herocker-exercise-backend) e abrir no vs code
> * [ ]   Criar um dockerfile
> * [ ]   Criar o `heroku.yml`
> * [ ]   Criar o app no heroku
> * [ ]   _Setar_ o ambiente do container (criar a stack)
> * [ ]   Subir o app no heroku
> * [ ]   Criar o banco de dados no [SUPABASE](https://supabase.com/) e copiar as credenciais
>   
>   * [ ]   Credenciais encontra em **Setting**→**Database**→Seção **Connection Info**
> * [ ]   Configurar o `config.js` do sequelize
> * [ ]   Configurar as variáveis de ambiente no Heroku
> * [ ]   Testar a conexão da máquina local através do script `utils/testSequelizeConnection.js`
>   
>   * [ ]   Criar as variáveis de ambiente
>   * [ ]   Alterar o script para usar a lib `dotenv`
>   * [ ]   Rodar o script para testar conexão com o banco
>     
>     * **comando**
>       ```shell
>       NODE_ENV=production node utils/testSequelizeConnection.js
>       
>       NODE_ENV=production npx run utils/testSequelizeConnection.js
>       ```
> * [ ]   Testar conexão com o banco a partir do Heroku.
>   
>   * **comando**
>     ```shell
>     heroku run node utils/testSequelizeConnection.js
>     ```
> * [ ]   A rota de GET já está implementada do exercício 05
> * [ ]   Criar (_migrate_) e popular (_seed_) o banco
> 
> ## Conectar Frontend com Backend
> * [ ]   Preparar o backend para aceitar request via browser (Ativar o cors)
> * [ ]   Apontar o frontend para url do backend
> * [ ]   Carregar a URL do frontend e ver tudo lindo funcionando
> 
> ## Configurar lint no Github Actions
> * [ ]   Adicionar o script para rodar lint no package.json
> * [ ]   Criar action no github
> * [ ]   Subir código **NO GITHUB** em uma nova branch

