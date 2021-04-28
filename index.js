/*

Today's exercise: Sorting last names

Repo: boolean-uk-js-sorting-last-names

Description
Let's have some more practice with arrays! In this exercise we expect you to become more acquainted with arrays, and what we can do with them.
So we start with an array of last names, and from there you're going to perform a bunch of operations in it!

Instructions
- Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
- Have a prompt that adds your last name to the array
- Have an output that has the names sorted alphabetically
- Have an output that tells you what is the position of your name in the sorted array
- Have an output that Uppercase's all names in the array

Tips
- Try to keep track of your data, and when it is being changed
- Remember to google docs if you don't know or remember certain details

Challenge
Let's take it a step further and group each sorted name with its upper-cased one in a sub-array, which in its turn will go inside another array to group it all together. 

It should look like this in your output:

[  ["Surname A", "SURNAME A"], ["Surname B", "SURNAME B"] ...other names ]

Output the result to the console.

*/
const lastNames = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

 lastNames.push("Fulani")

 console.log(lastNames)
 console.log(lastNames.sort())
  console.log(lastNames.sort())
 console.log(lastNames[0])
 
 // for (const name of lastNames) {
 //  console.log(name.toUpperCase())
 // }

 const mainArray = []
 

 for (const name of lastNames) {
   let eachNames = []
   eachNames.push(name)
   eachNames.push(name.toUpperCase())
    mainArray.push(eachNames) 
    
    
 }

 console.log(mainArray)


