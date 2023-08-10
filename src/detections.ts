function detectType(val: number | string){
    if (typeof val === "string"){
       return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide an id")
        return;
    }
    id.toLowerCase();
};

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
    return false;
}


function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void};
type Bird = {flight: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish food"
    }else{
        pet
        return "Bird food"
    }
}

//Discriminated Unions and Exhaustiveness checking with never

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sides: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    //return shape.sides * shape.sides;
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sides * shape.sides;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}


