var max=10;
var sum=0;
for(var i=0;i<max;i+=sum){
    last=sum;
    sum=last+i;
    console.log(last,sum);
}
console.log(sum);