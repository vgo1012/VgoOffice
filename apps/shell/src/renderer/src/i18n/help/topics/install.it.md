<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Installare VgoOffice

[Versioni](https://github.com/vgo1012/VgoOffice/releases) — Usa un programma di installazione allegato a una versione. Questa pagina non indica che un binario sia già stato pubblicato su GitHub. Le compilazioni locali non sono firmate senza credenziali di firma.

## Prima dell’installazione

Questa edizione è stata verificata su Windows x64. I target di codice macOS e Linux rimangono, ma questa edizione non è stata verificata su tali piattaforme. Scegli un pacchetto solo se la versione supporta esplicitamente il tuo sistema operativo.

## Installare e avviare

1. Salva i documenti aperti e chiudi la versione precedente prima di aggiornare.
2. Esegui il programma di installazione .exe per Windows e completa l’installazione.
3. Avvia VgoOffice dal collegamento sul desktop o nel menu Start.

Il programma di installazione memorizza le risorse una sola volta, evitando di estrarre un eseguibile portatile a ogni avvio. Copiare solo VgoOffice.exe esclude risorse indispensabili agli editor.

## Aggiornamenti e preferenze

Gli aggiornamenti conservano l’identità di installazione e la cartella del profilo Eoffice. È normale che una cartella mantenga il nome Eoffice per compatibilità. In Impostazioni → Generali, scegli il tema chiaro, scuro o di sistema; lo sfondo predefinito è azzurro-grigio chiaro. I colori dei documenti si gestiscono separatamente.

## Versione e progetto

Impostazioni → Informazioni mostra la versione installata e il link al progetto VgoOffice. Aggiungi una Star al repository se ti è utile. Gli aggiornamenti dipendono dalla configurazione di compilazione; controlla le versioni del progetto quando l’aggiornamento nell’app non è disponibile.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Riga di comando e IA

Il comando compatibile rimane genoffice. Impostazioni → Integrazioni mostra il percorso installato e la configurazione. Esegui il comando seguente con tale percorso o dopo aver aggiunto la CLI al PATH.

```sh
genoffice --version
```

L’accesso all’account dell’app è stato rimosso. Configura la tua API di modelli, un endpoint compatibile con OpenAI o un Codex CLI installato. Autenticazione esterna e costi rimangono separati; la modifica locale non richiede un account VgoOffice.

[Impostazioni di integrazione](help://settings-integrations) · [Modelli di IA](help://ai-models)
