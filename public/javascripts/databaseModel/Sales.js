class Sales {

    constructor(id, saleType, saleDate) {
        this.id = id;
        this.saleType = saleType;
        this.saleDate = saleDate;

    }

    toString() {

        return "id: " + this.id + ", saleType: " + this.saleType + ", saleDate: " + this.saleDate;
    }

}