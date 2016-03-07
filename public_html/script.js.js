jQuery(document).ready(function(){
   jQuery('#the-button').click(function(){
       
      var thename = jQuery('#yourname').val(); 
      
      if(thename === ''){
          alert('You forgot the name');
      }
      else{
      alert("Hi " + thename + "!");
      }
   });
});

