<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Installing VgoOffice

[Releases](https://github.com/vgo1012/VgoOffice/releases) — Use an installer attached to a release. This page does not imply that a GitHub binary has already been published. Local builds are unsigned unless signing credentials are provided.

## Before you install

This customized edition has been tested on Windows x64. macOS and Linux source targets remain, but this edition has not been validated on those platforms. Choose a package only when its release explicitly supports your operating system.

## Install and start

1. Save open documents and close the previous version before upgrading.
2. Run the Windows .exe installer and complete installation.
3. Start VgoOffice from its desktop or Start menu shortcut.

The installer stores resources once, so normal startup avoids unpacking a portable executable each time. Copying only VgoOffice.exe omits required editor resources.

## Upgrading and preferences

Upgrades retain the existing Eoffice installation identity and profile directory. A folder still named Eoffice is expected for compatibility. In Settings → General, select light, dark or system appearance; the default background is light blue-gray. Document colors are controlled separately.

## Your version and project

Settings → About shows your installed version and links to the VgoOffice project. Give the repository a Star if it helps you. Update availability depends on the build configuration; check the project's Releases page when in-app updates are unavailable.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Command line and AI

The compatibility command remains genoffice. Settings → Integrations shows its installed path and integration setup. Run the command below using that path or after adding the CLI to PATH.

```sh
genoffice --version
```

Desktop account login has been removed. Configure your own model API, an OpenAI-compatible endpoint or an installed Codex CLI. Third-party authentication and usage fees remain separate; local editing needs no VgoOffice account.

[Integration settings](help://settings-integrations) · [AI models](help://ai-models)
