
function updateLight(current) {
    let  arr =  ['green', 'yellow', 'red'];
    let index =  arr.findIndex(item => item == current)
    console.log(index);
  
    if (index == (arr.length - 1)) {
      return arr[0];
    } else if  ( index == -1) {
      return 'Вы неправильно ввели цвет';  
    } else {
      return arr[index + 1]
    }
   
  }
  
  
  color = 'red'
  
  nextColor = updateLight(color)
  console.log(nextColor)
  