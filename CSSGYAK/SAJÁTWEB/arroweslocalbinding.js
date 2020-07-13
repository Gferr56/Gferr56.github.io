/*
  A régi módszer, a this-t beletettük a that-be,
  hogy a setInterval-on belüli callback-ben is elérjük
*/
function People() {
    var that = this;
    that.age = 0;
    setInterval(function setAge() {
      that.age = 30;
    }, 1000);
  }
  
  // És most:
  function PeopleWithAF() {
    this.age = 0;
    setInterval(() => {
      this.age = 30;
    }, 1000);
  }