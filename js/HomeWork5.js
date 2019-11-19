function sum(n)
{  if(n<10)return n;
  return n%10 +sum(Math.floor(n/10));
}
//Main functions
function one(array,i=0)
{  if(i==array.length-1)
    {
        array.pop();
        return array;
    }
    array[i]=array[i+1];
    
  return  one(array,++i);
}
function flatten (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
function three(n)
{
if(n<=10)
  {if(n==10)return 1;
    else return n;
  }
  else return three(sum(n));
}
function four(arr,n)
{  if(n==0) return arr;
  if(n>0)
  {
  temp=arr[0];
  for(let i=0;i<arr.length-1;i++)
  arr[i]=arr[i+1];
  arr[arr.length-1]=temp;
  return four(arr,--n);}
  else {
    temp=arr[arr.length-1];
    for(let i=arr.length-1;i>=1;i--)
    {
      arr[i]=arr[i-1];
    }
 arr[0]=temp;
 return four(arr,++n);
  }
}
function objectFlip(obj){
  var object ={};
  Object.keys(obj).forEach(key => {
    if(object.hasOwnProperty(obj[key]))  
      object[obj[key]].push(key); 
      else{
      object[obj[key]]=[];
      object[obj[key]].push(key);
    }
    
   
  });
  return object;
}
function sort(arrobj=[])
{
  arrobj.sort(function(a,b){
   let check=b.readStatus;
   if(check)return 1;
   else return b.percent-a.percent;
  });
 return arrobj;
}
arr=[
  { book: "Catcher in the Rye", readStatus: true, percent: 40},
  { book: "Animal Farm", readStatus: true, percent: 20},
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 } ,
  { book: "After Dark", readStatus: true, percent: 70 }
  ];
  console.log(three(10))