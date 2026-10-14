<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Instalar o VgoOffice

[Versões](https://github.com/vgo1012/VgoOffice/releases) — Use um instalador anexado a uma versão. Esta página não indica que um binário já tenha sido publicado no GitHub. Compilações locais não são assinadas sem credenciais de assinatura.

## Antes de instalar

Esta edição foi testada no Windows x64. Os alvos de código para macOS e Linux continuam disponíveis, mas esta edição não foi validada nessas plataformas. Escolha um pacote apenas quando sua versão declarar suporte ao seu sistema operacional.

## Instalar e iniciar

1. Salve os documentos abertos e feche a versão anterior antes de atualizar.
2. Execute o instalador .exe do Windows e conclua a instalação.
3. Inicie o VgoOffice pelo atalho da área de trabalho ou do menu Iniciar.

O instalador grava os recursos uma única vez, evitando extrair um executável portátil a cada inicialização. Copiar apenas VgoOffice.exe deixa de fora recursos necessários dos editores.

## Atualizações e preferências

As atualizações preservam a identidade de instalação e a pasta de configuração do Eoffice. É normal que uma pasta continue chamada Eoffice por compatibilidade. Em Configurações → Geral, escolha aparência clara, escura ou do sistema; o fundo padrão é azul-acinzentado claro. As cores dos documentos são controladas separadamente.

## Sua versão e o projeto

Configurações → Sobre mostra a versão instalada e o link do projeto VgoOffice. Dê uma Star se ele ajudar você. A disponibilidade de atualizações depende da configuração da compilação; consulte as versões do projeto quando não houver atualização no aplicativo.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Linha de comando e IA

O comando compatível continua sendo genoffice. Configurações → Integrações mostra o caminho instalado e a configuração. Execute o comando abaixo usando esse caminho ou após adicionar a CLI ao PATH.

```sh
genoffice --version
```

O login da conta do aplicativo foi removido. Configure sua API de modelos, um endpoint compatível com OpenAI ou um Codex CLI instalado. A autenticação externa e as taxas de uso são independentes; a edição local não precisa de uma conta do VgoOffice.

[Configurações de integração](help://settings-integrations) · [Modelos de IA](help://ai-models)
