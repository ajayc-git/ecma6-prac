var greet = function(g,n="Ajay") {
  console.log(g+" "+n);
}

greet("Hello");
greet("Hi","Venkat");

let greet2 = (m,n="Ajay") => console.log(m+"! "+n) ;

greet2("Hey");
greet2("Hey","Jinson");

let receive = (complete = () => console.log("Complete")) => complete();

receive();
