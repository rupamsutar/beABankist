'use strict';

/*
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



//Start:

const displayMovement = function(movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function(mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}
displayMovement(account1.movements);



const calcDisplayBalance = function(movements) {
  const balance = movements.reduce(((acc, cur) => acc + cur),0);
  labelBalance.textContent = `${balance}€`;
}
calcDisplayBalance(account1.movements);



const createUserName = function(accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner.toLowerCase().split(" ").map(name => name[0]).join("");
  });
}
createUserName(accounts);


const CalcDisplaySummary = function(movements) {
  const income = movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income}€`;
  const outgone = movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outgone)}€`;
  const interest = movements.filter(mov => mov > 0).map(mov => mov * 1.2/100).filter((mov,i,arr) => mov >= 1).reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
}
CalcDisplaySummary(account1.movements);



*/

























































/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//Challenge 1:

/*

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = [...dogsJulia];
  dogsJuliaCorrected.splice(0,1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  console.log(dogs);

  dogs.forEach(function(dog,i) {
    if(dog >= 3) {
      console.log(`Dog No ${i + 1} is an adult and is ${dog} years old !`);
    } else {
      console.log(`Dog No ${i + 1} is a puppy and is ${dog} years old !`);
    }
  })
}



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

const movementsUSD = movements.map(function(mov) {
  return mov * euroToUSD;
})

console.log(movements);
console.log(movementsUSD);

const movementsUSDArrow = movements.map(mov => mov * euroToUSD);
console.log(movementsUSDArrow)

const movementsX = movements.map((mov,i) => 
  `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrawn"} ${Math.abs(mov)}`
);

console.log(movementsX);




// The filter Method: 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposit);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawals);





// The Reduce Method: 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function(acc, cur, i, arr) {
  console.log(`Iteration: ${i}, Balance: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);




// Practicing the Reduce with examples:

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const maximumValue = movements.reduce((acc, mov) => {
  if(acc >= mov) {
    return acc;
  } else {
    return acc = mov;
  }
}, movements[0]);

console.log(maximumValue);



//Coding Challenge 2:

const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  
  console.log(humanAges);
  const adultAges = humanAges.filter(function(age) {
    return age >= 18;
  });

  console.log(adultAges);

  const average = adultAges.reduce(function(acc, cur,) {return ((acc + cur));},0) / (adultAges.length);

  console.log(average);
}

calcAverageHumanAge([5,2,4,1,15,8,3]);




const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUSD).reduce((acc, cur) => acc + cur,0);
console.log(totalDepositsUSD);

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find(acc => acc.owner === "Jessica Davis");

console.log(account);