// Soldier
class Soldier {
  constructor (valueHealth, valueStrength) {
    this.health =  valueHealth;
    this.strength = valueStrength;
  }
attack = () => {
  return this.strength;
}
receiveDamage = (theDamage) => {
  this.health -= theDamage;
}
}

// Viking
class Viking extends Soldier {
  constructor (valueName, valueHealth, valueStrength) {
    super (valueHealth, valueStrength);
    this.name =  valueName;
  }
  receiveDamage = (theDamage) => {
    this.health -= theDamage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;  
    } else {
      return `${this.name} has received ${theDamage} points of damage`;  
    }
  }
  battleCry = () => {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  super (valueHealth, valueStrength) {
  }

  receiveDamage = (theDamage) => {
    this.health -= theDamage;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${theDamage} points of damage`
    }
}
}

// War
class War {
  constructor (vikingArmy, saxonArmy) {
  this.addViking = "Viking";
  this.addSaxon = "Saxon";
  this.vikingAttack = "vAttack";
  this.saxonAttack = "sAttack";
  this.showStatus = "Status";
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
