// variables
let btn = document.querySelector("#new-quote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")


const quotes = [
  {
    quote: `"Be mindful when it comes to your words. A string of some that don't mean much to you, may stick with someone else for a lifetime." `,
    person: `Rachel Wolchin`,
  },
  {
    quote: `"...But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will run wild and cause you grief." `,
    person: `Adwerd Lonkeys`,
  },
  {
    quote: `"Words have energy and power with the ability to help, to heal, to hinder, to hurt, to harm, to humiliate, and to humble." `,
    person: `Yehuda Berg`,
  },
  {
    quote: `"My task, which I am trying to achieve is, by the power of the written word, to make you hear, to make you feel--it is, before all, to make you see." `,
    person: `Joseph Concard`,
  },
  {
    quote: `"Be careful what you say. You can say something hurtful in ten seconds, but ten years later, the wounds are still there." `,
    person: `Joel Osteen`,
  },
  {
    quote: `"All I need is a sheet of paper and something to write with, and then I can turn the world upside down." -Friedrich Nietzsche `,
    person: `Friedrich Nietzsche`,
  },
  {
    quote: `"Don't mix bad words with your bad mood. You'll have many opportunities to change a mood, but you'll never get the opportunity to replace the words you spoke." `,
    person: `Ali Aksoy`,
  },
];

btn.addEventListener("click",function() {
    let random = Math.trunc(Math.random() * quotes.length) ;
    document.querySelector(".quote").textContent = quotes[random]["quote"]
    document.querySelector(".person").textContent = quotes[random]["person"]

})