var todo=[
    {
        id:1,
        title:"列表1",
        color:'#ff2b6c',
        list:[
            {
                title:"信息1",
                done:false
            },
            {
                title:"信息2",
                done:true
            },
            {
                title:"信息3",
                done:false
            },
            {
                title:"信息4",
                done:true
            }
        ]
    },
    {
        id:2,
        title:"列表2",
        color:'#d07be3',
        list:[
            {
                title:"信息1",
                done:false
            },
            {
                title:"信息2",
                done:true
            },
            {
                title:"信息3",
                done:false
            },
            {
                title:"信息4",
                done:true
            }
        ]
    }
]
var color=["#ff8600","#d07be3","#62da37","#1aabf8","#f7ca00","#a3855f","#ff2b6c"];

//背景焦点
var app=angular.module("app",[]);
app.controller("form",function($scope,local){
        $scope.color=color;
        $scope.flag=false;
        $scope.sg_flag=false; //tips显隐
    $scope.todo=local.getdata(todo);
        //$scope.todo=todo;
        //console.log( $scope.todo);

        //local.savedata('todo',$scope.todo);
        //console.log(todo)
        $scope.index=$scope.todo.length-1;
        $scope.inpcol=$scope.todo[$scope.index].color;
        $scope.addbgcol=function(i){
            //console.log(i)
            $scope.index=i
        };
        //添加项目
        $scope.additem=function(){
            $scope.ids=$scope.todo[$scope.todo.length-1].id+1;
            $scope.index=$scope.todo.length;
            $scope.todo.push({
                id:$scope.ids,
                title:'列表'+ $scope.ids,
                color:color[($scope.todo.length)%7],
                list:[]
            });
            $scope.flag=false;
            console.log($scope.todo);
            local.savedata('todo',$scope.todo);
            console.log($scope.todo)
        };
        //完成未完成
        $scope.num=0;
        $scope.finishnum=function(){
            $scope.num=0;
            var list=$scope.todo[$scope.index].list;
            //console.log($scope.index)
            angular.forEach(list,function(v,i){
                if (v.done){
                    $scope.num+=1;
                }
            })
            local.savedata(todo,$scope.todo);
        };
        $scope.finishnum();
        //添加子目录
        $scope.addlist=function(){
            $scope.todo[$scope.index].list.push({
                title:"信息",
                done:false
            });
            //console.log($scope.todo)
            local.savedata(todo,$scope.todo);
        };
        //点击切换完成状态
        $scope.set=function(o,t){
            o.done=t;
            $scope.finishnum()
        };
        //事件监听
         $scope.$watch('index',function(){
            $scope.finishnum()
             $scope.sg_flag=false
             $scope.inpval=$scope.todo[$scope.index].title;
             $scope.inpcol=$scope.todo[$scope.index].color;
        });
        //失去焦点改变
        $scope.change=function(v,text){
            v.title=text.target.innerHTML;
            //console.log(text.target.innerHTML)
            local.savedata(todo,$scope.todo);
        };
        var arr=[];
        $scope.allclear=function(){
         var list=$scope.todo[$scope.index].list;
            angular.forEach(list,function(val,i){
                //console.log($scope.done)
                if(!val.done){
                    arr.push(val)
                }
            });
            $scope.todo[$scope.index].list=arr;
            $scope.finishnum();
            $scope.flag=false;
            local.savedata(todo,$scope.todo);
        };
        $scope.disload=function(){
            $scope.sg_flag=false
        };
        $scope.changecol=function(u){
            $scope.inpcol=u;
        };
        $scope.delitem=function(){
            //console.log($scope.todo)
            $scope.todo.splice($scope.index,1);
            $scope.index=$scope.todo.length-1;
            $scope.finishnum();
            local.deldata($scope.index);
        }

    });
app.factory('local',function(){
    return {
        getdata:function(key){
            var data = localStorage.getItem(key);
            return data ==null?[]:JSON.parse(data);
        },
        savedata:function(key,data){
            localStorage.setItem(key,JSON.stringify(data))
        },
        deldata:function(key){
            localStorage.removeItem(key)
        }
    }
});