//checks if a given number is prime or not
function one(x)
{
    if(x<=0)
    {
        console.log("Enter a number larger or equal  than 1");
        return;
    }
    if(x==1)
    {
        console.log("No");
        return;
    }
    if(x==2)
    {
        console.log("yes");
        return;
    }
    for(let i=2;i<x;i++)
    {
    if(x%i==0)
    {console.log("No");
    break;

    }
    else 
    {console.log("yes");
    break;
    }    
}

}
//Given the number prints according number in Fibonacci sequence 
function two(n)
{
    if(n==0 || n==1)
    {
        console.log(n)
        return;
    }
    let a=0,b=1,r=0;
 for(let i =0;i<=n-2;i++)
 {
    r=a+b;
    a=b;
    b=r;
     
     

 }   
 console.log(r);   
}
//Given N prints Fibonacci sequence up to N
function three(n)
{
   if(n>0)
   {
       let a=0,b=1,r=0;
       console.log(r);
      while(r<=n)
       {
        console.log(r)
          r=a+b;
          a=b;
          b=r;
       }   
   }
   else console.log("Input shall be greater than 0");
}
//Too long to type the description 
function four(x)
{
    if(x<=0)
    {console.log("Can not calculate");
    return;
}
    let s=0,m=1;
  while(x>0)
  {
    s+=x%10;
    m*=x%10;
    x=Math.floor(x/10);
  }   
  console.log(m,s)
  if(m%s==0)console.log(m/s);
  else console.log(m%s);
}
function nine(a,b,num)
{
 let delta=(b-a)/(num-1);
 var arr=[];
 arr.push(a);
 while(a<b)
 {
   arr.push(a+delta);
   a+=delta;
 }
 console.log(arr);

}
//Given an array of numbers.Find the index of the second maximum element.
//The most unefficient way to do so
function ten(arr)
{
  let   i=1;l=1;
  const arr1=[...arr];
  arr.sort(function(a, b){return a - b});
 var x=arr1.indexOf(arr[arr.length-2]);
 console.log(x);


}

function eleven(arr,pad,repeat)
{   if(pad>arr.length)
    {console.log("Invalid Padding Amounth");
        return;
    }var start=[],end=[],result=[],a=[],b=[];
    for(let i=0;i<pad;i++)start.push(arr[i]);
    for(let i=arr.length-pad;i<arr.length;i++)end.push(arr[i]);
    for(let i=1;i<=repeat;i++)
    {a=a.concat(start);
     b=b.concat(end);
    }
        result=a.concat(arr).concat(b);
  console.log(result);
}
 var array = [1, 2, 3, 4] ,padAmount = 2 ,repeat = 1;
 eleven(array,padAmount,repeat);
