# <h1 align="center" >Vroomeco</h1>

# Installation

- installer php ( v8 )
- installer [Composer](https://getcomposer.org/)
- vérifier que `extension=fileinfo` dans C:\tools\php82\php.ini ( si windows ) est bien décommenté ( enlever le ; )
- pareil pour `extension=pdo_mysql` ( si vous êtes sur Ubuntu, à s'assurer que le driver php_mysql est bien installé )
- même manipulation pour `extension=zip`.
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
```bash
php artisan migrate     |  Crée le env et migres tout sur la Base de Donner 

php artisan key:generate   | génére une clé d'application 

php artisan serve       |   lance le server laravel 

yarn dev                |  lancer react js (à lancer dans un terminal à part)
```
En production : ```yarn build``` 

En dévelopement : ```yarn dev``` (permet de charger a chaque modification)


### route vers les dossier utiles

| Name | Route | <p align="center">utilisation</p> |
| :--- | ---- | ---: |
| React JS | `/ressource/js` | <p align="center"></p> |
| route front | `/route/web.php` | <p align="center"></p> |
| route back | `/route/api.php` | <p align="center"></p> |
| route Controller | `/app/Http/Controllers` | <p align="center"> A ne pas toucher sauf si vous faite le back</p> |

### Route 

| Route | Description | API |
| ---- | ---- | ---- |
| `/` |  | <p align="center" >❌</p> |
| `/home` |  | <p align="center" >❌</p> |
| `/login` |  | <p align="center" >❌</p> |
| `/register` |  | <p align="center" >❌</p> |
| `/logout` |  | <p align="center" >❌</p> |
| `/trajects` |  | <p align="center" >❌</p> |
| `/aboout-us` |  | <p align="center" >❌</p> |
| `/contact` |  | <p align="center" >❌</p> |
| `/api/roads` | Affiche tous les trajet disponible | <p align="center" >✅</p> |
| `/api/create-roads` | Crée un nouveau traject | <p align="center" >✅</p> |
| `/api/search` | recherche des traject spécific | <p align="center" >✅</p> |
| `/api/roads/{uuid}` | affiche 1 trajet bien spécifique part rapport a son uuid | <p align="center" >✅</p> |

### Ajout des Seeder : 
#### Seeder Utilisateur : 

```bash
    php artisan db:seed --class=UsersTableSeeder
```
Donner rentrer dans la base de donnée 
```php
        DB::table('users')->insert([
            'name' => 'John Doe',
            'username' => 'johndoe',
            'email' => 'johndoe@example.com',
            'phone_number' => '123456789',
            'password' => Hash::make('password'), 
            'biographie' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

```
#### Seeder Cars (voiture utilisateur) : 

```bash
    php artisan db:seed --class=CarsSeeder
```

Donner rentrer dans la base de donnée 

```php
        DB::table('cars')->insert([

            [

                'user_id' => 1,

                'marque' => 'Toyota',

                'model' => 'Corolla',

                'type' => 'Sedan',

                'colors' => 'Blue',

                'annee' => '2020-01-01',

                'immatriculation' => 'ABC123',

                'created_at' => now(),

                'updated_at' => now(),

            ],

        ]);
```

### Donner de test API 

#### Cree un nouveau trajet : 
```json
{
    "created_by": "1",
    "vehicule": "1",
	"nombre_place": "3",
    "ville_depart": "Paris",
    "ville_arriver": "Lyon",
    "date_traject": "2024-03-08",
	  "heure_depart": "08:00:00"
}
```

#### Rechercher un trajet : 

```json
{
    "ville_depart": "",
    "ville_arriver": "",
    "date_traject": ""
}
```

#### Diagram de la bdd 

```mermaid
---
title: Diagramme de la Base de Donnée 
---
erDiagram
    USERS {
        Id INT
        Name STRING
        Username STRING
        Email STRING
        Email_verified_at DATETIME
        Phone_number STRING
        Password STRING
        Created_at DATETIME
        Updated_at DATETIME
        token STRING
        Biographie TINYTEXT
        Roles STRING
    }

    TRAJECT {
        Traject_ID INT
        uuid INT
        Created_By INT
        Vehicule INT
        Ville_depart STRING
        Ville_arriver STRING
        Date_traject DATE
        heure_depart DATE 
        heure_arriver DATE
        Estimated_time TIME
        Distance INT
    }

    USERS_TRAJECTS {
        User_traject_ID INT
        User_Id INT
        Traject_uuid INT
        Confirmed_at DATE
    }

    CAR {
        Id INT
        User_id INT
        Marque STRING
        Model STRING
        Type STRING
        Colors STRING
        Annee DATE
        Immatriculation STRING
    }

    PERSONAL_ACCESS_TOKENS {
    id INT 
    tokenable_id INT
    tokenable_type STRING
    name STRING
    token STRING 
    abilities TEXT
    last_used_at TIMESTAMP
    expires_at TIMESTAMP
    created_at TIMESTAMP
    updated_at TIMESTAMP
    }

    USERS  ||--o{ TRAJECT : "Created_By (User_Id)"
    TRAJECT ||--o{ USERS_TRAJECTS : "Traject_uuid"
    USERS ||--o{ USERS_TRAJECTS : "User_Id"
    USERS ||--o{ CAR : "User_id"
    PERSONAL_ACCESS_TOKENS || --o{ USERS : token

```
