/** 
 Intermediate validation checker between application password fields and server
 
 
 
 My Job
 
 @author Will Zhao
 */

   
        
        
function main() {

    jQuery('.btn').click(function () {
        var password = jQuery('#password').val();
        var username = jQuery('#username').val();
        alert(username + " " + password);

        cordova.plugins.barcodeScanner.scan(
                function (result) {
                    if (!result.cancelled) {
                        alert();
                    }
                    else {
                        alert("Barcode scan was cancelled");
                    }
                },
                function (err) {
                    alert("The scanning operation failed: " + err);
                }
        );
    });
}

function pass() {
    
    
    jQuery('.btn').click(function() {
       
       var hasCamera = false;
       
       if (!hasCamera) {
           
       }
       
       var studentID;
       var teacherID;
       var dest;
       var passIssuedTime;
       
       jQuery.ajax("url", {
           TYPE: 'POST',
           
           DATA: {
               STUDENTID: studentID,
               TEACHERID: teacherID,
               DESTINATION: dest,
               TIMEOFPASS: passIssuedTime,
               DATEOFPASS: Date()
               
           }
       });
       
    });
}
jQuery(document).ready(main);