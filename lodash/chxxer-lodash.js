var chxxer= {
  filter:function(array ,test){
  var result = []
  for (var i = 0; i < array.length; i++) {
    if (test(ary[i],i,ary)) {
      result.push(ary[i])
    }
  }
  return result
},

  map:function(array ,mapper){
  var result = []
  for (var i = 0; i < array.length; i++) {
     result.push(mapper(i,ary[i],ary))
  }
  return result
},

  reduce:function(ary, reducer, init){
  for (var i = 0; i < ary.length; i++) {
    init = reducer(init, i, ary[i], ary)
  }
  return init 
},

  forEach:function(array, iterator){
  for (var i = 0; i < array.length; i++) {
    
    if (iterator(i, ary[i], ary) === false) {
      break
    }
}
  return  
},






 sumBy:function(ary, iteratee){
  var result
  for (var i = 0; i < ary.length; i++) {
    result += iteratee(ary[i])
  }
  return result

},



 sum:function(ary){
  return sumBy(ary, identity)
},


 matches:function(scr){
  return function(obj){
    for(var key in scr)
      if (obj[key] !== scr[key]) {
        return false
      }
  }
  return true
},


 flatten:function(ary){
  return [].concat(...ary)
},



after:function(n, func){
  var c = 0
  return function(...args){
    c++
    if (c >= n) {
      return func(...args)
    }
  }
},

ary:function(func, n = func.length){
  return function(...args){
    return func(...args.slice(0, n))
  }
},



flip: function(func){
  return function(...args){
    return func(...args.reverse())
  }
},

negate: function(func){
  return function(...args){
    return !func(...args)
  }
},


spread: function(func){
  return function(ary){
    return func(...ary)
  } 
},


}











