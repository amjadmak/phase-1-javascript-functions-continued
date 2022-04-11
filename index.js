function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`
}
function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
  }
function wrapAdjective( def = "*"){
    return function(string = "special"){
        return `You are ${def}${string}${def}!`
    }
}
  
console.log(wrapAdjective()("a dedicated programmer"))
