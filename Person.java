import java.util.ArrayList;
public class Person {
    String name;
    String phone;
    boolean exec;
    boolean dpEligible;
    int points;
    ArrayList<Event> eventsAttended;

    public Person(String name1, String phone1, boolean exec1) {
        name = name1;
        phone = phone1;
        exec = exec1;
        dpEligible = true;
        points = 0;
        eventsAttended = new ArrayList<Event>();
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public boolean isExec() {
        return exec;
    }

    public void goToEvent(Event event) {
        eventsAttended.add(event);
        points += event.getPoints();        
    }

    public boolean dpEligible(int totalMandatoryPoints) {
        double min = (double) totalMandatoryPoints*(2/3);

        if (points > min) {
            dpEligible = true;
        } else {
            dpEligible = false;
        }
        return dpEligible;
    }

}


