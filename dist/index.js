"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        //private _courseCount = 1;
        this.city = "Berlin";
    }
    get AppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Invalid course count');
        }
        this._courseCount = courseNum;
    }
}
;
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    chageCourseCount() {
        //this._courseCount = 2; <- Error: Property '_courseCount' is private and only accessible within class 'User'.
        this._courseCount = 2; //<- Property '_courseCount' is protected and only accessible within class 'User' and its subclasses.
    }
}
;
const niko = new User("niko@niko.com", "Niko");
//niko.city = "Hamburg"; // Error: Cannot assign to 'city' because it is a read-only property.
