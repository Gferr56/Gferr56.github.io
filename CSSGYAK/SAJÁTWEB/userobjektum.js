let user = {
    "_id": "lglsjghhoiaghohdgahaohg",
    index: 0,
    isActive: true,
    balance: 1241291,
    picture: "http://placeholder.it/32x32"
    }
user.minusBalance = function(amount) {
    this.balance -= amount;
    }
user.plusBalance = function(amount) {
    this.balance += amount;
    }
    