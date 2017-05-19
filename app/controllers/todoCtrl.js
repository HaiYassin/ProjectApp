/**
 * Déclaration du module todoList
 */
var todoList = angular.module('todoList',[]);


/**
 * Contrôleur de l'application "Todo List" décrite dans le chapitre "La logique d'AngularJS".
 */
todoList.controller('todoCtrl', ['$scope',
    function ($scope) {

        // Pour manipuler plus simplement les todos au sein du contrôleur
        // On initialise les todos avec un tableau vide : []
        var todos = $scope.todos = [];


        var myObj, myJSON, text, obj;

        //Storing data:
        myObj = { "title":"Test1", "date":"01/01/1973", "heure":"13:05PM" };
        myJSON = JSON.stringify(myObj);
        console.log(myJSON)
        localStorage.setItem("testJSON", myJSON);

        //Retrieving data:
        text = localStorage.getItem("testJSON");
        console.log(text)
        obj = JSON.parse(text);
        console.log(obj)
        document.getElementById("titleActionTit").innerHTML = obj.title;
        document.getElementById("titleActionDate").innerHTML = obj.date;
        document.getElementById("titleActionHeure").innerHTML = obj.heure;    

        // Ajouter un todo
        $scope.addTodo = function () {
            // .trim() permet de supprimer les espaces inutiles
            // en début et fin d'une chaîne de caractères
            var newTodo = $scope.newTodo.trim();

            var dateTodo = $scope.dateTodo;
            var heureTodo = $scope.heureTodo;
            //
            // console.log($scope.dateTodo);
            // console.log($scope.heureTodo);

            if (!newTodo.length) {
                // éviter les todos vides
                return;
            }
            todos.push({
                // on ajoute le todo au tableau des todos
                title: newTodo,
                date: dateTodo,
                heure: heureTodo,
                completed: false
            });
            // Réinitialisation de la variable newTodo
            $scope.newTodo = '';
        };

        // Enlever un todo
        $scope.removeTodo = function (todo) {
            todos.splice(todos.indexOf(todo), 1);
        };

        // Cocher / Décocher tous les todos
        $scope.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = completed;
            });
        };

        // Enlever tous les todos cochés
        $scope.clearCompletedTodos = function () {
            $scope.todos = todos = todos.filter(function (todo) {
                return !todo.completed;
            });
        };
    }
]);
