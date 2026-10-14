<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Instalace VgoOffice

[Vydání](https://github.com/vgo1012/VgoOffice/releases) — Použijte instalátor přiložený k vydání. Tato stránka neznamená, že binární soubor již byl zveřejněn na GitHubu. Místní sestavení zůstávají nepodepsaná bez údajů pro podepisování.

## Před instalací

Tato verze byla ověřena na Windows x64. Cíle kódu pro macOS a Linux zůstávají, ale tato verze na nich nebyla ověřena. Vyberte balíček pouze tehdy, pokud vydání výslovně podporuje váš operační systém.

## Instalace a spuštění

1. Uložte otevřené dokumenty a před aktualizací zavřete předchozí verzi.
2. Spusťte instalátor .exe pro Windows a dokončete instalaci.
3. Spusťte VgoOffice pomocí zástupce na ploše nebo v nabídce Start.

Instalátor ukládá prostředky jednou, takže při každém spuštění není nutné rozbalovat přenosný program. Samotné kopírování VgoOffice.exe vynechá prostředky potřebné pro editory.

## Aktualizace a předvolby

Aktualizace zachovají identitu instalace a profilový adresář Eoffice. Název adresáře Eoffice je kvůli kompatibilitě normální. V Nastavení → Obecné zvolte světlý, tmavý nebo systémový vzhled; výchozí pozadí je světle modrošedé. Barvy dokumentů se řídí samostatně.

## Verze a projekt

Nastavení → O aplikaci ukazuje nainstalovanou verzi a odkaz na projekt VgoOffice. Pokud pomáhá, dejte repozitáři Star. Aktualizace závisí na konfiguraci sestavení; není-li aktualizace v aplikaci dostupná, podívejte se na vydání projektu.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Příkazový řádek a AI

Kompatibilní příkaz zůstává genoffice. Nastavení → Integrace ukazuje instalační cestu a nastavení. Následující příkaz spusťte přes tuto cestu nebo po přidání CLI do PATH.

```sh
genoffice --version
```

Přihlášení k účtu aplikace bylo odstraněno. Nastavte své API modelů, koncový bod kompatibilní s OpenAI nebo nainstalované Codex CLI. Externí ověřování a poplatky zůstávají samostatné; místní úpravy nevyžadují účet VgoOffice.

[Nastavení integrací](help://settings-integrations) · [Modely AI](help://ai-models)
