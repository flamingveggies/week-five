// var buttons = document.getElementsByClassName("button");
// for (var i=0; i<buttons.length; i++) {
//     buttons[i].addEventListener("click", function(i){
//         return (window.setTimeout(function(i) {buttons[i].innerHTML = "Clicked!"}, i*1000))(i);
//     });
// };


var buttons = document.getElementsByClassName("button");
for (var i=0; i<buttons.length; i++) {
    (function(j) {
        buttons[j].addEventListener("click", function(){
            window.setTimeout(function() {buttons[j].innerHTML = "Clicked!"}, (j+1)*1000)
      });
    })(i);
};

// nodes[i].addEventListener('click', (function(i) {
//       return function() {
//          console.log('You clicked element #' + i);
//       }
//   })(i));
   
   
//   this.innerHTML = "Clicked!";