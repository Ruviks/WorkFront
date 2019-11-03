class TowerOfHanoi{
  static  void tower(int a,char from,char aux,char to){
        if(a==1){
          System.out.println("Moving disc 1 from "+from+" to "+to);
           return;
        }
        else{
           tower(a-1,from,to,aux);
           System.out.println("Moving disc "+a+" from "+from+" to "+to);
           tower(a-1,aux,from,to);
        }
    }
   public static void main(String[] args)
   {
       tower(3,'A','B','C');
   }
}