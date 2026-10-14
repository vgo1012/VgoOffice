<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# VgoOffice installieren

[Veröffentlichungen](https://github.com/vgo1012/VgoOffice/releases) — Verwende ein einer Veröffentlichung beigefügtes Installationspaket. Diese Seite bedeutet nicht, dass bereits eine Binärdatei auf GitHub veröffentlicht wurde. Lokale Builds bleiben ohne Signatur-Zugangsdaten unsigniert.

## Vor der Installation

Diese Ausgabe wurde unter Windows x64 geprüft. Quellcode-Ziele für macOS und Linux bleiben erhalten, diese Ausgabe wurde dort jedoch nicht validiert. Wähle ein Paket nur, wenn die Veröffentlichung dein Betriebssystem ausdrücklich unterstützt.

## Installieren und starten

1. Speichere offene Dokumente und schließe die alte Version vor dem Upgrade.
2. Führe das .exe-Installationsprogramm für Windows aus und schließe die Installation ab.
3. Starte VgoOffice über die Desktop-Verknüpfung oder das Startmenü.

Das Installationsprogramm speichert Ressourcen einmalig; beim Start muss keine portable Datei erneut entpackt werden. Nur VgoOffice.exe zu kopieren lässt benötigte Editor-Ressourcen weg.

## Upgrades und Einstellungen

Upgrades behalten die Installationskennung und den Profilordner von Eoffice bei. Ein weiterhin Eoffice genannter Ordner ist aus Kompatibilitätsgründen normal. Unter Einstellungen → Allgemein kannst du hell, dunkel oder System wählen; der Standardhintergrund ist hellblaugrau. Dokumentfarben werden getrennt gesteuert.

## Version und Projekt

Einstellungen → Über zeigt die installierte Version und den Link zum VgoOffice-Projekt. Gib dem Repository einen Star, wenn es dir hilft. Updates hängen von der Build-Konfiguration ab; prüfe die Veröffentlichungsseite, wenn kein Update in der App verfügbar ist.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Kommandozeile und KI

Der Kompatibilitätsbefehl bleibt genoffice. Einstellungen → Integrationen zeigt den installierten Pfad und die Einrichtung. Führe den folgenden Befehl über diesen Pfad aus oder füge die CLI zuvor zu PATH hinzu.

```sh
genoffice --version
```

Die Anmeldung beim App-Konto wurde entfernt. Konfiguriere deine Modell-API, einen OpenAI-kompatiblen Endpunkt oder eine installierte Codex CLI. Externe Authentifizierung und Gebühren bleiben eigenständig; lokale Bearbeitung braucht kein VgoOffice-Konto.

[Integrationseinstellungen](help://settings-integrations) · [KI-Modelle](help://ai-models)
