const obj ={
  1: {
    type: "adjective",
    word: "a",
    meanings: {
      1: "used when mentioning someone or something for the first time; the indefinite article",
      2: "one single.",
      3: "per: *twice a week.*"
    }
  },
  2: {
    word: "@",
    type: "symbol",
    meanings:{
      1: "to show cost or rate per unit.",
      2: "in Internet addresses between the user's name and the domain name: *john.smith@oup.com*"
    }
  },
  3:{
    word: "AA",
    type: "abbreviation",
    meanings: {
      1: "Alcoholics Anonymous.",
      2: "Automobile Association."
    }
  },
  4:{
    word: "aardvark",
    type: "noun",
    meanings:{
      1: "An African mammal with a long shout."
    }
  },
  5:{
    word: "aback",
    type: "adverb",
    meanings:{
      1: "surprised and disconcerted."
    }
  },
  6:{
    word: "abacus",
    type: "noun",
    meanings:{
      1: "a frame with rows of wires along which beads are slid, used for counting."
    }
  },
  7:{
    word: "abandon",
    type: "verb",
    meanings:{
      1: "leave permanently.",
      2: "give up."
    }
  },
  8:{
    word: "abandoned",
    type: "adjective",
    meanings: {
      1: "Wild or uncontrolled."
    }
  },
  9:{
    word: "abase",
    type: "verb",
    meanings:{
      1: "humiliate or degrade."
    }
  },
  10:{
    word: "abashed",
    type: "adjective",
    meanings:{
      1: "embarrassed or ashamed."
    }
  },
  11:{
    word: "abate",
    type: "verb",
    meanings:{
      1: "became less severe or widespread."
    }
  },
  12:{
    word: "abbatoir",
    pronounciation: "a-butt-war",
    type: "noun",
    meanings:{
      1: "a slaughterhouse."
    }
  },
  13:{
    word: "abbey",
    type: "noun",
    meanings:{
      1: "a building occupied by a community of monks or nuns."
    }
  },
  14:{
    word: "abbot",
    type: "noun",
    opposite_gender: "abbess",
    meanings:{
      1: "the head of an abbey."
    }
  },
  15:{
    word: "abbreviate",
    type: "verb",
    meanings:{
      1: "shorten a word or phrase."
    }
  },
  16:{
    word: "abdicate",
    type: "verb",
    meanings:{
      1: "give up the throne.",
      2: "fail to carry out a duty."
    }
  },
  17:{
    word: "abdomen",
    type: "noun",
    meanings:{
      1: "part of the body containing the digestive organs."
    }
  },
  18:{
    word: "abduct",
    type: "verb,
    meanings:{
      1: "kidnap"
    }
  },
  19:{
    word: "aberrant",
    type: "adjective",
    meanings:{
      1: "not normal or acceptable."
    }
  },
  20:{
    word: "aberration",
    type: "noun",
    meanings:{
      1: "a departure from what is normal or acceptable."
    }
  },
  21:{
    word: "abet",
    type: "verb",
    meanings:{
      1: "encourage or help in wrongdoing."
    }
  },
  22:{
    word:"abeyance",
    type: "noun",
    meanings:{
      1: "in temporary disuse."
    }
  },
  23:{
    word: "abhor",
    type: "verb",
    meanings:{
      1: "detest."
    }
  },
  24:{
    word: "abhorrent",
    type: "adjective",
    meanings:{
      1: "disgusting; hateful."
    }
  }
}
class Dictionary{
  constructor(){
    this.object = obj
  }
  get(id){
    //get a word's data by its id
    return this.object[id]
  }
  find(name){
    //get a word by its name
    const found = this.object.find(w => w.word == name)
    if(!found){
      return null
    }else{
    return found
    }
  }
  array(){
    const array = []
    for(let prop in this.object){
      array.push(this.object[prop])
    }
    return array;
  }
}