//Multiples of 3 and 5 and sum them
var max=1000; //changeable max number
var sum=0; //clear out sum
for (var i=0;i<max;i++) {
  if (!(i%3)||!(i%5)) { //check if not a number which means it's false or 0
        sum+=i;         //stores and increments the sum
    }
}
console.log(sum);       //prints out sum