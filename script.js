window.onload = function() {
  let cardOne = document.getElementById("card1");
  let cardTwo = document.getElementById("card2");
  let cardThree = document.getElementById("card3");
  // let wordsection = document.getElementById("wordsection");
  
  
  setTimeout(function(){ 
    cardOne.classList.remove('card1');
    cardTwo.classList.remove('card2');
    cardThree.classList.remove('card3');
  }, 3000);
};


// window.onload = function() {
//   let NAME = document.getElementById('name'); 
  
//   setTimeout(function(){ 
//     cardOne.classList.remove('name');
//   }, 3000);
// };