import java.util.Scanner;

public class WaterBillCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.具合);
        
        // Read water consumption from user
        System.out.print("Enter water consumption in litres: ");
        double consumption = scanner.nextDouble();
        
        int billAmount;
        
        // If-Else condition logic
        if (consumption <= 500) {
            billAmount = 100;
        } else {
            billAmount = 200;
        }
        
        // Display the water bill
        System.out.println("The total water bill is: Rs. " + billAmount);
        
        scanner.close();
    }
}