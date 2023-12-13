# <p align="center" >Vroomeco</p>

# Installation

- installer php ( v8 )
- installer [Composer](https://getcomposer.org/)
- vérifier que `extension=fileinfo` dans C:\tools\php82\php.ini ( si windows ) est bien décommenté ( enlever le ; )
- pareil pour `extension=pdo_mysql` ( si vous êtes sur Ubuntu, à s'assurer que le driver php_mysql est bien installé )
- Lancer le script d'installation dans le dossier vroomeco:
( NOTE: essayez de le lancer à chaque pull d'ailleurs)

### A faire lors d'un clone github : 
```bash
composer install                          | Installe tout les packages laravel 

yarn                                      | Installe tout les packages nodes 


```
Créé le ```.env```  a partire de ```.env.exemple``` 


```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel (à modifier)
DB_USERNAME=root
DB_PASSWORD=
```
Puis faire la commande suivante : 
```
php artisan migrate     |  Crée le env et migres tout sur la Base de Donner 
```
En production : ```yarn build``` 

En dévelopement : ```yarn dev``` (permet de charger a chaque modification)


### route vers les dossier utiles

Name| Route | utilisation
:----------------|------------- |-------------:
 React JS | `/ressource/js` | <p align="center"></p>
 route front | `/route/web.php` | <p align="center"></p>
 route back | `/route/api.php` | <p align="center"></p>



