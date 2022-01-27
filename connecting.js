let randomNum = Math.floor(Math.random() * (10000 - 1500 + 1) + 1500);

setTimeout(function() { window.location.replace('results.html'); }, randomNum);