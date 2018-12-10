let readlineSync = require ('readline-sync');

let userPlans = readlineSync.question("What are your plans for tonight? Choose: 1: Stay Home, 2: Night Out ");
  if(userPlans == 1){
    console.log(`Boo, you suck! Game Over!`);
    return;
  }else if(userPlans == 2){
      console.log(`Yayyy! Let's Get Ready for an Adventure!`);
  }

let userRideOptions = readlineSync.question("How are you getting around tonight? Pick Wisely: 1: Monorail, 2: Friend, 3:Uber");
  if(userRideOptions == 1){
    console.log(`The Monorail got stuck on the tracks! Try Again another night!`);
    return;
  }else if(userRideOptions == 2){
    console.log(`Oh No! She got a flat tire! Try again another night!`);
    return;}else if (userRideOptions == 3) {
      console.log(`WhoooHooo!Let's Ride!`);
    }

let userAttireOptions = readlineSync.question(`How are you dressed for the you night out? 1: Casual, 2: Dressy `);
  if(userAttireOptions == 1){
    console.log(`Enjoy your Night at the Heat Game!`);
    return;
  }else if (userAttireOptions == 2){
    console.log(`Enjoy your Night at Club E11even!`);
    return;
  }
