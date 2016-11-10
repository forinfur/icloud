/**
 * Created by Administrator on 2016/10/29.
 */
var app=angular.module("app",[]);
app.controller("c",function($scope){
    $scope.inputbg='#aaa';
    $scope.flag=false;
    //$scope.val1=true;
    $scope.focu=function(){
        $scope.inputbg='#aaa';
    };
    $scope.blur=function(){
        $scope.inputbg='#000';
    };
    $scope.dbc=function(){
        $scope.dbcsty='yellow';
    }
});


