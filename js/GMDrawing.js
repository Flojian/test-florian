'use strict';

var app = angular.module('GMDrawing', ['GMDrawing']);

var GMDrawingModule = angular.module('GMDrawing',['uiGmapgoogle-maps'])

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyC9Vu81GIZQEMxfTVtv_pgE7jEh4AFJt3k',
        v: '3.17',
        libraries: 'geometry,visualization'
    });
})

.controller("MainCtrl", function($scope, uiGmapGoogleMapApi) {

    $scope.template = {
    	"menu":"views/menu.html",
    	"map":"views/map.html"
    }

	$scope.map = {center: {latitude: 48.8573, longitude: 2.3314 }, zoom: 12 };

    var circles = $scope.circles = [];

    var polygons = $scope.polygons = [];

    $scope.addCircle = function(){
        if(!this.radius || !this.center)
            return;

        var radius = parseFloat(this.radius);
        console.log(radius)
        if(radius == NaN){
            console.log(radius)
            return;
        }

        var center = $scope.getLatLongFromStr(this.center);
        if(center === false)
            return;

        circles.push({
            center: center,
            radius: radius*1000,
            stroke: {
                color: '#08B21F',
                weight: 2,
                opacity: 1
            },
            fill: {
                color: '#08B21F',
                opacity: 0.5
            }
        });
        this.radius = "";
        this.center = "";
    }

    $scope.addPoly = function(){
        if(!this.polyCoords)
            return;
        
        var finalCoords = [];
        var strCoords = this.polyCoords.split("+");

        for(var i in strCoords){
            var point = $scope.getLatLongFromStr(strCoords[i]);
            if(point === false)
                return;
            finalCoords.push(point);
        }
        polygons.push({
                path: finalCoords,
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                fill: {
                    color: '#ff0000',
                    opacity: 0.8
                }
            });
        this.polyCoords = "";
    }

    $scope.clear = function(){
        this.polyCoords = "";
        this.radius = "";
        this.center = "";
        polygons.length = 0;
        circles.length = 0;
    }

    $scope.getLatLongFromStr = function(str){
        var sp = str.split("$");
        if(sp.length != 2)
            return false;
        var lat = parseFloat(sp[0]);
        var lng = parseFloat(sp[1]);
        console.log(lat)
        console.log(lng)
        if(lat == NaN || lng == NaN)
            return false;
        return {
            latitude : lat,
            longitude : lng
        };
    }
});