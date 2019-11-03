class Palindrome{

    public static boolean palindrome(String s)
    {
        s=s.replaceAll("\\s+","");
        char[] arr= s.toCharArray();
        int length=s.length();
        int n=0;
        if(length%2==0) n=length/2;
           else n=(int)length/2;
        for(int i=0;i<n;i++)
        {
            if(arr[i]!=arr[length-i-1])return false;
            
        }
           return true;
    }
    public static void main(String[] args)
    { 
      System.out.println(palindrome(" I did, don I"));  
    }

}