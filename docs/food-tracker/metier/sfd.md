# Spécifications Fonctionnelles Détaillées (SFD)

## Projet : FoodTracker
**Version :** 1.0  
**Auteur(s) :** Louis PERON  
**Date :** 23/05/2025   

---

## Table des matières

1. [Introduction](#1-introduction)
2. [Description générale du système](#2-description-générale-du-système)
3. [Fonctionnalités détaillées](#3-fonctionnalités-détaillées)
4. [Règles de gestion transverses](#4-règles-de-gestion-transverses)
5. [Navbar, Header et menuing utilisateur (UI/UX)](#5-navbar-header-et-menuing-utilisateur)
6. [Glossaire](#6-glossaire)

---

## Features

1. [Création de repas](#31-page-création-de-repas)
2. [Planning de repas](#32-page-planning-de-repas)
3. [Dashboard](#33-page-dashboard)
4. [Profil Utilisateur](#34-page-profil-utilisateur)
5. [Authentification](#35-page-authentification)

---

## 1. Introduction

- **Contexte :**  
  
  Suivi de la nutrition + macro tracking des nutriments sur une plage donnée.

- **Objectifs du document :**  
  
  Décrire le produit qui s'adresse à différents profils de personnes :
Sportifs, personnes voulant faire un régime ...

- **Portée fonctionnelle :**

  Toutes les features / écrans disponibles dans notre application.

---

## 2. Description générale du système

- **Vue d’ensemble fonctionnelle :**  
  
  La partie WEB / Mobile echange différents flux selon la ressource demandée avec les APIs en fonction des features.


- **Architecture fonctionnelle :** 

  ![Flux Application](/img/foodTracker/flux_application.JPG)

- **Environnements concernés :**
    - Web
    - Mobile (à voir)
    - API

---

## 3. Fonctionnalités détaillées

### 3.1 Page Création de repas

- **🔰 Objectif :**  
  
  1. Consulter une banque d’aliments 
  2. Créer/modifier un aliment (nom, macros, portion)
  3. Composer des repas à partir d’aliments
  4. Sauvegarder des repas réutilisables

- **🔰 Pré-conditions :**
    - L'utilisateur doit être enregistré
- **🔰 Tests d'acceptance :**
- Je peux :
  - choisir si je veux ajouter un repas ou un aliment.
  - ajouter des aliments dans mon assiette
  - changer le nom de mon repas
  - enregistrer mon repas
  - ajouter un aliment
  - changer les valeurs nutritionnelles d'un aliment
  - changer le nom de mon aliment
  - utiliser mon aliment dans le mode Repas et l'ajouter dans mon assiette

- **🔰 Maquette d’écran :**  
  ![Maquette](/img/foodTracker/ecran/crafter.JPG)
- **🔰 Modification d'un aliment**

  **Workflow ➡️ [RG 001](#rg001), [RG 002](#rg002)**

  Lorsqu'on appui sur le bouton d'édition d'une des lignes de la colonne d'aliments (entouré d'un cercle bleu dans l'image ci-dessous),
alors une popup d'édition s'ouvre.

  ![Maquette](/img/foodTracker/ecran/action_popup_modification.JPG)

  On peut dans cette popup, modifier toutes les valeurs de l'aliment en question. Cela permet à l'utilisateur de gérer ses macros nutriments en fonction de ce qu'il peut consommer.

  ![Maquette](/img/foodTracker/ecran/popup_modification.JPG)

---

### 3.2 Page Planning de repas 

- **🔰 Objectif :**

  1. Calendrier hebdomadaire
  2. Assignation de repas à un jour / moment (petit-déjeuner, déjeuner, dîner)
  3. Modification a posteriori : portion, repas remplacé

- **🔰 Pré-conditions :**
  - L'utilisateur doit être enregistré

- **🔰 Tests d'acceptance :**

- **🔰 Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

---

### 3.3 Page Dashboard

- **🔰 Objectif :**

  - Vue sur :
  - La semaine (repas consommés)
  - Graphes de macros :
    - Protides
    - Glucides
    - Lipides
    - Calories
  - Poids (courbe dans le temps)
  - Objectif vs réel
  - Vue mois / année (filtrable)

- **🔰 Pré-conditions :**
  - L'utilisateur doit être enregistré

- **🔰 Tests d'acceptance :**

- **🔰 Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

---

### 3.4 Page Profil utilisateur

- **🔰 Objectif :**

  - Nom, email, sexe, âge, poids, taille, niveau activité
 
  - Objectif nutritionnel (maintien, perte, prise)
 
  - Objectifs macros personnalisés
 
  - Historique de poids

- **🔰 Pré-conditions :**
  - L'utilisateur doit être enregistré

- **🔰 Tests d'acceptance :**

- **🔰 Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

---

### 3.5 Page Authentification

- **🔰 Objectif :**

  - Login, inscription

  - Reset de mot de passe

  - Sécurité token / sessions

- **🔰 Pré-conditions :**
  - L'utilisateur doit être enregistré

- **🔰 Tests d'acceptance :**

- **🔰 Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

---

*(Répéter la section 3.1 pour chaque fonctionnalité)*

---

## 4. Règles de gestion transverses

📋 **Création de repas**

| <a name="rg001"></a>Règle     | Objectif                                                                                                                                                                                                                                                                                                       | Ecran                                                             |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| <a name="rg002"></a>**RG001** | **Bouton d'édition d'un aliment**  <br/>Cliquer sur le bouton d'édition d'un aliment représentant un encart de la liste des aliments permet d'ouvrir la popup ([RG002](#rg002)) d'édition des métriques d'un aliment.                                                                                          | ![Maquette](/img/foodTracker/ecran/action_popup_modification.JPG) |
| <a name="rg003"></a>**RG002** | **Popup d'édition des métriques d'un aliment**  <br/>La popup d'édition des métriques d'un aliment permet de modifier toutes les valeurs nutritives de cet aliment. Cela permet à l'utilisateur d'avoir une gestion beaucoup plus fine sur sa consommation en glucides, calories, proteines, vitamines etc ... | ![Maquette](/img/foodTracker/ecran/popup_modification.JPG)        |

---

## 5. Navbar, Header et menuing utilisateur

- **Principes de navigation :**  
  [Ex : menu fixe, navigation par onglet…]

- **Wireframes :**  
  ![Wireframe](/img/logo.svg)

---

## 6. Glossaire

| Terme          | Définition                                    |
|----------------|-----------------------------------------------|
| API            | Interface de Programmation d’Application      |
|            |  |

---


