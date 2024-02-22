
/*
//document.querySelector("main#main").remove();
main.remove()
const newHeader = document.createElement("h1");
newHeader.id="victory"

newHeader.textContent = "Michael is the champion";
//newHeader.innerHTML = "Michael is the champion";
//newHeader.innerText = "Michael is the champion";
newHeader.className = "victory";
// Write your code here!

*/

//teacher's solution
let main = document.getElementById('main')
// # is for ids, . is for classes
main = document.querySelector('#main')
main.remove()

for(let i = 0; i < 10; i++){

}

const newHeader = document.createElement('h1')
    newHeader.id = 'victory'
    newHeader.textContent = "yourName is the champion"
    body.append(newHeader)

let htmlcollection = document.getElementsByTagName('h1') //get all tags

Array.from(document.getElementsByTagName('h1')).forEach((el) => el.remove())// turn into Array
//getElementsByTagname and getElementsByClassName isll return array
const body = document.getElementsByTagName('body')[0]
