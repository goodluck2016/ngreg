/**
  * Created by smile on 2016/12/11
  */
angular.module('myApp',[])
    .controller('SignUpController',function($scope){
        $scope.userdata={}; //初始化，一开始是一个空的对象
        $scope.submitForm = function(){
            console.log($scope.userdata);
            if($scope.signUpForm.$invalid)
                alert('请检查您的信息');
            else
                alert('注册成功');
            //console.log("表单提交啦！");
        }
    })

.directive('compare',function(){
    var o = {};
    o.strict = 'AE';
    o.scope = {
        orgText:'=compare'   //orgText指之前用户输入的值
    }
    o.require = 'ngModel';
    o.link = function(sco, ele, att, con){ //link是一个主函数，传参分别为：局域，元素，属性，ngmodel控制器controller
        con.$validators.compare = function(v){  //V是value的简写，指用户现在新输入的值
            return v == sco.orgText;  //返回用户新输入的值与之前输入的值是否一样
        }

        sco.$watch('orgText',function(){  //一旦监听到不一样，就执行下面的函数
            con.$validate();   //让controller的validate验证
        })
    }
    return o;
});