# Meu Semestre

Organizador da faculdade feito pra Processos Gerenciais (EAD), no estilo app de celular.
No ar em **https://college-organizer-app.vercel.app** (a Vercel publica sozinha a cada `git push`).

## O que tem

- **Início**: próximo prazo, semana em faixa, próximas provas com contagem de dias, médias e lembretes.
- **Agenda**: prazos agrupados (atrasadas, hoje, próximos 7 dias, mais pra frente), data editável e "desfazer" ao apagar.
- **Trilha**: a trilha de aprendizagem de Matemática Financeira por unidade, marcando o que já foi visto.
- **Caderno**: notas estilo Notas do iPhone e **folhas à mão** pra escrever contas com caneta de toque. Tem tela cheia e "Apagadas recentemente".
- **Calendário**: a trilha do semestre (D3 → D4 → D5), provas no polo, RecuperAí e feriados.
- **Disciplinas e notas**: avaliações com peso, média e quanto falta pra passar.
- **JOIA**: o que é, passo a passo e checklist.
- **Calculadora 12C**: botão flutuante com RPN, juros compostos, NPV/IRR, amortização, datas e o modo "Explicar teclas".

## Banco de dados online (Firebase, grátis)

O app salva tudo no **Firebase** (do Google), com login pela conta Google. Assim fica igual no celular e no computador. Só você acessa os seus dados.

Configuração (uma vez só):

1. Entre em **https://console.firebase.google.com** e clique em **Criar projeto** → nome `meu-semestre` → pode desligar o Google Analytics.
2. **Login com Google**: **Criação → Authentication → Vamos começar → Método de login → Google** → ativar → escolher seu e-mail → **Salvar**.
3. **Autorizar o site**: em Authentication → **Configurações → Domínios autorizados → Adicionar domínio** → `college-organizer-app.vercel.app`
4. **Banco**: **Criação → Firestore Database → Criar banco de dados** → local **southamerica-east1 (São Paulo)** → **modo de produção**.
5. **Regras**: no Firestore, aba **Regras** → apagar tudo → colar o conteúdo de `pessoal/regras-firebase.txt` (ou `firestore.rules` trocando pelo seu e-mail) → **Publicar**.
6. **Configuração do app**: ⚙️ **Configurações do projeto → Seus apps → `</>` (Web)** → registrar como `Meu Semestre` → copiar os valores do `firebaseConfig` pro arquivo `firebase-config.js`.
7. Enviar pro GitHub (`git add .`, `git commit -m "Liga o Firebase"`, `git push`). A Vercel atualiza sozinha.

Os valores do `firebase-config.js` não são senha e podem ficar no GitHub. Quem protege os dados são as regras do passo 5.

## Instalar no celular

- **Android (Chrome)**: abrir o site → **⋮** → **Instalar app**.
- **iPhone (Safari)**: abrir o site → **Compartilhar** → **Adicionar à Tela de Início**.

Abre em tela cheia, com o ícone amarelo, e funciona até sem internet. O que você fizer offline sincroniza quando a internet voltar.

## Segurança e privacidade

- **Banco trancado**: as regras publicadas no Firebase só aceitam uma conta Google (a da dona do app), e só nos próprios dados. Mesmo que alguém entre com outra conta Google, não lê nem grava nada. A versão com o e-mail fica em `pessoal/regras-firebase.txt` (fora do GitHub); `firestore.rules` é só o modelo público.
- **Site blindado** (`vercel.json`): o navegador só carrega código do próprio site e do Google/Firebase (Content-Security-Policy), o app não pode ser aberto escondido dentro de outro site (anti-clickjacking), e câmera, microfone e localização ficam bloqueados.
- **Anotações limpas**: o que é colado no Caderno passa por um filtro que remove scripts e links perigosos antes de salvar.
- **Chave do Firebase restrita**: no Google Cloud, a chave só funciona a partir do endereço do app.
- A pasta `pessoal/` não vai pro GitHub.

## Arquivos

| Arquivo | Pra que serve |
|---|---|
| `index.html` | O app inteiro (telas, estilos e código) |
| `firebase-config.js` | Configuração do Firebase |
| `firestore.rules` | Modelo das regras de segurança do banco |
| `vercel.json` | Proteções do site (cabeçalhos de segurança) |
| `manifest.webmanifest` | Nome, cores e ícones pra instalar no celular |
| `sw.js` | Faz o app abrir sem internet |
| `icons/` | Ícones do app |
| `pessoal/` | Seus arquivos pessoais (não vai pro GitHub) |
