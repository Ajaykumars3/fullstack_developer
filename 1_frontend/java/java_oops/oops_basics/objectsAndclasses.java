// class is a
/* Fields
Methods
Constructors
Blocks
Nested class and interface */
/* method-it is function (blocks) execute only when we call */


// class within the main

// public class objectsAndclasses {
//     int id;
//     String name;
//     public static void main (String[] args){
//         objectsAndclasses s1 = new objectsAndclasses();
//         System.out.println(s1.id +" " + s1.name);
//     }
// }

// class student {
//     int id;
//     String name;
// }
// public class objectsAndclasses {
//     public static void main(String[] args){
//         student s1 = new student();
//         System.out.println(s1.id + s1.name);
//         student s2 = new student();
//         System.out.println(s2.id + s2.name);
//     }
// }

/*
 3 Ways to initialize object
There are 3 ways to initialize object in Java.

By reference variable
By method
By constructor
 */

 // By reference variable

//  class student {
//     int id;
//     String firstName;
//     char lastName;
// }
//  public class objectsAndclasses{
//     public static void main (String[] args){
//         student a1 = new student();
//         student a2 = new student();
//         a1.id = 4;
//         a1.firstName = "ajay";
//         a1.lastName = 's';
//         a2.id = 5;
//         a2.firstName = "kumar";
//         a2.lastName = 's';
//         System.out.println(a1.id + " " + a1.firstName + " " + a1.lastName);
//         System.out.println(a2.id + " " + a1.firstName + " " + a2.lastName);
//     } 
//  }

// By method


// class student {
//     int rollNo;
//     String name;
//     void insertrecord(int r, String s){
//        int rollNo = r;
//        String name = s;
//     }
//     void displayInformation(){
//         System.out.println(rollNo + " " + name);
//     }
// }
// public class objectsAndclasses {
//     public static void main(String[] args) {
//         student s1 = new student();
//         student s2 = new student();
//         s1.rollNo = 1;
//         s1.name = "ajay";
//         s2.insertrecord(2,"kumar");
//         s1.displayInformation();
//         s2.displayInformation();
//     }
// }


// By constructor

//rectangle area calculation


// class rectangle{
//     int length;
//     int width;
//     void insert(int l,int w){
//         length = l;
//         width = w;
//     }
//     void display(){
//         int area = length* width;
//         System.out.println("area of the rectangle is " + area);
//     }
// }

// public class objectsAndclasses{
//     public static void main(String[] args) {
//         rectangle r1 = new rectangle();
//         rectangle r2 = new rectangle();
//         r1.insert(12, 25);
//         r2.insert(23, 54);
//         r1.display();
//         r2.display();
//     }
// }



// class rectangle(int l,int w){
//     int length = l;
//     int width = w;
    // void insert(int l,int w){
    //     length = l;
    //     width = w;
    // }
//     void display(){
//         int area = length* width;
//         System.out.println("area of the rectangle is " + area);
//     }
// }
// public class objectsAndclasses{
//     public static void main(String[] args) {
//         rectangle r1.rectangle(12,25);
//         rectangle r2.rectangle(23,54);
        // r1.insert(12, 25);
        // r2.insert(23, 54);
//         r1.display();
//         r2.display();
//     }
// }


