const clock=function(){
const date=new Date();
const hours=date.getHours();
const mins=date.getMinutes();
const secs=date.getSeconds();

const hour=(hours < 10)? "0"+hours:hours;
const min=(mins < 10)? "0"+mins:mins;
const sec=(secs < 10)? "0"+secs:secs;

const hourTime=(hour>=12)?(hour-12):(hour);

time=(`${hourTime}:${min}:${sec}`);
document.getElementById("timer").innerHTML=`Start at:${time}`;setTimeout(clock,1000)}
clock()


var myArray=[1,2,3,4,5,6,7,8,9,0];
myArray.filter(()=>{
    argument%0===2;
})
myArray.filter()

// var unitNum = prompt("How many units are you doing?")
// for (i = 0; i < unitNum; i++) {
//     var unitName = prompt("What is your unit name?");
//     var unitScore = prompt("What is your unit score?");
//     console.log(`Name:${unitName}`, `Score:${unitScore}`)
// }

