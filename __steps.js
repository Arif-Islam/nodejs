/* 
    ----------------------------------------
    Basic Server Setup
    1. create a folder (manually or mkdir)
    2. open commnad line to that folder
    3. npm init or npm init -y
    4. npm install express
    5. create index.js

    -----------------------------------------
    GET
    -----------------------------------------
    1. install cors, use cors as middleware

    -----------------------------------------
    POST
    -----------------------------------------
    1. use express as middleware
    -----------------------------------------
    For Express/Node Server
    -----------------------------------------
    1. require express
    2. create app variable
    3. declare port
    4. set app.get('/)
    5. listen to port
    6. node index.js
    7. check browser for that port

    -----------------------------------------
    1. Create a node server with 5 steps
    -----------------------------------------
    1.1. create folder
    1.2. npm init
    1.3. npm i express cors mongodb
    1.4. script-dev: nodemon index.js
    1.5. create index.js
    1.6. use 5 steps to create a node server

    -----------------------------------------
    Create Atlas Account
    -----------------------------------------
    1. sign up with google
    2. create cluster
    3. create user arif and password
    4. Network Acces -> ip address: allow all
    5. database > connect > code copy paste in index.js

    -----------------------------------------
    CRUP Operations
    -----------------------------------------
    1. node mongodb crud > fundamentals
    2. create async run function

    ------------------------------------------------------
    Integrate sending data from client side to server side
    ------------------------------------------------------
    1. client side - create form
    2. onSubmit get form data and create user object
    3. on Server : create user POST method to receive data on the backend
    4. on client side: set fetch with POST, headers, body
    5. make sure you return a json from the POST API

    ------------------------------------
    Load data to the client side
    ------------------------------------
    1. create get API on the server side
    2. create a query object 
    3. collection.find(query)
    4. cursor.toArray()
    5. return result
    6. use useEffect as before to load data and show it in the UI

    -----------------------------------
    Delete data 
    -----------------------------------
    

*/