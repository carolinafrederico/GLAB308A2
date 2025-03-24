// PART 1: Humble Beginnings
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }
//     //Using for... of loop
//     for (let item of adventurer.inventory) {
//         console.log(item);
//     }
//     const adventurer = {
// name: "Robin",
// health: 10,
// inventory: ["sword", "potion", "artifact"],
// companion: {
//     name: "Leo",
//     type: "Cat"

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]
//         }
//     }
//     }
// console.log(adventurer.companion.companion.belongings);

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]
//         }
//     },
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`);
//     }
// }
// adventurer.roll();      // Example Output: "Robin rolled a 14."

// PART 2: Class Fantasy
// class Character {
//     constructor (name) {
//       this.name = name;
//       this.health = 100;
//       this.inventory = [];
//     }
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`);
//       }
//     }

// Now, re-create Robin using the Character class!
    // const robin = new Character("Robin");
    // robin.inventory = ["sword", "potion", "artifact"];
    // robin.companion = new Character("Leo");
    // robin.companion.type = "Cat";
    // robin.companion.companion = new Character("Frank");
    // robin.companion.companion.type = "Flea";
    // robin.companion.companion.inventory = ["small hat", "sunglasses"];
    
//PART 3: Class Features
class Adventurer extends Character {
    constructor(name, role) {
      super(name);
      this.role = role;
      this.speed = 100; // New property specific to adventurers.
      this.abilities = this.getAbilities(); // Unique abilities based on role.
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    getAbilities() {
      const abilitiesByRole = {
        Warrior: ["Slash", "Shield Block", "Battle Cry"],
        Mage: ["Fireball", "Teleport", "Arcane Shield"],
        Rogue: ["Backstab", "Stealth", "Pick Lock"]
      };
      return abilitiesByRole[this.role] || ["Basic Attack"];
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    specialAttack() {
      if (this.speed >= 20) {
        this.speed -= 20;
        console.log(`${this.name} performs a special attack!`);
        super.roll(3);
      } else {
        console.log(`${this.name} is too tired to perform a special attack.`);
      }
    }
  
    rest() {
      console.log(`${this.name} is resting...`);
      this.speed = Math.min(this.speed + 30, 100);
      console.log(`${this.name}'s speed is now ${this.speed}.`);
    }
  }
//   const robin = new Adventurer("Robin", "Warrior");

// console.log(robin);            // View Robin's properties.
// console.log(robin.abilities);   // Check Robin's abilities.

robin.scout();                  
robin.specialAttack();          
robin.rest(); 

class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
      this.loyalty = 100; // Loyalty level ranges from 0 to 100.
      this.inventory = []; // Companions can have their own items.
    }
  
    follow() {
      console.log(`${this.name} the ${this.type} is following loyally.`);
    }
  
    play() {
      if (this.loyalty < 100) {
        this.loyalty = Math.min(this.loyalty + 10, 100);
        console.log(`${this.name} happily plays with you. Loyalty increased to ${this.loyalty}.`);
      } else {
        console.log(`${this.name} is already at maximum loyalty!`);
      }
    }
  
    fetch(item) {
      this.inventory.push(item);
      console.log(`${this.name} fetched a ${item} and added it to their inventory.`);
    }
  }
 // Updated adventurer class (Using Companion Class)
//   class Adventurer extends Character {
    // constructor(name, role, companion = null) {
    //   super(name);
    //   this.role = role;
    //   this.stamina = 100;
    //   this.abilities = this.getAbilities();
    //   this.companion = companion; // Can have a companion assigned.
    //   this.inventory.push("bedroll", "50 gold coins");
    // }
  
    // getAbilities() {
    //   const abilitiesByRole = {
    //     Warrior: ["Slash", "Shield Block", "Battle Cry"],
    //     Mage: ["Fireball", "Teleport", "Arcane Shield"],
    //     Rogue: ["Backstab", "Stealth", "Pick Lock"]
    //   };
    //   return abilitiesByRole[this.role] || ["Basic Attack"];
    // }
  
    // scout() {
    //   console.log(`${this.name} is scouting ahead...`);
    //   super.roll();
    // }
  
    // specialAttack() {
    //   if (this.stamina >= 20) {
    //     this.stamina -= 20;
    //     console.log(`${this.name} performs a special attack!`);
    //     super.roll(3);
    //   } else {
    //     console.log(`${this.name} is too tired to perform a special attack.`);
    //   }
    // }
  
    // rest() {
    //   console.log(`${this.name} is resting...`);
    //   this.stamina = Math.min(this.stamina + 30, 100);
    //   console.log(`${this.name}'s stamina is now ${this.stamina}.`);
    // }
  
  // Create Leo (Robin's Companion)
const leo = new Companion("Leo", "Cat");

// Leo has his own companion: Frank the Flea
leo.companion = new Companion("Frank", "Flea");
leo.companion.inventory.push("small hat", "sunglasses");

// Create Robin as an Adventurer with Leo as the companion
const robin = new Adventurer("Robin", "Warrior", leo);

console.log(robin);               // View Robin and his companion.
robin.scout();                    // Robin scouts ahead.
robin.specialAttack();            // Robin performs a special attack.
robin.rest();                     // Robin rests to regain stamina.

robin.companion.follow();         // Leo follows Robin.
robin.companion.play();           // Increase Leo's loyalty.
robin.companion.fetch("ball");    // Leo fetches a ball.

console.log(robin.companion.companion.inventory); // Check Frank's inventory.
