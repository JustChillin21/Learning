var max=50;     //Sets the maximum loop iterations
var maxsum=4000000; //Sets the largest number that can be included
var sum=0;          //initializes sum variable to 0
var f=[];           //initializes array to store values
f[0]=0;             //sets first two values to 0 and 1 needed for fibonacci formula
f[1]=1;
for(var i=2;i<max;i++){
    f[i]=f[i-1]+f[i-2];                 //  Fibonacci formula
    if (!(f[i]%2)&&(f[i]<maxsum)) {     //If the value is even !(%2) and less than the maximum value
//        console.log("Even",i,f[i]);   //Check to see what the actual value is
        sum=sum+f[i];   //Sums up the even values
    }
}
console.log(sum);       //Returns the Answer