
//class

// class EvenorOdd{
//     int num;
//     void find(int num){
//         if (num%2 == 0){
//             System.out.println("number is even");
//         }else{
//             System.out.println("number is odd");
//         }
//     }
// }
// public class FindEvenOrOdd {
//     public static void main(String[] args) {
//         EvenorOdd num1 = new EvenorOdd();
//         EvenorOdd num2 = new EvenorOdd();
//         num1.find(12);
//         num2.find(25);
        
//     }
// }


// method

// public class FindEvenOrOdd {
//     public static void main(String[] args) {
//         Scanner scan=new Scanner(System.in);  
//         System.out.print("Enter the number: ");  
//reading value from user  
// int num=scan.nextInt();  
//method calling  
// findEvenOdd(num);  
// }  
//     }


//     public class findEvenOdd(int num){
//         if (num%2 == 0){
//                         System.out.println("number is even");
//                     }
//                     else{
//                         System.out.println("number is odd");
//                     }
//     }




public class FindEvenOrOdd {
    public static void main(String[] args) {
        int num1 = 12;
        int num2 = 13;
        int c = num1 + num2 ;
        System.out.println("the number is " + c);
        
    }
}

public void EvenorOdd(int c) {
    if (c%2 == 0)
    {
       System.out.println("number is even");
    }
    else{
       System.out.println("number is odd");
    }
}