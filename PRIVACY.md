<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# VgoOffice Privacy

Last updated: October 14, 2026

VgoOffice opens, edits, saves and converts documents locally. Ordinary document
editing does not upload files. AI, search and media features use the service
provider or local CLI you configure; their requests can contain your prompt,
selected content or referenced files. Check the selected provider's policy and
company requirements before using it with internal documents.

## Account and local settings

This edition has no VgoOffice or Genspark application-account login. A service
provider or an existing CLI may still require its own API key or authentication.
API configuration is stored in the local application profile. Treat that profile
and its backups as private; do not commit or publish them.

## Usage analytics

The provided company Windows builds do not include analytics credentials and
use a no-op tracker. A builder can explicitly configure an analytics destination
through the existing build metadata. Without that metadata, no usage analytics
is sent, even if the preference is enabled.

When analytics is configured, it can be disabled under **Settings → General →
Send anonymous usage statistics**. An explicit opt-out is remembered.

### Events and parameters

When enabled, the app sends these events:

- `install_first_launch` — first analytics-enabled use of an anonymous client id
- `app_launch` — no event-specific parameter
- `file_open` — file extension
- `file_new` — document kind

The payload includes app version, platform, OS version, UI language, a
per-process session id, a fixed engagement-time value, and an anonymous install
UUID. The operating system's country code may be included. The payload does not
include document contents, file names, file paths, API keys or account identity.

## Network information

AI requests go to your configured provider. A configured analytics destination
uses the existing Google Analytics 4 Measurement Protocol over HTTPS. Network
recipients can see the connection's public IP address and transport metadata;
VgoOffice does not add an IP address to the analytics payload.

Optional updates, font downloads, model discovery and external links use their
configured destinations when those features are used. Opening the project link
in About opens https://github.com/vgo1012/VgoOffice in your browser; it does not
submit a Star or sign in to GitHub on your behalf.

## Project origin

VgoOffice is derived from the Apache-2.0-licensed GenOffice core. Original
copyright and third-party notices are retained in LICENSE and NOTICE.
