<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Instalacja VgoOffice

[Wydania](https://github.com/vgo1012/VgoOffice/releases) — Użyj instalatora dołączonego do wydania. Ta strona nie oznacza, że plik binarny został już opublikowany na GitHub. Kompilacje lokalne są niepodpisane, jeśli nie podano danych do podpisu.

## Przed instalacją

Ta wersja została sprawdzona na Windows x64. Cele kodu macOS i Linux pozostają, ale ta wersja nie została na nich zweryfikowana. Wybierz pakiet tylko wtedy, gdy wydanie wyraźnie obsługuje Twój system operacyjny.

## Instalacja i uruchamianie

1. Zapisz otwarte dokumenty i zamknij poprzednią wersję przed aktualizacją.
2. Uruchom instalator .exe dla Windows i dokończ instalację.
3. Uruchom VgoOffice przez skrót na pulpicie lub w menu Start.

Instalator zapisuje zasoby raz, bez ponownego rozpakowywania programu przenośnego przy każdym uruchomieniu. Samo skopiowanie VgoOffice.exe pomija zasoby wymagane przez edytory.

## Aktualizacje i preferencje

Aktualizacje zachowują tożsamość instalacji i katalog profilu Eoffice. Nazwa katalogu Eoffice jest normalna ze względu na zgodność. W Ustawienia → Ogólne wybierz motyw jasny, ciemny lub systemowy; domyślne tło jest jasnoszaroniebieskie. Kolory dokumentów ustawia się osobno.

## Wersja i projekt

Ustawienia → O aplikacji pokazuje zainstalowaną wersję i odnośnik do projektu VgoOffice. Dodaj Star, jeśli projekt jest przydatny. Dostępność aktualizacji zależy od konfiguracji kompilacji; sprawdź wydania projektu, gdy aktualizacja w aplikacji nie jest dostępna.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Wiersz poleceń i AI

Polecenie zgodności pozostaje genoffice. Ustawienia → Integracje pokazuje ścieżkę instalacji i konfigurację. Uruchom poniższe polecenie przez tę ścieżkę lub po dodaniu CLI do PATH.

```sh
genoffice --version
```

Logowanie do konta aplikacji zostało usunięte. Skonfiguruj własne API modeli, punkt końcowy zgodny z OpenAI lub zainstalowany Codex CLI. Uwierzytelnianie zewnętrzne i opłaty są niezależne; lokalna edycja nie wymaga konta VgoOffice.

[Ustawienia integracji](help://settings-integrations) · [Modele AI](help://ai-models)
