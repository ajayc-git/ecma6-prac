var square = (x) => x * x;

var parent = {
  name: "john",
  method : function(m,h) { h(m) },
  r: function() {
    this.method("Hello", x => console.log(x + " - " + this.name))
  }
  
}

parent.r();
