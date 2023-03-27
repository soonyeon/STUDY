class Song{
  constructor(title, singer, year){
    this.title = title;
    this.singer = singer;
    this.year = year;
  }
  getInfo(){
    return `이 곡의 제목은 ${this.title}이고 가수는 ${this.singer}이다`;
  }
}
const song1 = new Song("Rush Hour", "Crush", "2022-09-22");
console.log(song1.getInfo());





//constructor function(함수명 첫글자 대문자로)
function Song(title, singer,year){
  this.title = title;
  this.singer = singer;
  this.year = new Date(year);
}
Song.prototype.getInfo = function(){
  return `이 곡의 제목은 ${this.title}이고 가수는 ${this.singer}이다`;
}
Song.prototype.getYear = function(){
  return this.year.getFullYear();
}
const song1 = new Song("RushHour","crush","2022-09-22");
const song2 = new Song("lalala","josh","2020-10-02");
const song3 = new Song("Rush","leessang","2002-02-11");
console.log(song1,song2,song3);









