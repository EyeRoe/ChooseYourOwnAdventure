document.addEventListener('DOMContentLoaded', function () {
  var oldButtonsArray = []
  var begin = document.querySelector('#start')
  var storyText = document.querySelector('#story')
  var currentPage = 0;
  newEvent(currentPage)

  function newEvent(num) {
    if (num == 666) {
      location.reload()
    }
    newIMG(storyEvents[num]['img'])
    newP(storyEvents[num]['text'])
    newButtons(storyEvents[num]['choices'])
  }
  function newIMG(dir) {
    var i = document.createElement('img')
    i.setAttribute("src", dir)
    storyText.appendChild(i)
  }
  function newP(prose) {
    var P = document.createElement('p')
    P.innerText = prose
    storyText.appendChild(P)
  }
  function onButtonClick(event) {
    targetButton = event.target
    currentPage = targetButton.dataset.page
    console.log(currentPage)
    newEvent(currentPage)

  }
  function newButtons(arr) {
    var newRow = document.createElement('div')
    newRow.setAttribute('class', 'row')
    storyText.appendChild(newRow)
    let newButtonsArray = []
    for (var i = 0; i < arr.length; i++) {
      debugger
      var temp = document.createElement('button')
      temp.innerText = arr[i]['bText']
      temp.setAttribute('class', 'btn btn-secondary')
      temp.setAttribute('data-page', (arr[i]['rPage']))
      newRow.appendChild(temp)
      temp.addEventListener('click', onButtonClick)
      newButtonsArray.push(temp)
    }
    for (var i = 0; i < oldButtonsArray.length; i++) {
      oldButtonsArray[i].removeEventListener('click', onButtonClick)
    }
    oldButtonsArray = newButtonsArray
  }
})



var storyEvents = {
  0: {
    img: 'assets/direction.jpg',
    text: 'You are at a fork in road. Right or Left?',
    choices: [
      {
        bText: 'Turn Left',
        rPage: 1,
      },
      {
        bText: 'Leave the Path',
        rPage: 13,
      },
      {
        bText: 'Turn Right',
        rPage: 2,
      }
    ],
  },
  1: {
    //Bells
    //result of Turn Left
    img: 'assets/fairyHill.jpg',
    text: 'While walking down the road you hear the distant laughter of children and the tinkling of bells. Nonplussed, you...',
    choices: [
      {
        bText: 'Step off the path',
        rPage: 3,
      },
      {
        bText: 'Plug your ears',
        rPage: 4,
      },
    ],
  },
  2: {
    //Turn Right
    img: 'assets/fluffyBunny.png',
    text: "As you round a corner, you hear a rustling in the bushes. You brace for a fight, expecting some giant, wild beast. Out of the bushes pops a fluffy bunny rabbit, with an intelligent gleam in its eye. Startling you, the rabbit speaks, “Foolish mortal, you are either very brave or very stupid to have wandered into woods such as these. Normally I eat travelers. Why are you here?” You explain to the adorable bunny that you're here to rescue the Princess, who was kidnapped by a witch. “I see. That witch is no friend of mine. Instead of eating you immediately, I'll offer you a chance. Answer my riddle. If you guess correctly, I will let you go. If you are wrong... I will eat you. Do we have a deal?” It seems you have no choice. You nod. “Listen closely... I roar. I can kill quickly. I swallow whole. Yet, I do not have teeth or a tongue. What am I ?” You think carefully for a moment before answering...",
    choices: [
      {
        bText: 'You are hunger.',
        rPage: 11,
      },
      {
        bText: 'You are an avalanche.',
        rPage: 12,
      },
      {
        bText: 'You are an old bear.',
        rPage: 11,
      },
    ],
  },
  3: {
    //Fairy Ring
    img: 'assets/fairyRing.jpg',
    text: 'You find a clearing containing a mysterious circle of mushrooms',
    choices: [
      {
        bText: 'Step into the ring',
        rPage: 6,
      },
      {
        bText: 'Back away carefully',
        rPage: 16,
      },
      {
        bText: 'Pick a Mushroom',
        rPage: 8,
      }
    ],
  },
  4: {
    //Lights
    img: 'assets/fairyLights.jpg',
    text:
      'Tantalizing dancing lights appear on the path',
    choices: [
      {
        bText: 'Dazzled, you follow them',
        rPage: 3,
      },
      {
        bText: 'Disturbed, you close your eyes',
        rPage: 5,
      },
    ],
  },
  5: {
    //Ravine
    img: 'assets/falling.jpeg',
    text:
      'Crashing through the forest, blind and unaware of your surroundings, you fall into a ravine and break your neck and die.',
    choices: [
      {
        bText: 'Start Over?',
        rPage: 666,
      },
    ],
  },
  6: {
    //Under the Hill
    img: 'assets/fairyHill.jpg',
    text:
      'You have been kidnapped by Fairies. They are cold and beautiful and inform you that you will be their servant for 200 years.',
    choices: [
      {
        bText: '200 Years Later...',
        rPage: 7,
      }
    ],
  },
  7: {
    //Time
    img: 'assets/time.jpg',
    text:
      'You arrive back in the clearing, 200 years after the day you stepped into the fairy ring. You have kept your youth thanks to the magic of the fairies, but you know that the Princess is long dead as are the King and Queen. You cautiously exit the forest and head for the nearest town. Or, where the town used to be...',
    choices: [
      {
        bText: 'Start Over?',
        rPage: 666,
      }
    ],
  },
  8: {
    //Pick a Mushroom
    img: 'assets/mushroom.jpg',
    text:
      'You hold a lovely, spongey mushroom',
    choices: [
      {
        bText: 'EAT IT!!',
        rPage: 9,
      },
      {
        bText: 'EAT IT!!',
        rPage: 10,
      },
    ],
  },
  9: {
    //
    img: 'assets/poison.png',
    text:
      "It was poisonous...",
    choices: [
      {
        bText: 'Start Over??',
        rPage: 666,
      },
    ],
  },
  10: {
    //Pick a Mushroom
    img: 'assets/mushroom.jpg',
    text:
      'Mmmm delicious, but not very filling.',
    choices: [
      {
        bText: 'Moving on.',
        rPage: 3,
      },
    ],
  },
  11: {
    //Evil Bunny
    img: 'assets/cherry.jpg',
    text:
      '“No, I am a rabbit.” The bunny eats you.',
    choices: [
      {
        bText: 'Start Over?',
        rPage: 666,
      },
    ],
  },
  12: {
    //Bunny Lets you go
    img: 'assets/fluffyBunny.png',
    text:
      '“Very clever. I will let you live.” Confused, you wander on.',
    choices: [
      {
        bText: 'Continue',
        rPage: 1,
      },
      {
        bText: 'Turn Back',
        rPage: 14,
      },
    ],
  },
  13: {
    //Find the Woodsman
    img: 'assets/tim.jpg',
    text:
      'Wandering through the trees, you meet a Forester named Tim. He warns you to go back to the forest road as there are horrible monsters everywhere in the forest and the road is slightly safer.',
    choices: [
      {
        bText: 'Heed his warning and go back to the path',
        rPage: 1,
      },
      {
        bText: 'Scoff and keep wandering',
        rPage: 14,
      },
      {
        bText: 'Ask him about the Witch',
        rPage: 15,
      },
    ],
  },
  14: {
    //Set Upon by Wolves
    img: 'assets/wolf.jpg',
    text:
      'You are attacked by a pack of wolves and eaten alive',
    choices: [
      {
        bText: 'Start Over?',
        rPage: 666,
      }
    ],
  },
  15: {
    //Witch info
    img: '/Users/allieerickson/Desktop/Code/unit47/assets/moon.jpg',
    text:
      'Tim tells you that the Witch is very wicked and dangerous and warns you away from her. You explain that you have to go, to save the Princess. Tim agrees to tell you the way, but suggests you turn back.',
    choices: [
      {
        bText: 'Get Diretions',
        rPage: 16,
      },
      {
        bText: 'Go Back',
        rPage: 2,
      },
    ],
  },
  16: {
    //The Witch's House
    img: 'assets/witchCottage.jpg',
    text:
      'You come across a cabin in the woods. It belongs to the Witch. Surely the Princess is inside...',
    choices: [
      {
        bText: 'Go In',
        rPage: 17,
      },
    ],
  },
  17: {
    //Witch Cottage
    img: 'assets/witch.jpg',
    text:
      "You enter the Witch's Cabin... She is there and so is the Princess. You...",
    choices: [
      {
        bText: 'Fight the Witch!',
        rPage: 18,
      },
      {
        bText: 'Bargain with the Witch',
        rPage: 19,
      },
      {
        bText: 'Seduce the Witch',
        rPage: 20,
      },
    ],
  },
  18: {
    //Witch Fight
    img: 'assets/magicSpell.jpg',
    text:
      'You fight the witch and win!',
    choices: [
      {
        bText: 'Yay!!',
        rPage: 21,
      },
    ],
  },
  19: {
    //Witch Bargain
    img: 'assets/gold.jpeg',
    text:
      "You offer the Witch money from the King in exchange for the Princess. She laughs and kills you both.",
    choices: [
      {
        bText: 'Start over??',
        rPage: 666,
      },
    ],
  },
  20: {
    //Witch Seduce
    img: 'assets/seductiveMouths.jpeg',
    text:
      "You seduce the Witch as a ploy to free the Princess. However, you realize that the Witch is quite beautiful and that you two had similar childhoods. You talk quietly all through the night and fall in love. You sacrifice the Princess together as an act of love. Screw the Kingdom.",
    choices: [
      {
        bText: 'Again?',
        rPage: 666,
      },
    ],
  },
  21: {
    //Happy Ending
    img: 'assets/congrats.jpeg',
    text:
      "Congrats, you saved the Princess.",
    choices: [
      {
        bText: 'Again?',
        rPage: 666,
      },
    ],
  },


};