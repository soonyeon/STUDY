// Object key,value
const animal = {
  name: "monkey", //문자 가능
  weight: 10, // 숫자 가능
  food: ["banana","grape","nuts"], //오브젝트 안에 배열 사용 가능
  location: { //오브젝트 안에 또다른 오브젝트 사용 가능
    country: "Kongo",
    home: "forest",
    isAfrica:true,
  },
  // 오브젝트 안에 function도 사용 가능 (오브젝트 안에 선언된 함수: 메서드 )
}
const animalJSON = JSON.stringify(animal);
console.log(JSON.parse(animalJSON).name)
