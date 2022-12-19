

let weather = {
  nyanya: {
    temp: 19.7,
    humidity: 80
  },
  karu: {
    temp: 17.3,
    humidity: 50
  },
  jikwoyi: {
    temp: 30.2,
    humidity: 20
  },
  AYA: {
    temp: 20.9,
    humidity: 100
  },
  kurudu: {
    temp: -5,
    humidity: 20
  },
  gudu: {
      temp: 19.7,
      humidity: 80
    },
    "new karu": {
      temp: 17.3,
      humidity: 50
    },
    maraba: {
      temp: 30.2,
      humidity: 20
    },
    orozo: {
      temp: 20.9,
      humidity: 100
    },
    maitama: {
      temp: -5,
      humidity: 20
    }
};


let entry = prompt("Enter a city");
entry = entry.toLowerCase().trim();
let round = Math.round(weather[entry].temp);
let fahrenheit = Math.round(weather[entry].temp * 1.8 + 32);
let humidity = Math.round(weather[entry].humidity)
if (entry==="nyanya" ||entry==="karu" || entry==="jikwoyi"  ||entry==="AYA" || entry==="kurudu"  ||entry==="gudu" || entry==="new karu"  ||entry==="maraba" || entry==="orozo"  ||entry==="maitama") {
  alert (`It is currently ${round}ᵒ C (${fahrenheit}ᵒ F) in ${entry} with a humidity of ${humidity}% `);
}
else { 
  alert (`Sorry we don't know the weather for this city, try going to https://www.goggle.com`);
}





