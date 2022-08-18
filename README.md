Install Following Software
--------------------------
``
 Node.js
``

Node/Npm Version Check
----------------------
``
node -v
``

``
npm -v
``

Install Angular CLI
-------------------
``
npm install -g @angular/cli
``

NG Version Check
----------------
``
ng v
``

Create Project & Run
--------------------
``
ng new project_name
``

``
cd project_name
``

``
ng serve -o
``

Install Bootstrap/FontAwesome
-----------------------------
``
npm install bootstrap @popperjs/core @fortawesome/fontawesome-free
``

Copy Link Tag CDN > Index.html
------------------------------
``
cdnjs.com/libraries/font-awesome
``

Configure CSS & Fontawesome > angular.json
------------------------------------------
"styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css", "node_modules/@fortawesome/fontawesome-free/css/all.css", "src/styles.css"]

"scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.js"]

Configure Google Fonts > styles.css
-----------------------------------
@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');

body {
    font-family: 'Fredoka', sans-serif;
}

Create Component
----------------
``
ng generate component --skip-tests=true component_name
``

Create Service
--------------
``
ng g s services/contact
``

Node Packages Installed
-----------------------
``
npm install
``

Install BackEnd Json Server
---------------------------
``
npm init -y
``

``
npm install json-server
``

Run DB.Json > server -> package.json 
------------------------------------
``
"start": "json-server --watch db.json -p 4000"
``

``
npm start
``
