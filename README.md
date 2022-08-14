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
npm install bootstrap @fortawesome/fontawesome-free
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

Create Component
----------------
``
ng generate component --skip-tests=true header
``
