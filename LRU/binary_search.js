function binerySearch(array = [40, 20, 32, 40, 54, 70, 90], target = 54){
  
    let start = 0
    let end = array.length - 1
    
    while(start <= end){
      let mid = Math.floor((start + end) / 2)
      target = target
        
      const middle = array[mid]
      target = target
        
      if(middle == target){
        return mid
      }
      
      if(middle > target){
        end = mid - 1
      }
      
      if(middle < target){
        start = mid + 1
      }
    }
  
      return -1
  }