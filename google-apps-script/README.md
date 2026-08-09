# Réception des commandes dans Google Sheets

Ce script reçoit les commandes envoyées par le site Bayti Pack et les ajoute
automatiquement dans une feuille Google Sheets, avec :

- toutes les informations de la commande (nom, téléphone, ville, adresse, pack, quantité, total),
- la **langue choisie** par le client pendant la commande (français ou arabe),
- un **lien WhatsApp** prêt à l'emploi vers le **numéro du client** (celui qu'il a
  renseigné dans le formulaire), avec un message de remerciement, le récapitulatif
  de sa commande, et une demande de confirmation par réponse — dans la langue
  qu'il a choisie pendant sa commande. Il suffit de cliquer sur le lien pour ouvrir
  WhatsApp avec ce message déjà écrit, prêt à envoyer.

## 1. Créer la feuille Google Sheets

1. Allez sur [sheets.google.com](https://sheets.google.com) et créez une nouvelle feuille de calcul.
2. Donnez-lui un nom, par exemple **"Bayti Pack — Commandes"**.

## 2. Installer le script

1. Dans la feuille, allez dans **Extensions > Apps Script**.
2. Supprimez le contenu par défaut du fichier `Code.gs` et collez-y le contenu du
   fichier `Code.gs` de ce dossier.
3. Cliquez sur l'icône de disquette (💾) pour enregistrer.

## 3. Déployer le script comme application web

1. En haut à droite, cliquez sur **Déployer > Nouveau déploiement**.
2. Cliquez sur l'icône ⚙️ à côté de "Sélectionner le type" et choisissez **Application Web**.
3. Configurez :
   - **Exécuter en tant que** : Moi (votre compte Google)
   - **Qui a accès** : Tout le monde
4. Cliquez sur **Déployer**.
5. Google vous demandera d'autoriser le script (car il modifie votre feuille) —
   cliquez sur **Autoriser l'accès**, choisissez votre compte, puis sur
   **Paramètres avancés > Accéder à [nom du projet] (non sécurisé)** si un
   avertissement apparaît (c'est normal, c'est votre propre script).
6. Une fois déployé, copiez l'**URL de l'application Web** — elle ressemble à :
   `https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXX/exec`

## 4. Connecter le site à cette URL

Sur la plateforme d'hébergement du site (Vercel, ou autre), ajoutez une variable
d'environnement :

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXX/exec
```

Puis redéployez le site. Une fois cette variable configurée, chaque commande
passée sur le site sera automatiquement ajoutée à votre Google Sheets, avec la
langue du client et le lien WhatsApp prêt à l'emploi.

## Tester sans passer par le site

Dans l'éditeur Apps Script, vous pouvez sélectionner la fonction `testDoPost`
dans le menu déroulant en haut, puis cliquer sur **Exécuter**. Une ligne de
test apparaîtra dans votre feuille "Commandes".

## Mettre à jour le script plus tard

Si vous modifiez `Code.gs` dans Apps Script, pensez à créer un **nouveau
déploiement** (Déployer > Gérer les déploiements > icône crayon > Nouvelle
version) pour que les changements soient pris en compte par le site.
