function createInstructor(firstName, lastName) {
    return {
        firstName, 
        lastname 
    }
}

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt"
    [favoriteNumber]: "That's my favorite!"
}

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + "says bye!";
    }
}

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}