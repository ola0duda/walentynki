document.getElementById('question2').style.display = 'none';
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayHappyDog();
        });
    } else if (option === 'no') {
        // Change text on the "naah" button to "czy aby na pewno?"
        document.getElementById('no-button').innerText = 'czy aby na pewno?'; 
        // Increase font size of "TAAAK" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayDog() {
    var imageContainer = document.getElementById('image-container');
    var dogImage = new Image();
    dogImage.src = 'pies.gif';
    dogImage.alt = 'pies';
    dogImage.onload = function() {
        imageContainer.appendChild(dogImage);
    };
}


function displayHappyDog() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var happyDogImage = new Image();
    happyDogImage.src = 'happy.gif';
    happyDogImage.alt = 'szczesliwy pies';
    happyDogImage.onload = function() {
        imageContainer.appendChild(happyDogImage);
        document.getElementById('options').style.display = 'none';
	document.getElementById('question2').style.display = 'block';
    };
}

displayDog();