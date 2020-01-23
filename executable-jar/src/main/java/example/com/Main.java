package example.com;

import org.apache.log4j.Logger;
import org.json.JSONObject;

public class Main {

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) {
        if (logger.isDebugEnabled()) {
            logger.debug("json parsing start!!");
        }

        String jsonString = "{\"response\":{\"name\":\"paulan\",\"age\":30}}";

        JSONObject jObject = new JSONObject(jsonString);
        JSONObject response = jObject.getJSONObject("response");
        String name = response.getString("name");
        int age = response.getInt("age");

        System.out.println("name: " + name);
        System.out.println("age: " + age);

        if (logger.isDebugEnabled()) {
            logger.debug("json parsing end!!");
        }
    }
}
