// create an array and add some questions and answes
// note: arrays are zero based. That means array [0] is the first one
var currentquestion = 0;
var questions = [{
  "question": "Who sang 'Fireworks'?",
  "response": "Katy Perry",
  "image1name": 'Bruno Mars',
  "image1url": 'https://ricoshae.com.au/assets/brunomars-wikimedia.jpeg',
  "image2name": 'Katy Perry',
  "image2url": 'https://ricoshae.com.au/assets/katyperry-wikimedia.jpeg',
  "image3name": 'Phil Collins',
  "image3url": 'https://ricoshae.com.au/assets/philcollins-wikimedia.jpeg',
  "answerimage": 'riimage002'
}, {
  "question": "Which song by Chris Richter is your favourite? (<a target='_blank' href='https://label.ricoshae.com.au/jsfiddletospotify'>listen here</a>)",
  "response": "Rest Day",
  "answerimage": 'riimage002',
  "image1name": 'Hold that thought',
  "image1url": 'https://ricoshae.com.au/assets/holdthatthought.jpg',
  "image2name": 'Rest Day',
  "image2url": 'https://ricoshae.com.au/assets/CMR-Rest Day-CoverArt-2602024.png',
  "image3name": 'Chill Move',
  "image3url": 'https://ricoshae.com.au/assets/ChillMove.png',
}, {
  "question": "Favourite song written by Jasmine Alesha form the band Empire Between (<a href='https://empirebetween.com/jsfilddleebspotify' target='_blank'>Listen here</a>)",
  "response": "Hold my hand",
  "answerimage": 'riimage001',
  "image1name": 'Hold my Hand',
  "image1url": 'https://ricoshae.com.au/assets/holdmyhand.jpg',
  "image2name": 'Games, Games, Games',
  "image2url": 'https://ricoshae.com.au/assets/games games games.png',
  "image3name": 'Cup Half Full',
  "image3url": 'https://ricoshae.com.au/assets/cuphalffull.jpg'
}];

(function() {
  // your page initialization code here
  fnReset(); //call reset on document ready

  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnNext();
  });

  document.getElementById("riimage001").addEventListener('click', function(event) {
    fnCheck("riimage001", this);
  });
  document.getElementById("riimage002").addEventListener('click', function(event) {
    fnCheck("riimage002", this);
  });

  document.getElementById("riimage003").addEventListener('click', function(event) {
    fnCheck("riimage003", this);
  });
  document.getElementById("rireset").addEventListener('click', function(event) {
    fnReset();
  });

})();

function fnReset() {
  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('rinextquestion').classList.add('rihide');
  document.getElementById('rireset').classList.add('rihide');
  document.getElementById('riquestionbox').classList.remove('rihide');
  currentquestion = 0;
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
  // load new images
  updateimages(currentquestion);
}

function fnNext() {
  document.getElementById('riquestionresponse').classList.add('rihide');
  if (currentquestion < questions.length - 1) {
    currentquestion = currentquestion + 1;
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('rireset').classList.add('rihide');
  } else {
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('riquestionbox').classList.add('rihide');
    document.getElementById('rireset').classList.remove('rihide');
  }
  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
   updateimages(currentquestion);
}

function fnCheck(answerimage, obj) {
  document.getElementById('riquestionresponse').classList.remove('ricorrect');
  document.getElementById('riquestionresponse').classList.remove('riincorrect');
  if (questions[currentquestion].answerimage === answerimage) {
    // show correct
    document.getElementById('riquestionresponse').classList.add('ricorrect');
    document.getElementById('riquestionresponse').innerHTML = "Correct: The answer is '" + obj.name + "'. " + questions[currentquestion].response;
    document.getElementById('rinextquestion').classList.remove('rihide');
  } else {
    // show incorrect
    document.getElementById('riquestionresponse').classList.add('riincorrect');
    document.getElementById('riquestionresponse').innerHTML = "Incorrect: You chose: '" + obj.name + "''. Please try again.";
  }
  document.getElementById('riquestionresponse').classList.remove('rihide');
}

function updateimages(currentquestion)
{
 // load new images
document.getElementById('riimage001').src = questions[currentquestion].image1url;
document.getElementById('riimage002').src = questions[currentquestion].image2url;
document.getElementById('riimage003').src = questions[currentquestion].image3url;
document.getElementById('riimage001').name = questions[currentquestion].image1name;
document.getElementById('riimage002').name = questions[currentquestion].image2name;
document.getElementById('riimage003').name = questions[currentquestion].image3name;
}
