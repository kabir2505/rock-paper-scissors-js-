
// let player=prompt('select between rock,paper and scissors!')
// player= player.toLowerCase();
// function getComputerChoice(list){
//     const rando=Math.floor(Math.random()*list.length);
//     return list[rando]
// }

// const mylist=['rock','paper','scissor']
// comp=getComputerChoice(mylist)


// function playground(player,comp){
//     if (player=='rock'&&comp=='scissor'){
//         alert('you won')
//     } else if (player=='paper'&&comp=='rock'){
//         alert('you won')
//     }else if(player=='scissor'&&comp=='paper'){
//         alert('you won')
//     }else{
//         alert('you lost,try again')
//     }
// }
// let p=0
// let c=0
let p=0
let c=0
for (i=0;i<5;i++){

function getComputerChoice(list){
    const rando=Math.floor(Math.random()*list.length);
    return list[rando]
};
const mylist=['rock','paper','scissor']

let player=prompt('select between rock,paper and scissors!')
player= player.toLowerCase();



comp=getComputerChoice(mylist)

let a=0
let b=0

function playground(player,comp){
    if (player=='rock'&&comp=='scissor'){
        alert('you won')
        a+=1
    } else if (player=='paper'&&comp=='rock'){
        alert('you won')
        a+=1
    }else if(player=='scissor'&&comp=='paper'){
        alert('you won')
        a+=1
    }else{
        alert('you lost,try again')
        b+=1
    }
    return [a,b]

}

let result=playground(player,comp);
a=result[0];
b=result[1];
p+=a
c+=b




console.log('computer=',comp)
console.log('playa=',player)


console.log('computer-score',c)
console.log('player-score:',p)
  
}

let temp=`the final score is:computer:${c}, you:${p} `
console.log(temp)