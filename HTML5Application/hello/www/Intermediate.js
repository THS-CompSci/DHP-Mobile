/* 
 Intermediate validation checker between application password fields and server
 
 Will Zhao
 */


function main() {

    jQuery('.btn').click(function () {
        var password = jQuery('#password').val();
        var username = jQuery('#username').val();
        alert(username + " " + password);
       $.post()
        jQuery.post("server url", {xml: username + " " + password}, function(){}, data);
    });
}

jQuery(document).ready(main);