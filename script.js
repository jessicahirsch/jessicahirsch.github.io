console.log('script loaded.')

var container = document.querySelector('.boardContainer');
var start = document.querySelector('.start');
var end = document.querySelector('.end');
var div = document.querySelector('.cards');
var playerOne = document.querySelector('.playerOne');
var shuffleDeck
// var playerTwo = document.querySelector('.playerTwo');
var flipBack = document.createElement;

var card = document.querySelector('.card');

var cardArray = [];
cardArray.push(card);

colorArray = [
  '#FF5334', // red
  '#FFA417', // orange
  '#FFF24B', // yellow
  '#03FFF2', // blue
  '#61FF59', // green
  '#FF07FD', // magenta
  '-webkit-linear-gradient(#FF5334, #FFA417, #FFF24B, #61FF59, #03FFF2, #FF07FD)',
  'url("plumpy.png") white',
  'url("mr_mint_tall.png") white',
  'url("jolly.png") white',
  'url("gramma_nutt.png") white',
  'url("princess_lolly.png") white',
  'url("queen_frostine.png") white'
];

var numOfPlayers = 1;

var playerArray = [];
playerArray.push('.playerOne');
// playerArray.push('.playerTwo');
// playerArray = ['.playerOne', '.playerTwo'];


// Move player(s) to start square
var gameStart = function() {
  var start = document.querySelector('.start');
  var playerOne = document.querySelector('.playerOne');
  // var playerTwo = document.querySelector('.playerTwo');
  start.append(playerOne);
  // start.append(playerTwo);
}

gameStart();

var container = document.querySelector('.boardContainer');
container.addEventListener('click', getCurrentPosition, false);

// Move player(s) to mouse click
// This function was vital to game but I was unable to create a working function for this feature
// Studied functioning and event listening from www.kirupa.com
// Function modified to fit this game
// Cited From: https://www.kirupa.com/snippets/move_element_to_click_position.htm

function getCurrentPosition(e) {

    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x - (playerOne.clientWidth / 2);
    var yPosition = e.clientY - parentPosition.y - (playerOne.clientHeight / 2);

    playerOne.style.left = xPosition + 'px';
    playerOne.style.top = yPosition + 'px';
}

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.className == 'boardContainer') {
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

// var container = document.querySelector('.boardContainer');
// container.addEventListener('click', getCurrentPosition, false);

// function getCurrentPosition(e) {

//     var parentPosition = getPosition(e.currentTarget);
//     var xPosition = e.clientX - parentPosition.x - (playerTwo.clientWidth / 2);
//     var yPosition = e.clientY - parentPosition.y - (playerTwo.clientHeight / 2);

//     playerTwo.style.left = xPosition + 'px';
//     playerTwo.style.top = yPosition + 'px';
// }

// function getPosition(el) {
//   var xPos = 0;
//   var yPos = 0;

//   while (el) {
//     if (el.className == 'boardContainer') {
//       var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//       var yScroll = el.scrollTop || document.documentElement.scrollTop;

//       xPos += (el.offsetLeft - xScroll + el.clientLeft);
//       yPos += (el.offsetTop - yScroll + el.clientTop);
//     } else {
//       xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//       yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//     }

//     el = el.offsetParent;
//   }
//   return {
//     x: xPos,
//     y: yPos
//   };
// }

// Flip cards over
var flipCards = function(cardArray) {
  // for (var i = 0; i < cardArray.length; i++)

  // addEventListener('click', clickCards, false);
// $('.card').click(function(event) {
    $(card).on('click', function() {
      // $(card).addClass('flipped')
      // $(card).addClass('flipback')
    // console.log('hi');

    for (var i = 0; i < colorArray.length; i++)
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    $(card).css({
      background: randomColor,
      backgroundSize: "cover"
      })
    // j = colorArray.sort(function() {return 0.5 - Math.random()})

//     var resetCards = function(cardArray) {
//       $(card).removeClass(colorArray)
//     }
// resetCards();
})
}

flipCards();

var checkWinner = function() {
  $(end).on('click', function() {
    alert("You've reached KANDY KASTLE");
})
}

checkWinner();
