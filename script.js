var answers = [
    'It is certain!', 'It is decidely so!', 'Without a doubt!', 'YES - Definitely!',
    'You may rely on it!', 'INSTAWIN!', 'Most Likely.', 'Outlook Good.',
    'Yes.', 'Signs Point to Yes!', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you.',
    'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.',
    'My sources say NO.', 'Outlook not good.', 'Very doubtful.',
    'Instafail.', 'Maybe?', 'Sure.', 'As the Prophecy foretold!'];
  
  document.getElementById('eight-ball').onclick = function () {
  var answer = answers[Math.floor(Math.random() * answers.length)];
      document.getElementById('answer').innerHTML = answer;
  };
  