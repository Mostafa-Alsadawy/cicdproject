#!/usr/bin/env bash
echo "start configurations for store api elastic beanstalk"
echo "1_ first step initiliazation"
eb init storeapi --platform node.js --region us-east-1
echo "2_ second step use the enviroment"
eb use storeapi-dev 
echo "3- third step adding deploy config for elasticbeanstalk config.yml"
cd ./.elasticbeanstalk && echo -e "deploy: \n   artifact: ./www/Archive.zip" >> config.yml && cd ..
echo "4- Forth step deploy application"
eb deploy

# For local enviroment
# echo "final step add enviromental variables"
# eb setenv NODE_ENV=dev HOST=database-1.cc5q73rknskb.us-east-1.rds.amazonaws.com DB_PORT=5432 DATABASE=postgres DATABASE_TEST=store_test DB_USER=postgres PASSWORD=Aa123456 PEPPER=secretpass SALT_ROUNDs=12 TOKEN_SECRET=topsecret

#for circle ci
echo "final step add enviromental variables"
eb setenv NODE_ENV=$NODE_ENV HOST=$HOST DB_PORT=$DB_PORT DATABASE=$DATABASE DATABASE_TEST=$DATABASE_TEST DB_USER=$DB_USER PASSWORD=$PASSWORD PEPPER=$PEPPER SALT_ROUNDs=$SALT_ROUNDs TOKEN_SECRET=$TOKEN_SECRET
