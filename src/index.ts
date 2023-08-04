class User {

    protected _courseCount = 1;
    //private _courseCount = 1;


    readonly city: string = "Berlin";
    constructor(
        public email: string, 
        public name: string,
        //private userId: string
        ){
    }


    get AppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount;
    }
    
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error('Invalid course count')
        }
        this._courseCount = courseNum;
    }
};

class SubUser extends User{
    isFamily: boolean = true;
    chageCourseCount(){
        //this._courseCount = 2; <- Error: Property '_courseCount' is private and only accessible within class 'User'.
        this._courseCount = 2; //<- Property '_courseCount' is protected and only accessible within class 'User' and its subclasses.
    }
};

const niko = new User("niko@niko.com", "Niko");
//niko.city = "Hamburg"; // Error: Cannot assign to 'city' because it is a read-only property.