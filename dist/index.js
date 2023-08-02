"use strict";
class User {
    constructor(email, name) {
        this.city = "Berlin";
        this.email = email;
        this.name = name;
    }
}
;
const niko = new User("niko@niko.com", "Niko");
//niko.city = "Hamburg"; // Error: Cannot assign to 'city' because it is a read-only property.
