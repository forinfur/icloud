/**
 * Created by Administrator on 2016/10/31.
 */
var todo=[
    {title:"韩检方搜秘书官办公室 遭总统府拒绝"},
    {title:"江西警察遇害地离家百米 行凶仅30秒 "},
    {title:"他当选市长11天落马了 曾是公选干部 "},
    {title:"陈水扁被拍健步如飞 怒呛对方没救了"}
]
var app=angular.module("app",[]);
app.controller("lis",function($scope){
    $scope.todo=todo;
})
app.directive("asides",function(){
    return{
        templateUrl:"aside1.html",
        transclude:true,
        scope:true
    }
})