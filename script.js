var fruits=["apple","orange","mango"];
console.log(fruits);
document.getElementById("declaration_of_arrays").innerHTML=fruits;

var first_fruit=fruits[0];
console.log(first_fruit);
document.getElementById("access_first_element").innerHTML=first_fruit;

var second_fruit=fruits[1];
console.log(second_fruit);
document.getElementById("access_second_element").innerHTML=second_fruit;

var third_fruit=fruits[2];
console.log(third_fruit);
document.getElementById("access_third_element").innerHTML=third_fruit;

var length_of_array=fruits.length;
console.log(length_of_array);
document.getElementById("display_length_of_array").innerHTML=length_of_array;

var numbers=["45", "4", "9", "16", "25"];
console.log(numbers);
document.getElementById("display_number_array").innerHTML=numbers;

var max_num=Math.max.apply(Math, numbers);
console.log(max_num);
document.getElementById("display_maximum_number").innerHTML=max_num;

var min_num=Math.min.apply(Math, numbers);
console.log(min_num);
document.getElementById("display_minimum_number").innerHTML=min_num;