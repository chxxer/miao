var chxxxer= {
  filter:function filter(array ,test){
  var result = []
  for (var i = 0; i < array.length; i++) {
    if (test(ary[i],i,ary)) {
      result.push(ary[i])
    }
  }
  return result
}

  map:function map(array ,mapper){
  var result = []
  for (var i = 0; i < array.length; i++) {
     result.push(mapper(i,ary[i],ary))
  }
  return result
}

  reduce:function reduce(ary, reducer, init){
  for (var i = 0; i < ary.length; i++) {
    init = reducer(init, i, ary[i], ary)
  }
  return init 
}

  forEach:function forEach(array, iterator){
  for (var i = 0; i < array.length; i++) {
    
    if (iterator(i, ary[i], ary) === false) {
      break
    }
}
  return  
}






 sumBy:function sumBy(ary, iteratee){
  var result
  for (var i = 0; i < ary.length; i++) {
    result += iteratee(ary[i])
  }
  return result

}



 sum:function sum(ary){
  return sumBy(ary, identity)
}


 maches:function maches(scr){
  return function(obj){
    for(var key in scr)
      if (obj[key] !== scr[key]) {
        return false
      }
  }
  return true
}


 flatten:function flatten(ary){
  return [].concat(...ary)
}
  


  }



















