"use strict";
class Instagram {
    constructor(cameraModel, filter, burst) {
        this.cameraModel = cameraModel;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraModel, filter, burst, channel) {
        this.cameraModel = cameraModel;
        this.filter = filter;
        this.burst = burst;
        this.channel = channel;
    }
    creatStory() {
        console.log("story created");
    }
}
