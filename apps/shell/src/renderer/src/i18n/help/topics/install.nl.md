<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# VgoOffice installeren

[Releases](https://github.com/vgo1012/VgoOffice/releases) — Gebruik een installatiebestand dat bij een release is gevoegd. Deze pagina betekent niet dat al een binair bestand op GitHub is gepubliceerd. Lokale builds zijn zonder ondertekeningsgegevens niet ondertekend.

## Voor de installatie

Deze editie is getest op Windows x64. De broncodedoelen voor macOS en Linux blijven bestaan, maar deze editie is daar niet gevalideerd. Kies een pakket alleen wanneer de release jouw besturingssysteem uitdrukkelijk ondersteunt.

## Installeren en starten

1. Sla geopende documenten op en sluit de vorige versie voordat je bijwerkt.
2. Voer het .exe-installatieprogramma voor Windows uit en voltooi de installatie.
3. Start VgoOffice via de snelkoppeling op het bureaublad of in het Startmenu.

Het installatieprogramma slaat bronnen eenmaal op, zonder bij elke start een portable programma uit te pakken. Alleen VgoOffice.exe kopiëren laat benodigde editorbronnen weg.

## Upgrades en voorkeuren

Upgrades behouden de bestaande installatie-identiteit en profielmap van Eoffice. Een map die Eoffice blijft heten is normaal voor compatibiliteit. Kies onder Instellingen → Algemeen een licht, donker of systeemthema; de standaardachtergrond is lichtblauwgrijs. Documentkleuren worden afzonderlijk beheerd.

## Versie en project

Instellingen → Over toont de geïnstalleerde versie en een link naar het VgoOffice-project. Geef de repository een Star als deze nuttig is. Updates zijn afhankelijk van de buildconfiguratie; bekijk de releases wanneer bijwerken in de app niet beschikbaar is.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Opdrachtregel en AI

De compatibiliteitsopdracht blijft genoffice. Instellingen → Integraties toont het geïnstalleerde pad en de configuratie. Voer de onderstaande opdracht uit via dat pad of voeg de CLI eerst toe aan PATH.

```sh
genoffice --version
```

Aanmelden bij een app-account is verwijderd. Stel je eigen model-API, een OpenAI-compatibel endpoint of een geïnstalleerde Codex CLI in. Externe authenticatie en kosten blijven afzonderlijk; lokaal bewerken vereist geen VgoOffice-account.

[Integratie-instellingen](help://settings-integrations) · [AI-modellen](help://ai-models)
