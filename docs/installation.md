# INSTALLATION:

all installation process must be in this order to work



## Pre-Installation:
* make sure **Node.JS** is installed on your machine prefered Latest version Or LST version 
this app was tested on version 17.9.0 and 16.*.*

* make sure **Yarn** or **npm** is installed on your machine : 
this project uses **Yarn** but if want to use **npm** change scripts on package json on api.

* make sure you have **bash shell** and **zip** packages.

* finally make sure you are on the root folder for your application 

## Behined the scence :
this scripts runs tow sctipts :
- for store api : that change directory to storeapi/ sub folder and runs script to preform the intended changes on the backend .
- for store frontend : that change directory to storefrontend/ sub folder and runs script to preform the intended changes on the frontend .


## Installation process :
it quite easy accually you just have to run on terminal:
```
    yarn install
```
Or 

```
npm install
```



## Build process :

use command : yarn build 

## Test :

use command : yarn test:api to test backend 
use command : yarn test:frontend to test frontend

## Deploy :

use command : yarn deploy 