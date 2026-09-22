# Meu Semestre

Organizador da faculdade feito pra Processos Gerenciais (EAD), no estilo app de celular.

## O que tem

- **Início**: próximo prazo, semana em faixa, próximas provas com contagem de dias, médias e lembretes.
- **Agenda**: todos os prazos agrupados (atrasadas, hoje, próximos 7 dias, mais pra frente), com data editável e "desfazer" ao apagar.
- **Trilha**: a trilha de aprendizagem de Matemática Financeira organizada por unidade, com vídeos, leituras, videoaulas e resoluções, marcando o que já foi visto.
- **Caderno**: notas estilo Notas do iPhone (título, listas, tarefas, marca-texto pastel, cores) e **folhas à mão** pra escrever contas com caneta de toque. Tem tela cheia e "Apagadas recentemente".
- **Calendário**: a sua trilha do semestre (D3 → D4 → D5), provas no polo, RecuperAí e feriados.
- **Disciplinas e notas**: avaliações com peso, média e quanto falta pra passar.
- **JOIA**: o que é, passo a passo e checklist.
- **Calculadora 12C**: botão flutuante com RPN, juros compostos, NPV/IRR, amortização, datas, depreciação e o modo "Explicar teclas".

## Como abrir no computador

Dê dois cliques em `index.html`. Pronto, abre no navegador.

## Como publicar no GitHub Pages (pra abrir no celular)

1. Crie um repositório no GitHub (ex.: `meu-semestre`) e envie **todos os arquivos desta pasta**. A pasta `pessoal/` fica de fora sozinha por causa do `.gitignore`.
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**, a branch **main** e a pasta **/ (root)**. Clique em **Save**.
4. Espere 1 ou 2 minutos. O endereço aparece no topo da mesma página, algo como `https://SEU-USUARIO.github.io/meu-semestre/`.

## Como instalar no celular, como um app

- **Android (Chrome)**: abra o endereço, toque nos **⋮** e depois em **Instalar app** (ou "Adicionar à tela inicial").
- **iPhone (Safari)**: abra o endereço, toque em **Compartilhar** e depois em **Adicionar à Tela de Início**.

Depois de instalado, o app abre em tela cheia e funciona até sem internet.

## Seus dados e o backup

- Nesta versão, **tudo fica salvo no próprio navegador** de cada aparelho. O computador e o celular **não** sincronizam sozinhos.
- Pra levar seus dados de um aparelho pro outro, use **Backup dos dados** (no menu lateral ou em **Mais**, no celular):
  - **Baixar backup** gera um arquivo `.json` com tudo.
  - **Restaurar backup** carrega esse arquivo no outro aparelho.
- O backup com os seus dados de hoje está em `pessoal/meus-dados.json`. Na primeira vez que abrir o app, ele oferece pra você restaurar esse arquivo.
- Se você limpar os dados do navegador, apaga o que está salvo nele. Por isso, baixe um backup de vez em quando.

## Privacidade

Se o repositório for **público**, qualquer pessoa pode ver o código do app, que tem o seu primeiro nome, a turma e o polo escritos no topo da Início. Suas notas, prazos e anotações **não** vão pro GitHub: eles ficam no navegador e em `pessoal/`, que o `.gitignore` deixa de fora.

## Arquivos

| Arquivo | Pra que serve |
|---|---|
| `index.html` | O app inteiro (telas, estilos e código) |
| `manifest.webmanifest` | Nome, cores e ícones pra instalar no celular |
| `sw.js` | Faz o app abrir sem internet |
| `icons/` | Ícones do app |
| `pessoal/` | Seu backup e o calendário oficial (não vai pro GitHub) |
