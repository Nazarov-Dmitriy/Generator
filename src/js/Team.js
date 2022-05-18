export default class Team {
    constructor() {
      this.team = {
        Bowman: {
          name: 'Лучник',
          type: 'Bowman',
          health: 50,
          level: 1,
          attack: 40,
          defence: 10
        },
        Demon: {
          name: 'Демон',
          type: 'Demon',
          health: 50,
          level: 1,
          attack: 40,
          defence: 10
        }
      };
    }
  
    *[Symbol.iterator]() {
    //   const entries = Object.entries(this);
    //   let index = -1;
    //   console.log(Object.entries(this.team));
    //   console.log(this.team);
    
      yield 1;
      yield 2;
      return 333;


    }
  }
  
  let a  = new Team();
  console.log(a);
 
  
