"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Berlin";
    }
}
;
const niko = new User("niko@niko.com", "Niko");
//niko.city = "Hamburg"; // Error: Cannot assign to 'city' because it is a read-only property.
