class User {

    private _courseCount = 1;

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

const niko = new User("niko@niko.com", "Niko");
//niko.city = "Hamburg"; // Error: Cannot assign to 'city' because it is a read-only property.