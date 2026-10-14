<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->
<p align="center">
  <img src="docs/assets/vgooffice/logo.png" alt="VgoOffice logo" width="128">
</p>

<h1 align="center">VgoOffice</h1>

<p align="center">Documents, spreadsheets, presentations, PDF, Markdown and HTML in one desktop workspace.<br>Local editing, configurable AI and a light blue interface.</p>

<p align="center">
  <a href="https://github.com/vgo1012/VgoOffice">Star VgoOffice</a> ·
  <a href="https://github.com/vgo1012/VgoOffice/releases">Releases</a> ·
  <a class="lang-switcher" href="docs/i18n/README.zh-CN.md">简体中文</a> ·
  <a href="LICENSE">Apache-2.0</a>
</p>

VgoOffice brings six file editors into one tabbed desktop app. Open local
files, edit them directly, and save them in their existing formats. AI is
optional: connect your own model API, an OpenAI-compatible endpoint, or an
installed Codex CLI when you need assistance.

This customized distribution is based on
[genspark-ai/genoffice](https://github.com/genspark-ai/genoffice). It retains
the upstream document engines and notices while introducing VgoOffice branding
and an account-free desktop workflow.

![VgoOffice desktop workspace](apps/shell/src/renderer/src/i18n/help/topics/img/home-screen.en.png)

## What you can do

| Editor       | Files                   | Capabilities                                                                                       |
| ------------ | ----------------------- | -------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx`                 | Edit text, tables and page layout; review AI changes and save Word documents.                      |
| **Sheets**   | `.xlsx`, `.xls`, `.csv` | Work with data, formulas, multiple worksheets and charts. Use `.xlsx` to retain workbook features. |
| **Slides**   | `.pptx`                 | Edit slide text, shapes and images; create presentations with configured AI.                       |
| **PDF**      | `.pdf`                  | Read and edit PDF content; convert documents through local engines and available system OCR.       |
| **Markdown** | `.md`                   | Edit Markdown, preview formatted content, and export to supported document formats.                |
| **HTML**     | `.html`                 | Edit and preview HTML, and export supported page structures as editable Word documents.            |

- **Local file workflows.** Opening, editing, saving and local conversion run
  on your computer. AI, search and media requests use the providers you configure.
- **One workspace.** Open files from the home screen, recent files or drag and
  drop, then switch between editors in tabs. Search can index local file names
  and content.
- **Your AI connection.** Configure providers and your own credentials in
  Settings. Local OpenAI-compatible endpoints are supported; an installed
  Codex CLI uses its own configuration and authentication.
- **Reviewable changes.** Supported AI edits can be reviewed and undone.
  Engines aim to preserve untouched content; check complex files with the
  application that created them before sharing.
- **Scripts and integrations.** The bundled `genoffice` CLI and MCP interfaces
  expose document operations to scripts and coding assistants.

## Changes in the VgoOffice edition

- VgoOffice name and V logo throughout the desktop interface and installers.
- A light blue-gray background (`#E8EEF7`) by default, with light, dark and
  system choices in **Settings → General**. Document colors are controlled by
  the document itself.
- Removed desktop account login, account settings and account cloud-project
  entry points. Models and media use independently configured services.
- Windows installer distribution: resources are installed once, so starting
  the installed app avoids repeated extraction of a portable executable.
- Fixed Chinese default Office application names in Windows settings.
- **Settings → About** links to [VgoOffice on GitHub](https://github.com/vgo1012/VgoOffice).

The command `genoffice`, `GENOFFICE_*` variables and `@genoffice/*` workspace
names remain compatible. Upgrades from Eoffice retain the Windows installation
identity and `%APPDATA%\Eoffice` profile directory; the application is named
`VgoOffice.exe`.

## Install and start

Look for a **Windows x64 installer** on
[VgoOffice Releases](https://github.com/vgo1012/VgoOffice/releases). Download
instructions apply when a release has installer assets attached; this README
does not mean a binary release has already been published.

Save your documents and close the previous version before upgrading. Run the
installer, then start **VgoOffice** from the desktop or Start menu. Ordinary
users do not need Node.js, Rust or the source repository. Distribute the full
installer; copying only `VgoOffice.exe` omits required editor resources.

This edition has been tested on Windows x64. macOS and Linux source targets
remain in the repository, but this customization has not been validated on
those platforms. Local builds are unsigned unless signing credentials are
provided. Different Office versions can introduce file compatibility differences.

## Configure AI

1. Open **Settings → AI Models**.
2. Choose a provider and enter your own API key and model, or configure a custom
   OpenAI-compatible base URL. Use the available connection test.
3. To use an installed Codex CLI, select Codex and verify executable and model
   detection. The CLI's installation and authentication are managed separately.
4. Configure search, image generation and media analysis independently in
   **Settings → Images, Media & Search** when needed.

Local editing requires no VgoOffice account. Third-party services may require
credentials, a network connection and paid usage. Inputs used in AI features
may be sent to the selected provider; see [PRIVACY.md](PRIVACY.md).

## CLI and MCP

The compatibility command remains `genoffice`. **Settings → Integrations**
shows the installed CLI path and integration setup.

```bash
genoffice --version
genoffice info report.docx --json
genoffice sheet read budget.xlsx --range A1:D20 --json
genoffice convert notes.md --to docx
genoffice open report.docx
genoffice mcp
```

These examples assume the installed CLI is on PATH or invoked by its full
path. See the [CLI reference](packages/cli/README.md) for document operations,
automation and MCP configuration.

## Develop from source

Requirements: **Node.js 22.12+**, **npm 10+**, and Rust with `cargo` on PATH
for the spreadsheet sidecar. Windows native builds also need a C/C++ linker
appropriate to the chosen Rust toolchain.

```bash
git clone git@github.com:vgo1012/VgoOffice.git
cd VgoOffice
npm install
npm run fixtures
npm run dev
```

For HTTPS cloning, use `https://github.com/vgo1012/VgoOffice.git`.
Run only Docs with `npm run dev:docs`, or build all editors and the shell
with `npm run build:all`.

### Build a Windows installer

Windows packaging expects the spreadsheet executable at
`apps/sheets/native/xlsx-engine/target/x86_64-pc-windows-gnu/release/xlsx-sidecar.exe`.
Build that Rust target with a matching GNU linker, or stage a Windows native
executable at that path. For a default Windows Rust build writing to
`target/release`, run these commands in PowerShell from the repository root:

```powershell
npm run native:build -w @genoffice/sheets
New-Item -ItemType Directory -Force apps/sheets/native/xlsx-engine/target/x86_64-pc-windows-gnu/release
Copy-Item apps/sheets/native/xlsx-engine/target/release/xlsx-sidecar.exe apps/sheets/native/xlsx-engine/target/x86_64-pc-windows-gnu/release/xlsx-sidecar.exe
npm run dist:win
```

If you selected an explicit Rust target, copy from its actual output directory.
`dist:win` regenerates notices, builds the editors and packages the installer
under `apps/shell/release/`. System OCR helper compilation needs Windows SDK
references; packaging reports missing prerequisites. Signing and publishing
are separate release steps.

[CONTRIBUTING.md](CONTRIBUTING.md) describes the architecture and required
formatting, lint, type, test and license checks. Windows tests include existing
platform-specific failures; a successful package build does not prove every
test or every file format has passed.

## Support the project

If VgoOffice is useful to you, [give the repository a Star](https://github.com/vgo1012/VgoOffice).
Report bugs and feature requests through
[GitHub Issues](https://github.com/vgo1012/VgoOffice/issues). Include the app
version, operating system and reproduction steps; remove confidential data
from sample documents.

## Languages

[English](README.md) · [简体中文](docs/i18n/README.zh-CN.md) · [繁體中文](docs/i18n/README.zh-TW.md) · <!-- lang-switcher -->
[Español](docs/i18n/README.es.md) · [Português (Brasil)](docs/i18n/README.pt-BR.md) ·
[Deutsch](docs/i18n/README.de.md) · [Français](docs/i18n/README.fr.md) ·
[한국어](docs/i18n/README.ko.md) · [日本語](docs/i18n/README.ja.md) · <!-- lang-switcher -->
[العربية](docs/i18n/README.ar.md) · [Русский](docs/i18n/README.ru.md) ·
[Italiano](docs/i18n/README.it.md) · [Nederlands](docs/i18n/README.nl.md) ·
[Polski](docs/i18n/README.pl.md) · [Čeština](docs/i18n/README.cs.md) ·
[Bahasa Indonesia](docs/i18n/README.id.md) · [Bahasa Melayu](docs/i18n/README.ms.md) ·
[ไทย](docs/i18n/README.th.md) · [हिन्दी](docs/i18n/README.hi.md) · [עברית](docs/i18n/README.he.md)

## Source and license

VgoOffice is based on [GenOffice by genspark-ai](https://github.com/genspark-ai/genoffice).
Customizations include branding, theme defaults, removal of account-login
entry points and Windows compatibility fixes. The upstream engines are not
claimed as code developed from scratch by this project.

The open-source core is covered by [Apache License 2.0](LICENSE).
Original copyright and attribution remain in [NOTICE](NOTICE), with dependency
notices included in distributions. The reserved `ee/` directory has a
[separate license](ee/LICENSE) and is not covered by the core's Apache-2.0 terms.
The Apache license does not grant upstream name or logo trademark rights.

Thanks to the upstream contributors and Electron, React, Univer,
Tiptap/ProseMirror, PDFium, pdf.js, CodeMirror, Konva, calamine, IronCalc and
the other open-source projects behind the suite.
