'use strict';

var GMDrawingModule = angular.module('GMDrawing',['uiGmapgoogle-maps']) // My module depends on google-maps module

// configue the google maps module
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyC9Vu81GIZQEMxfTVtv_pgE7jEh4AFJt3k' // My google maps API key
    });
})

// defines the main controller
.controller("MainCtrl", function($scope) {

    /*
        Defines the different view paths
    */
    $scope.template = {
    	"menu":"views/menu.html",
    	"map":"views/map.html"
    }

    /*
        Map parameters : center on Paris
    */
	$scope.map = {center: {latitude: 48.8573, longitude: 2.3314 }, zoom: 12 };

    //list of circles
    var circles = $scope.circles = [];

    //list of polygons
    var polygons = $scope.polygons = [];

    /*
        Add a circle to the circles list
        @param : $scope.radius, the radius value that the user fills out
        @param : $scope.center, the geo center value that the user fills out
            format : latitude$longitude
    */
    $scope.addCircle = function(){
        // checks that the inputs are filled out
        if(!this.radius || !this.center)
            return;

        var radius = parseFloat(this.radius);
        if(radius == NaN) // checks that the user set a number
            return;

        var center = $scope.getLatLongFromStr(this.center);
        if(center === false) // checks that the user uses the right format
            return;

        circles.push({
            center: center,
            radius: radius*1000, // converts radius into km
            stroke: { // default stroke
                color: '#08B21F',
                weight: 2,
                opacity: 1
            },
            fill: { // default fill
                color: '#08B21F',
                opacity: 0.5
            }
        });
        // clear the inputs
        this.radius = "";
        this.center = "";
    }
    /*
        Add a polygon to the polygons list
        @param : $scope.polyCoords, the geo. point of the polygon that the user fills out
            format : latitude$longitude+latitude$longitude+ ... +latitude$longitude
    */
    $scope.addPoly = function(){
        // checks that the input is filled out
        if(!this.polyCoords)
            return;
        // Array to fill with well formated coords
        var finalCoords = [];
        //Array containing the different point coords as string
        var strCoords = this.polyCoords.split("+");

        // for each string coord, 
        for(var i in strCoords){
            //converts in the right format
            var point = $scope.getLatLongFromStr(strCoords[i]);
            //checks that each coord has been correcty filled out 
            if(point === false)
                return;
            //adds the coord into the path to provide to the polygone structure
            finalCoords.push(point);
        }
        polygons.push({
                path: finalCoords, // list of points to draw the poly
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                fill: {
                    color: '#ff0000',
                    opacity: 0.8
                }
            });
        //clear the input
        this.polyCoords = "";
    }

    /*
        clear the interface
    */
    $scope.clear = function(){
        //clears the input
        this.polyCoords = "";
        this.radius = "";
        this.center = "";
        // clears the polgones and circles arrays
        polygons.length = 0;
        circles.length = 0;
    }

    /*
        function used to get a {latitude:lat,longitude:lng} structure
        from a "lat$lng" formatted string 
        @param str : the string to use
        @return false (if the string is not correctly formated)
                {latitude:lat,longitude:lng} ortherwise
    */
    $scope.getLatLongFromStr = function(str){
        var sp = str.split("$");
        //str must only contain one '$'
        if(sp.length != 2)
            return false;
        //parses the strings into float
        var lat = parseFloat(sp[0]);
        var lng = parseFloat(sp[1]);
        //checks each parsed string to be a number
        if(lat == NaN || lng == NaN)
            return false;
        //if everything ok, return the results
        return {
            latitude : lat,
            longitude : lng
        };
    }
});