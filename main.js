let data;

addEventListener('load', async () => {
  const res = await fetch('https://cors-anywhere.herokuapp.com/https://zodiacal.herokuapp.com/api');
  data = await res.json();
  console.log(data);
})

document.querySelector('#submit').addEventListener('click', async () => {
  event.preventDefault();
  let input = document.querySelector('#userInput').value;
  //  Regular expression, use g to replace all instances of '-'.
  // input = input.replace(/-/g, '');
  // console.log(input);
  // const year = input.slice(0, 4);
  // console.log(year);
  // const month = input.slice(4, 6);
  // console.log(month);
  // const day = input.slice(6);
  // console.log(day);
  const date = input.slice(5);
  console.log(date);
  if (date >= '03-21' && date <= '04-19') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2015/02/17/08/25/horoscope-639126_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Aries!!!';
    const info = data.find(item => item.name === 'Aries');
    console.log(info);
    let badTraits = document.createElement('div');
    badTraits.innerText = 'Bad traits: '
    info.bad_traits.forEach((item, index) => {
      badTraits.innerText += item;
      console.log(badTraits);
      document.querySelector('#text-info').appendChild(badTraits);
    })
    let compatibility = document.createElement('div');
    compatibility.innerText = 'Compatibility: '
    info.compatibility.forEach((item, index) => {
      compatibility.innerText += item;
      console.log(compatibility);
      document.querySelector('#text-info').appendChild(compatibility);
    })
    let favorites = document.createElement('div');
    favorites.innerText = 'Favorites: '
    info.favorites.forEach((item, index) => {
      favorites.innerText += item;
      console.log(favorites);
      document.querySelector('#text-info').appendChild(favorites);
    })
  } else if (date >= '04-20' && date <= '05-20') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2015/02/17/08/25/horoscope-639127_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Taurus!!!';
  } else if (date >= '05-21' && date <= '06-20') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2015/02/17/08/24/horoscope-639122_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Gemini!!!';
  } else if (date >= '06-21' && date <= '07-22') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2015/02/22/09/39/horoscope-644864_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Cancer!!!';
  } else if (date >= '07-23' && date <= '08-22') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2015/02/17/08/24/horoscope-639123_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Leo!!!';
  } else if (date >= '08-23' && date <= '09-22') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2015/02/19/09/13/horoscope-641920_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Virgo!!!';
  } else if (date >= '09-23' && date <= '10-22') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2018/11/16/19/04/zodiac-3820095_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Libra!!!';
  } else if (date >= '10-23' && date <= '11-21') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2017/08/28/15/28/scorpio-2689945_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Scorpio!!!';
  } else if (date >= '11-22' && date <= '12-21') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2018/11/16/19/04/zodiac-3820093_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Sagittarius!!!';
  } else if (date >= '12-22' && date <= '01-19') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2015/03/17/15/25/horoscope-677900_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Capricorn!!!';
  } else if (date >= '01-20' && date <= '02-18') {
    document.querySelector('#image').setAttribute('src', 'https://pixabay.com/illustrations/horoscope-astrology-zodiac-fish-639125/');
    // document.querySelector('#result').innerText = 'You are Aquarius!!!';
  } else if (date >= '02-19' && date <= '03-20') {
    document.querySelector('#image').setAttribute('src', 'https://cdn.pixabay.com/photo/2015/02/17/08/25/horoscope-639126_1280.jpg');
    // document.querySelector('#result').innerText = 'You are Pisces!!!';
  }
})
