// data.js - Data and functions to generate passwords

// split string to array on any non-alphanumeric character using \W (regular expression)
function splitString(str) {
  return str.trim().split(/\W+/);
}

// Export strings as arrays
export const data = {
  // source: https://en.wikipedia.org/wiki/Wikipedia:10,000_most_common_passwords
  common: splitString(
    `123456,password,12345678,qwerty,123456789,12345,1234,111111,1234567,dragon,123123,baseball,abc123,football,monkey,letmein,shadow,master,666666,qwertyuiop,123321,mustang,1234567890,michael,654321,superman,1qaz2wsx,7777777,121212,000000,qazwsx,123qwe,killer,trustno1,jordan,jennifer,zxcvbnm,asdfgh,hunter,buster,soccer,harley,batman,andrew,tigger,sunshine,iloveyou,2000,charlie,robert,thomas,hockey,ranger,daniel,starwars,klaster,112233,george,computer,michelle,jessica,pepper,1111,zxcvbn,555555,11111111,131313,freedom,777777,pass,maggie,159753,aaaaaa,ginger,princess,joshua,cheese,amanda,summer,love,ashley,nicole,chelsea,matthew,access,yankees,987654321,dallas,austin,thunder,taylor,matrix`
  ),

  // source: https://www.rover.com/blog/dog-names/
  pets: splitString(
    `Charlie,Luna,Oliver,Luna,Max,Bella,Milo,Bella,Cooper,Daisy,Leo,Lily,Milo,Lucy,Charlie,Lucy,Buddy,Lily,Loki,Nala,Teddy,Lola,Max,Callie,Rocky,Zoe,Simba,Kitty,Bear,Sadie,Jack,Cleo,Leo,Stella,Ollie,Willow,Duke,Bailey,Jasper,Stella`
  ),

  // source: https://dojo.tech/card-machine/most-hacked-passwords-study/
  endearments: splitString(`King,Rose,Love,Boo,Hero,Angel,Baby,Sexy,Gem,Lover`),
  patterns: splitString(`abc,xyz,123,456,789,pass,111,000,321,007,ddd,lll`),

  // source: https://en.wikipedia.org/wiki/List_of_cities_by_international_visitors
  cities: splitString(
    `newyork,vienna,paris,chicago,london,miami,vegas,berlin,rio,madrid,sydney,rome,barcelona,dubai,istanbul,tokyo`
  ),
  
  // splitting on \W also works on line breaks!
  colors: splitString(`Red
Blue
Black
Gold
Green
Pink
White
Brown
Silver
Grey`),
  
};



// FUNCTIONS

export const functions = {
  randomInt: (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min,
  randomFromArray: (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  randomYear: () => {
    let currentYear = new Date().getFullYear();
    let year = `${functions.randomInt(currentYear - 90, currentYear)}`;
    if (Math.random() < 0.5) year = year.slice(2);
    return year;
  },
};
