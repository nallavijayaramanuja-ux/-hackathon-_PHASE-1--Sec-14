 import java.util.Scanner;

class MovieTicket {
    String movieName;
    double ticketPrice;
    int numberOfTickets;

    // Parameterized constructor
    MovieTicket(String movieName, double ticketPrice, int numberOfTickets) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.numberOfTickets = numberOfTickets;
    }

    // Calculate total amount
    double calculateTotal() {
        return ticketPrice * numberOfTickets;
    }

    // Calculate discount
    double calculateDiscount() {
        if (numberOfTickets >= 5) {
            return calculateTotal() * 0.10;
        }
        return 0.0;
    }

    // Calculate final amount
    double calculateFinalAmount() {
        return calculateTotal() - calculateDiscount();
    }

    // Display booking details
    void displayBill() {
        System.out.println("\n--- Cinema Ticket Booking Bill ---");
        System.out.println("Movie Name      : " + movieName);
        System.out.printf("Ticket Price    : %.2f%n", ticketPrice);
        System.out.println("Number of Tickets: " + numberOfTickets);
        System.out.printf("Total Amount    : %.2f%n", calculateTotal());
        System.out.printf("Discount        : %.2f%n", calculateDiscount());
        System.out.printf("Final Amount    : %.2f%n", calculateFinalAmount());
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read input
        String movieName = sc.nextLine();
        double ticketPrice = sc.nextDouble();
        int numberOfTickets = sc.nextInt();

        // Create object
        MovieTicket ticket = new MovieTicket(
            movieName, ticketPrice, numberOfTickets
        );

        // Display bill
        ticket.displayBill();

        sc.close();
    }
}