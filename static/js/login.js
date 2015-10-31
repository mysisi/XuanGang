/**
 * Created with JetBrains WebStorm.
 * User: SisiLiu
 * Date: 15-9-4
 * Time: 下午4:41
 * To change this template use File | Settings | File Templates.
 */

$(function (){

    $.removeCookie("token");
    $.removeCookie('uid');
    $.removeCookie('username');

    domain = "http://202.204.54.193:8989";

    $("#login").on("click",function(){

        clickLogin();

    });

});

function clickLogin(){

    $("#usertip").html("");
    $("#pwdtip").html("");

    var username = $("#username").val();
    var password = $("#password").val();

    if(username==""||password==""){

        if(username==""){
            $("#usertip").html("用户名不能为空!");
        }

        if(password==""){
            $("#pwdtip").html("密码不能为空!");
        }

    }else{

        $.ajax({
            type: "get",
            dataType: 'jsonp',
            url: domain+"/user/login",
            data: {
                "username":  username,
                "password":  password
            },
            error: function(data) {
                alert("404");
            },
            success: function(data) {
                if(data.success==0){
                    $("#usertip").html(data.error.message);
                }
                if(data.success==1){
                    $.cookie('token', data.data.token, { expires: 30 });
                    $.cookie('uid', data.data.uid, {expires: 30 });
                    $.cookie('username', data.data.username, {expires: 30 });
                    window.location.href = document.referrer;
                }
            }
        });

    }

}