// const value = ['one','two','three'];

// const myArr = value.map((val)=> {return `<li>${val}</li>`});

// document.getElementById('mylist').innerHTML = myArr.join(",");

// console.log(myArr)

// example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join(',');