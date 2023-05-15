const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let card1 = "";
let card2 = "";
let click = true;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if(click) {
    if (card1.length === 0) {
      card1 = event.target;
      event.target.style.backgroundColor = card1.classList[0];
      card1.removeEventListener("click", handleCardClick);
    }

    else if (card2.length === 0) {
      card2 = event.target;
      event.target.style.backgroundColor = card2.classList[0];
      card2.removeEventListener("click", handleCardClick);
      click = false;
    }


    if (card1.length !== 0 && card2.length !== 0) {
      
      if(card1.classList[0] === card2.classList[0]) {
        card1 = "";
        card2 = "";
        click = true;
      }

      else {
        card1.addEventListener("click", handleCardClick);
        card2.addEventListener("click", handleCardClick);  
        
        setTimeout(function() {
          card1.style.backgroundColor = "white";
          card2.style.backgroundColor = "white";  
          card1 = "";
          card2 = "";
          click = true;
        }, 1000);
      }
    }
  }
  // console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);
