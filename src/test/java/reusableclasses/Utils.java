package reusableclasses;
import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Properties;
import org.apache.log4j.Logger;

/**
 * 
 * @author Sowmya 
 * 		Class to read property values and return value
 */

public class Utils {
	static Logger log = Logger.getLogger("Utils");

	public static String getValueFromProp(String key) {
		String value = null;
		try {
			String filePath = System.getProperty("user.dir") +"\\src\\test\\resources\\evnproperties\\env.properties";
			BufferedReader file=null;
			file= new BufferedReader(new FileReader(filePath));
			Properties props = new Properties();
			props.load(file);
			value = props.getProperty(key);
			log.info("Property value is '" + value + "' for '" + key + "'");
		} catch (Exception e) {
			log.error("Exception while reading'" + key + "'-" + e.getMessage());
			e.printStackTrace();
		}
		return value;
	}
}
