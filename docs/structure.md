# Project structure :
this is a fullstack web project divided on tow parts 
* store front end (React App).
* store backend (API).

## Store FrontEnd :
contains :
- Src folder : which hold all javascript files for React logic.
- Public folder : which hold all html poilarblate ,images , favicons , mainfist.

### after installation : 
- node_modules : this folder contain libs files.

### after build :
- build folder : this containes production ready files.



## Store API :

contains :

- bin : have bash script file to handel deploying
- migrations : folder contain file of database migrations
- spec : folder contain support/jasmine.json config file for jasmine tests
- src : floder contains all src code for the API :
    - config : have config.js file which make env variables accessiable through the code .
    - handelers : have files that define Routes and the logic when route requested.
    - middelwares : have one middelware for authentication.
    - models : have files to handel all database logic for on object.
    - services : handel database logic for more the one object.
    - database.ts : file which make connection to database.
    - server.ts : initlize the server and start routing .
- .env : this is a local file not suppose to be on github should have all env vars.
- database.json : configuration file for db-migrate

### after installation : 
- node_modules : this folder contain libs files.

### after build :
- www folder : this containes production files and Archive.zip which used for deploying.

