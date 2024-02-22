// Challenge 1
let myFavSuperheroes = [
    'Spider-Man',
    'Iron Man',
    'Batman',
    'Wonder Woman',
    'Superman',
  ];
  
  // Challenge 2
  console.log(myFavSuperheroes[0]);
  
  // Challenge 3
  console.log(myFavSuperheroes.length);
  
  // Challenge 4
  myFavSuperheroes[myFavSuperheroes.length - 2] = 'Motheesh';
  console.log(myFavSuperheroes[myFavSuperheroes.length - 2]);
  
  // Challenge 5 
  for (let i = myFavSuperheroes.length; i > 0; i--) {
    myFavSuperheroes[i] = myFavSuperheroes[i - 1];
  }
  myFavSuperheroes[0] = "Akash";
  
  
  // Challenge 6
  myFavSuperheroes.push('Hiruthik');
  
  
  // Challenge 7 
  const friend1Index = myFavSuperheroes.indexOf("Akash");
  if (friend1Index !== -1) {
      for (let i = friend1Index; i < myFavSuperheroes.length - 1; i++) {
          myFavSuperheroes[i] = myFavSuperheroes[i + 1];
      }
      myFavSuperheroes.length -= 1;
  }
  
  
  // Challenge 8 
  const friend2Index = myFavSuperheroes.indexOf("Hiruthik");
  if (friend2Index !== -1) {
      for (let i = friend2Index; i < myFavSuperheroes.length - 1; i++) {
          myFavSuperheroes[i] = myFavSuperheroes[i + 1];
      }
      myFavSuperheroes.length -= 1;
  }
  
  // Challenge 9
  myFavSuperheroes.splice(2, 0, 'Akash');
  
  // Challenge 10
  myFavSuperheroes.splice(3, 2, 'Hiruthik');
  
  // Challenge 11
  let superheroUniverse = [
    ['Spider-Man', 'Iron Man','Doctor Strange'],
    ['Batman', 'Wonder Woman', 'Superman'],
  ];
  
  // Challenge 12
  console.log(superheroUniverse[0][0]);
  
  // Challenge 13
  console.log(superheroUniverse[1][1]); 
  