import java.util.ArrayList;
public class Organization {
    public String orgName;
    public String chapterName;
    ArrayList<Event> events;
    ArrayList<Person> members;
    int totalPoints;
    public int totalMandatoryPoints;
    
    public Organization() {
        events = new ArrayList<Event>();
        members = new ArrayList<Person>();
    }

    public ArrayList<Event> getEvents() {
        return events;
    }

    /* return 0 if successful, 1 if event already exists. */
    public void addEvent(String name, String place, int time, int points, boolean mandatory) {
        Event newEvent = new Event(name, place, time, points, mandatory);
        events.add(newEvent);
        totalPoints += points;

        if (mandatory) {
            totalMandatoryPoints += points;
        }
    }

    public void addMember(String name, String phone, boolean exec) {
        Person newMember = new Person(name, phone, exec);
        members.add(newMember);
    } 


    public void printEvents() {

        for (int i = 0; i < events.size(); i++) {
            Event curr = events.get(i);
            System.out.println("name: " + curr.getName() + " place: " + curr.getPlace() + " time: " + curr.getTime() + " points: " + curr.getPoints()); 

        }
    }
    public void printMembers() {

        for (int i = 0; i < members.size(); i++) {
            Person curr = members.get(i);
            System.out.println("name: " + curr.getName() + " phone: " + curr.getPhone() + " exec: " + curr.isExec()); 

        }


    }
 
    public Person getMember (String phone) {
        for (int i = 0; i < members.size(); i++) {
            Person member = members.get(i);
            if (member.getPhone().compareTo(phone) == 0) {
                return member;
            }

        }
        return null;


    }



}
