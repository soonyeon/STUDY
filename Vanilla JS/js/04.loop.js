const animals = [
  {name: "monkey", size: "medium", isAggressive: false, weight: 20},
  {name: "lion", size: "big", isAggressive: true, weight: 100},
  {name: "tiger", size: "big", isAggressive: true, weight: 200},
  {name: "hippo", size: "big", isAggressive: true, weight: 1000},
  {name: "cat", size: "small", isAggressive: false, weight: 10},
]

// old
// for(let i=0; i<animals.length; i++){
//   console.log(animals[i])
// }

// for(let animal of animals){
//   console.log(animal.size);
// }

//forEach
// animals.forEach(function(animal){
//   console.log(animal);
// })


//map 재정의
// const mappedAnimal = animals.map(function(animal){
// return `${animal.name} is ${animal.size}`;
// })
// console.log(mappedAnimal);


//arrowfunction
// function(){} //펑션을 입력하는 방법
// ()=>{} // 위의 형태를 줄여줄 수 있다
// const mappedAnimal = animals.map(animals=>animals.size)
// console.log(mappedAnimal);

//filter 필터
// const fileteredAnimal = animals.filter(animal =>animal.weight >= 200 && animal.size === 'big');
// console.log(fileteredAnimal);

//reduce 합
const reduceAnimal = animals.reduce((acc,cur)=>{
  return acc + cur.weight
},0) //초기화를 위해 초기값 0 지정

console.log(reduceAnimal);

