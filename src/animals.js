const animalProperty = 'weight';

const monkey = {
    color: 'red',
    drink: 'water',
    fingers: 5,
    nails: 'flat',
    vision: 'hight quality',
    brain: 'brain with well developed cerebellum',
    teethType: 3,
    bodyPosition: 'could be vertical',
    run: function () {
    },
    eat: function () {
    },
    screaming: function () {
    },
    collaboration: function () {
    },
    type: function () {
    },
    habitat: function () {
    }//where they are leaving

};
//TODO fly

const fly = {};
    fly.kingdom = 'Animalia';
    fly.clade = 'Euarthropoda';
    fly.class = 'Incecta';
    fly.order = 'Diptera';
    fly.color = 'grey';
    fly.drink = 'water';
    fly.wings = 2;
    fly.flight = function () {};
    fly.eat = function () {};
    fly.lifeCycle = function () {};
    fly.uses = function(){};
    fly.adoptations = function(){};
    fly.ecology = function(){};

//TODO rabbit

const rabbit = {};
rabbit['color'] = 'white';
rabbit['drink'] = 'water';
rabbit['ears'] = 2;
rabbit['Kindom'] = 'Animalia';
rabbit['Phylum'] = 'Chordata';
rabbit['Subphylum'] = 'Vertebrata';
rabbit['Class'] = 'Mammalia';
rabbit['Order'] = 'Lagomorpha';
rabbit['Family'] = 'Leporidae';
rabbit['Domestication'] = function(){};
rabbit['Evolution'] = function(){};
rabbit['Morphology'] = function(){};
rabbit['Musculature'] = function(){};
rabbit['jump'] = function () {};
rabbit['eat'] = function () {};
rabbit[animalProperty] = 3;
console.log("test 1" + rabbit.animalProperty);
console.log("test2 " + rabbit.weight);

