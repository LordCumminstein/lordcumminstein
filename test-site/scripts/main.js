let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/steinberger-guitar.jpg') {
      myImage.setAttribute('src','images/steinberger-bass.jpg');
    } else {
      myImage.setAttribute('src','images/steinberger-guitar.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
  }
  

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Steinberger, ' + myName;
    }
  }
  

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Steinberger, ' + storedName;
  }
  
  