**Objectif recruteur :** Evaluer la qualité du code, l’adaptabilité du candidat sur une problématique concrète.
Durée : 48h

**Objectif candidat :** Développer une application AngularJS permettant d’afficher une map Google Maps, via l’api Google Maps v3.

**Consignes :** L’application sera composée d’une vue centrale (celle de la carte google maps), ainsi que d’une vue latérale.

Cette vue latérale devra implémenter 3 fonctionnalités :

1. **Ajouter un cercle :** Cette fonctionnalité, qui permettra à l’utilisateur de dessiner un ou plusieurs cercles sur la carte, sera composée : 

  1.1. D’un input text où l’utilisateur pourra saisir le rayon du cercle voulu.

  1.2. D’un input text où l’utilisateur pourra saisir le centre géographique du cercle voulu.

  1.3 - D’un bouton “Dessiner le cercle”, qui dessinera le cercle sur la carte et réinitialisera les inputs précédents afin d’autoriser
la création de nouveaux cercles.

2. **Ajouter un polygone :** Cette fonctionnalité, qui permettra à l’utilisateur de dessiner un ou plusieurs polygones sur la carte,
sera composée:

  2.1 D’un input text où l’utilisateur pourra saisir les coordonnées du polygone désiré. Les couples {latitude;longitude} devront être séparés par le symbole “+”. Les latitudes et les longitudes de chaque couple devront être séparées par le symbole “$"

  Exemple:
lat1$lon1+lat2$lon2+lat3$lon3

  2.2. D’un bouton “Dessiner le cercle”, qui dessinera le cercle sur la carte et réinitialisera les inputs précédents.


3. **Réinitialiser la carte :** Cette fonctionnalité est composé d'un unique bouton qui permettra à l'utilisateur de détruire les formes géométriques
déjà dessinées, et de vider les inputs des précédentes fonctionnalités. Un clic sur ce bouton revient donc à réinitialiser l'interface.


### Unités
Le système WGS84 sera utilisé pour les coordonnées géographiques.
L’unité de distance acceptée pour la création des cercles est le kilomètre.

### Notes
Une grande attention sera portée à la propreté/qualité du code, au respect des coding styles javascript,
au découpage judicieux des différentes vues angular composant l'application, à l’indentation..

Le design de l’application n’est pas nécessaire (pas de CSS requis)
