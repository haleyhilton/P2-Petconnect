function startTimer(timeLeft) {
    var timeInterval = setInterval(function () {
      timeLeft--;
      if (timeLeft == 0) {
        clearInterval(timeInterval);
        //load page 2
        document.location.assign('/results');
      };
    }, 20);
};

startTimer(200);