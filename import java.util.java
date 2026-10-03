import java.util.Scanner;

public class TotalWaterUsage {

    // Method to calculate total water consumption
    public static int calculateTotal(int morningUsage, int eveningUsage) {
        return morningUsage + eveningUsage;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Read morning and evening usage from the user
        System.out.print("Enter morning water usage (litres): ");
        int morning = scanner.nextInt();
        
        System.out.print("Enter evening water usage (litres): ");
        int evening = scanner.nextInt();
        
        // Call the method and get the total
        int totalConsumption = calculateTotal(morning, evening);
        
        // Display the total consumption
        System.out.println("Total water consumption: " + totalConsumption + " litres");
        
        scanner.close();
    }
}