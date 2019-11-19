function one(arr)
{   var max=arr[0]*arr[1];
    for(let i=1;i<arr.length-1;i++)
    { if(arr[i]*arr[i+1]>max)max=arr[i]*arr[i+1];

    }
return max;
}
function two(arr)
{ var min =Math.min(...arr),max=Math.max(...arr),k=0;
   for(let i=0;i<arr.length;i++)
   {
       if(arr[i]>min && arr[i]<max)k++;
   }
   return max-min-1-k;

}
function three(str)
{
  let arr=str.split(' '),result="";
  for(let i=0;i<arr.length;i++)
  {
      result+=arr[i][0].toUpperCase();
  }
  return result;
}
function four(s,n)
{ let result=[],i=0;
    while(s.length-i>=n)
    {
        result.push(s.substring(i,n+i));
        i++;
    }
    return result;
}
