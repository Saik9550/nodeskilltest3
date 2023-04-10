# nodeskilltest3

#Prerequisites
Before you begin, ensure that you have the following installed on your local machine:

Node.js
MongoDB



#Install the dependencies:

npm install


Start the server:

npm start

The server should now be running on http://localhost:8000.


Install Postman to test the apis

#Create API:
http://localhost:8000/api/v1/products/create

sample create request body: {
    "name": "pen",
    "quantity": 10
}

set the headers for create Api as key Content-Type and value as application/json  and use Post API


# get Products
http://localhost:8000/api/v1/products/create   and use get API

#Update Product quantity
http://localhost:8000/api/v1/products/<productID>/update_quantity/?number=6


#Delete Product
http://localhost:8000/api/v1/products/delete/<productID>


