<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Installer VgoOffice

[Versions](https://github.com/vgo1012/VgoOffice/releases) — Utilisez un installateur joint à une version. Cette page n’indique pas qu’un binaire a déjà été publié sur GitHub. Les compilations locales restent non signées sans identifiants de signature.

## Avant l’installation

Cette édition a été testée sur Windows x64. Les cibles de code macOS et Linux sont conservées, mais cette édition n’a pas été validée sur ces plateformes. Choisissez un paquet uniquement si sa version prend explicitement en charge votre système.

## Installer et démarrer

1. Enregistrez les documents ouverts et fermez l’ancienne version avant la mise à niveau.
2. Exécutez l’installateur .exe pour Windows et terminez l’installation.
3. Démarrez VgoOffice depuis le raccourci du bureau ou du menu Démarrer.

L’installateur stocke les ressources une seule fois, ce qui évite de décompresser un exécutable portable à chaque lancement. Copier uniquement VgoOffice.exe omet des ressources indispensables aux éditeurs.

## Mises à niveau et préférences

Les mises à niveau conservent l’identité d’installation et le dossier de profil Eoffice. Un dossier portant toujours ce nom est normal pour la compatibilité. Dans Paramètres → Général, choisissez un thème clair, sombre ou système ; le fond par défaut est bleu-gris clair. Les couleurs des documents se règlent séparément.

## Votre version et le projet

Paramètres → À propos affiche la version installée et le lien du projet VgoOffice. Ajoutez une Star au dépôt s’il vous aide. Les mises à jour dépendent de la configuration de compilation ; consultez les versions du projet si elles ne sont pas disponibles dans l’application.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Ligne de commande et IA

La commande compatible reste genoffice. Paramètres → Intégrations indique son chemin installé et la configuration. Exécutez la commande ci-dessous avec ce chemin ou après avoir ajouté la CLI au PATH.

```sh
genoffice --version
```

La connexion au compte de l’application a été supprimée. Configurez votre API de modèles, un point de terminaison compatible OpenAI ou un Codex CLI installé. L’authentification externe et les frais restent distincts ; l’édition locale ne nécessite aucun compte VgoOffice.

[Paramètres d’intégration](help://settings-integrations) · [Modèles d’IA](help://ai-models)
