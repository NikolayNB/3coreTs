abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract creatStory(): void;
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter);
    }

    creatStory(): void{
        console.log("story created")
    }
}

const nikolay = new Instagram('normal', 'black and white');