let sampleObject = {
    a: 10,
    b: () => console.log(this.a, this),
    c: function() {
      console.log(this.a, this);
    }
  };
  
  sampleObject.b();
  // undefined, Window {...} (vagy global object)
  
  sampleObject.c();
  // 10, Object {...}