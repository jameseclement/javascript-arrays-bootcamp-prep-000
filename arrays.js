var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
  }

function destructivelyAddElementToBeginningOfArray(array, element){
<<<<<<< HEAD
 array.unshift(element)
 return array
  }

function addElementToEndOfArray(array, element){
  return [...array, element]
  }

function destructivelyAddElementToEndOfArray(array, element){
 array.push(element)
 return array
  }
  
function accessElementInArray(array, index){
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift()
return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
  }
=======
 var newq = [element, ...array]
 return newq
  }
>>>>>>> 53a7a756aa2ac0976c0690a7bafd75562c705c44
