function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //This will work correctly because the function accepts an array of strings

let user2 = "Jane Doe";
console.log(greeter(user2)); //This will also work because it passes a single string