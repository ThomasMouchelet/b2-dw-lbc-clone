# TODO V1

***Frontend :***
lister les posts (image + title + content)

***Backend :***
Upload plusieurs images (promise.all)
# TODO V2

***Frontend :***
- Création d'une route pour affiche la single page du post
- Afficher toutes les images sur la single page
# TODO V3

***Frontend :***
Création d'un post via un formulaire (avec images). Il faut envoyer les données avec un [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData). 

> Utilisation du package [react-dropzone](https://react-dropzone.js.org).
# TODO V4

***Backend :***
Ajouter la localisation pour chaque post (adresse, ville, code, postale, lat, lng) avec le package use-places-autocomplete

***Frontend :*** Formater les adresses avec Google Places API

> Utilisation de Google Places API : [exemple](https://ride.readme.io/docs/google-place-autocomplete), [exemple2](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete)

| Parameter | Type     |
| :-------- | :------- |
| `formatted_address` | `string` |
| `street_number` | `string` |
| `route` | `string` |
| `city` | `string` |
| `administrative_area_level_1` | `string` |
| `administrative_area_level_2` | `string` |
| `country` | `string` |
| `postal_code` | `string` |
| `lat` | `string` |
| `lng` | `string` |


# TODO V5

***Frontend :***
Ajouter un bouton pour afficher un caroussel d'images dans une modal. (webdesign/modal.mov) 
# TODO V6

***Frontend :***

Adapter l'upload des images en fonction du design (webdesign/upload-form.mov) : 
- 2 lignes de 4 colonnes
- Le premier carré ne contient pas d'image.
- Possibilité de supprimer des images
- Peut importe le nombre d'image upload, le nombre de carré ne change pas.
- Les images upload sont situé dans les premiers carrés.
- Lors de l'upload, les images se cumulent. S'il a un uplaod de 1 image alors que deux images étaient déjà présentes alors il y aura trois images dans le Drop zone.

> Pour le delete des images dans le dropZone : [e.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
# TODO V7

***Frontend :***
Step form : 
- Step 1 : title + content + location
- Step 2 : upload files

> Vous pouvez utiliser les [stepper MUI](https://mui.com/material-ui/react-stepper/)
# TODO V8

***Frontend :***
Sur la page d'accueil, ajouter une barre de recherche pour filtrer les posts en fonction de l'adresse.

***Backend :***
Création d'un filtre sur la route "/posts" pour filtrer les posts en fonction de la location.

```http
GET /posts?lat=45.09484&lng=-0.030904
```

# TODO V9

***Frontend :***
Update post. Possibilité de mettre à jour les champs texte mais également les images. L'ensemble du formulaire doit être prérempli, y compris les images.
***Backend :***
Update post

# TODO V10

***Frontend :***
Géolocalisation : lorsque l'utilisateur charge la page il peut être géolocalisé et le lorsqu'il souhaite ajouter un post, l'input pour l'adresse est automatiquement rempli [documentation](https://www.w3schools.com/html/html5_geolocation.asp)