class Event {
    public String name;
    public String place;
    public int time;
    public int points;
    public boolean mandatory;

    public Event(String name1, String place1, int time1, int points1, boolean mandatory1) {
        name = name1;
        place = place1;
        time = time1;
        points = points1;
        mandatory = mandatory1;
    }

    public String getName() {
        return name;
    }

    public String getPlace() {
        return place;
    }

    public int getTime() {
        return time;
    }

    public int getPoints() {
        return points;
    }

    public boolean isMandatory() {
        return mandatory;
    }

}


