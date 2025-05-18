# MMDD – Modèle de Modèle de Données Détail

## Projet : [Nom du projet]
**Version :** 1.0  
**Auteur(s) :** [Nom(s)]  
**Date :** [JJ/MM/AAAA]  
**Validé par :** [Responsable métier / Architecte données]

---

## Table des matières

1. [Introduction](#1-introduction)
2. [Objectifs du MMDD](#2-objectifs-du-mmdd)
3. [Vue d’ensemble du modèle de données](#3-vue-densemble-du-modèle-de-données)
4. [Dictionnaire de données](#4-dictionnaire-de-données)
5. [Modèle conceptuel de données (MCD)](#5-modèle-conceptuel-de-données-mcd)
6. [Modèle logique de données (MLD)](#6-modèle-logique-de-données-mld)
7. [Contraintes et règles de gestion](#7-contraintes-et-règles-de-gestion)
8. [Historisation et traçabilité](#8-historisation-et-traçabilité)
9. [Annexes](#9-annexes)

---

## 1. Introduction

- **Contexte :**  
  [Décrire le projet et pourquoi un modèle de données est nécessaire]

- **Périmètre couvert :**  
  [Données concernées, exclusions éventuelles]

---

## 2. Objectifs du MMDD

- Formaliser les entités métiers manipulées
- Définir les relations entre données
- Décrire les règles de gestion associées aux données

---

## 3. Vue d’ensemble du modèle de données

- **Résumé fonctionnel des entités principales :**
    - `Client` : représente une personne ou une entreprise
    - `Commande` : enregistrement d’un achat

- **Schéma simplifié (vue macro) :**  
  ![Schéma global](/img/logo.svg)

---

## 4. Dictionnaire de données

| Entité       | Attribut         | Type      | Taille | Obligatoire | Description / Contraintes                    |
|--------------|------------------|-----------|--------|-------------|----------------------------------------------|
| Utilisateur  | id               | UUID      | -      | Oui         | Identifiant unique                           |
| Utilisateur  | nom              | String    | 100    | Oui         | Nom de famille                               |
| Utilisateur  | email            | String    | 255    | Oui         | Format : nom@domaine                         |
| Commande     | date_commande    | DateTime  | -      | Oui         | Date de création de la commande              |
| Commande     | statut           | Enum      | -      | Oui         | `En cours`, `Envoyée`, `Annulée`             |

---

## 5. Modèle conceptuel de données (MCD)

- **Diagramme entités / associations :**  
  ![MCD](/img/logo.svg)

- **Exemples d’entités :**
    - `Client`
    - `Commande`
    - `Produit`

- **Exemples de relations :**
    - Un client *passe* plusieurs commandes
    - Une commande *contient* plusieurs produits

---

## 6. Modèle logique de données (MLD)

- **Transformé du MCD vers un modèle relationnel (tables) :**

### Exemple SQL

```sql
CREATE TABLE utilisateur (
  id UUID PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE commande (
  id UUID PRIMARY KEY,
  utilisateur_id UUID REFERENCES utilisateur(id),
  date_commande TIMESTAMP NOT NULL,
  statut VARCHAR(50) CHECK (statut IN ('En cours', 'Envoyée', 'Annulée'))
);
```

- **Clés primaires et étrangères**
- **Normalisation appliquée :** 1NF, 2NF, 3NF (selon le besoin)

---

## 7. Contraintes et règles de gestion

- Une commande ne peut exister sans un utilisateur associé.
- Le champ `email` doit être unique et respecter le format email.
- Une commande ne peut être "Envoyée" que si elle contient au moins un produit.
- Le champ `statut` est contrôlé par une énumération.
- La suppression logique est utilisée pour les entités sensibles (`deleted_at`).

---

## 8. Historisation et traçabilité

- **Colonnes d’audit :**
    - `created_at` (timestamp de création)
    - `updated_at` (dernière mise à jour)
    - `deleted_at` (suppression logique)

- **Journalisation :**
    - Historique des changements critiques sur les entités clés.
    - Mécanisme de versioning si nécessaire (`version`, `revision_id`, etc.).

---

## 9. Annexes

- Modèle physique (MPD).
- Fichier source du MCD (PowerDesigner, dbdiagram.io, etc.).
- Jeux de données exemples.
- Glossaire des termes métier utilisés.
- Documentation liée aux API manipulant ces entités.

---
