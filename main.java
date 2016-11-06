import java.util.Scanner;

class main {

    public static void main(String[] args) {
    Scanner reader = new Scanner(System.in);
        Organization phimu = new Organization(); 
/*
        while (true) {
        System.out.println("What would you like to do?");
        System.out.println("Add event: event <name> <place> <time> <points>");
        System.out.println("Add member: member <name> <phone> <exec>");

        if (reader.next().compareTo("event") == 0) {         
            String name = reader.next();
            String place = reader.next();
            int time = reader.nextInt();
            int points = reader.nextInt();
            boolean mandatory = reader.nextBoolean();

            phimu.addEvent(name, place, time, points, mandatory);
            phimu.printEvents();
        } else {
            String name = reader.next();
            System.out.println("hihih" + name);
            int phone = reader.nextInt();
            boolean exec = reader.nextBoolean();
            
            phimu.addMember(name, phone, exec);
            phimu.printMembers();

        }
        } */


        String test = "6179996210";

        phimu.addMember("Natasha", "6196210", true);
        phimu.addMember("Elise", "222", false);
        

        Person member = phimu.getMember("222");

        


    }

}

