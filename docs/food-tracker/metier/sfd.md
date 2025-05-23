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
5. [Interface utilisateur (UI/UX)](#5-interface-utilisateur-uiux)
6. [Contraintes](#6-contraintes)
7. [Glossaire](#7-glossaire)
8. [Annexes](#8-annexes)

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
  [Décrire brièvement le contexte du projet]

- **Objectifs du document :**  
  [Ce que couvre le document, à qui il s'adresse]

- **Portée fonctionnelle :**  
  [Modules concernés, exclusions éventuelles]

- **Références :**
    - Cahier des charges : [Lien/nom]
    - Documentation technique : [Lien/nom]

---

## 2. Description générale du système

- **Vue d’ensemble fonctionnelle :**  
  [Présentation synthétique du système]

- **Architecture fonctionnelle :**  
  ![Diagramme](/img/logo.svg)

- **Environnements concernés :**
    - Web
    - Mobile
    - API
    - Autres : [...]

---

## 3. Fonctionnalités détaillées

### 3.1 Page Création de repas

- **Objectif :**  
  
  1. Consulter une banque d’aliments 
  2. Créer/modifier un aliment (nom, macros, portion)
  3. Composer des repas à partir d’aliments
  4. Sauvegarder des repas réutilisables

- **Entrées :**  
  

- **Traitements :**
    - Vérification des identifiants
    - Génération de session

- **Sorties :**
    - Redirection vers tableau de bord
    - Message d’erreur en cas d’échec

- **Pré-conditions :**
    - L'utilisateur doit être enregistré

- **Post-conditions :**
    - Session active

- **Exceptions :**
    - Erreur de mot de passe
    - Utilisateur non trouvé

- **Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

- **Diagrammes (facultatif) :**
    - Cas d’utilisation
    - Séquence

---

### 3.2 Page Planning de repas 

- **Objectif :**

  1. Calendrier hebdomadaire
  2. Assignation de repas à un jour / moment (petit-déjeuner, déjeuner, dîner)
  3. Modification a posteriori : portion, repas remplacé

- **Entrées :**


- **Traitements :**
  - Vérification des identifiants
  - Génération de session

- **Sorties :**
  - Redirection vers tableau de bord
  - Message d’erreur en cas d’échec

- **Pré-conditions :**
  - L'utilisateur doit être enregistré

- **Post-conditions :**
  - Session active

- **Exceptions :**
  - Erreur de mot de passe
  - Utilisateur non trouvé

- **Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

- **Diagrammes (facultatif) :**
  - Cas d’utilisation
  - Séquence

---

### 3.3 Page Dashboard

- **Objectif :**

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

- **Entrées :**


- **Traitements :**
  - Vérification des identifiants
  - Génération de session

- **Sorties :**
  - Redirection vers tableau de bord
  - Message d’erreur en cas d’échec

- **Pré-conditions :**
  - L'utilisateur doit être enregistré

- **Post-conditions :**
  - Session active

- **Exceptions :**
  - Erreur de mot de passe
  - Utilisateur non trouvé

- **Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

- **Diagrammes (facultatif) :**
  - Cas d’utilisation
  - Séquence

---

### 3.4 Page Profil utilisateur

- **Objectif :**

  - Nom, email, sexe, âge, poids, taille, niveau activité
 
  - Objectif nutritionnel (maintien, perte, prise)
 
  - Objectifs macros personnalisés
 
  - Historique de poids

- **Entrées :**


- **Traitements :**
  - Vérification des identifiants
  - Génération de session

- **Sorties :**
  - Redirection vers tableau de bord
  - Message d’erreur en cas d’échec

- **Pré-conditions :**
  - L'utilisateur doit être enregistré

- **Post-conditions :**
  - Session active

- **Exceptions :**
  - Erreur de mot de passe
  - Utilisateur non trouvé

- **Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

- **Diagrammes (facultatif) :**
  - Cas d’utilisation
  - Séquence

---

### 3.5 Page Authentification

- **Objectif :**

  - Login, inscription

  - Reset de mot de passe

  - Sécurité token / sessions

- **Entrées :**


- **Traitements :**
  - Vérification des identifiants
  - Génération de session

- **Sorties :**
  - Redirection vers tableau de bord
  - Message d’erreur en cas d’échec

- **Pré-conditions :**
  - L'utilisateur doit être enregistré

- **Post-conditions :**
  - Session active

- **Exceptions :**
  - Erreur de mot de passe
  - Utilisateur non trouvé

- **Maquettes d’écran :**  
  ![Maquette](/img/logo.svg)

- **Diagrammes (facultatif) :**
  - Cas d’utilisation
  - Séquence

---

*(Répéter la section 3.1 pour chaque fonctionnalité)*

---

## 4. Règles de gestion transverses

- Règle RG01 : [ex : un utilisateur ne peut pas réserver deux fois le même créneau]
- Règle RG02 : [ex : la date de livraison ne peut être antérieure à la date de commande]

---

## 5. Interface utilisateur (UI/UX)

- **Principes de navigation :**  
  [Ex : menu fixe, navigation par onglet…]

- **Wireframes :**  
  ![Wireframe](/img/logo.svg)

---

## 6. Contraintes

- **Performance :**
    - Temps de réponse < 2s

- **Compatibilité :**
    - Navigateurs : Chrome, Firefox, Edge

- **Accessibilité :**
    - Conforme RGAA niveau AA

---

## 7. Glossaire

| Terme          | Définition                                    |
|----------------|-----------------------------------------------|
| API            | Interface de Programmation d’Application      |
| RGAA           | Référentiel Général d'Amélioration de l'Accessibilité |

---

## 8. Annexes

- Données de test
- Spécifications techniques associées
- Liste des endpoints API

---

