class User {

    email: string;
    name: string;
    readonly city: string = "Berlin";

    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
};

const niko = new User("niko@niko.com", "Niko");
//niko.city = "Hamburg"; // Error: Cannot assign to 'city' because it is a read-only property.