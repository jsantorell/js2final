class Calls {

    constructor(id, timeStarted, timeEnded, repId) {
        this.id = id;
        this.timeStarted = timeStarted;
        this.timeEnded = timeEnded;
        this.repId = repId;

    }
    
   

    toString() {

        return "id: " + this.id + ", timeStarted: " + this.timeStarted + ", timeEnded: " + this.timeEnded + ", repId: " + this.repId;
    }
}


