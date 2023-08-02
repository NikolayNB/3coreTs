class User {

    readonly city: string = "Berlin";
    constructor(
        public email: string, 
        public name: string,
        //private userId: string
        ){
    }
};

const niko = new User("niko@niko.com", "Niko");
//niko.city = "Hamburg"; // Error: Cannot assign to 'city' because it is a read-only property.