function greet(name) {
  console.log(`hello, ${name} !`);

  greet2(name);
  console.log("getting ready to say bye....");
  bye();
}

function greet2(name) {
  console.log(`how are you, ${name}?`);
}

function bye() {
  console.log(`ok bye👋`);
}

greet("olive🌵");
