var fruits = ["Mango", "Apple", "Orange", "Banana", "Grapes"];
document.getElementById("fruits").innerHTML = fruits[0] + " is king of fruits and length of array is " + fruits.length;
document.getElementById("allfruits").innerHTML = fruits.join("+");
fruits.push("Kiwi");
document.getElementById("push").innerHTML = fruits.toString();
fruits.pop();
document.getElementById("pop").innerHTML = fruits.toString();
fruits.shift();
document.getElementById("shift").innerHTML = fruits.toString();
fruits.unshift("Cherry");
document.getElementById("unshift").innerHTML = fruits.toString();
fruits[5] = "Berry";
document.getElementById("change").innerHTML = fruits.toString();
delete fruits[3];
document.getElementById("delete").innerHTML = fruits.toString();