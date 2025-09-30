package hdl.pkg1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        System.out.println("System is running on port 8580, please visit http://10.0.5.200:8580/");
    }

    @GetMapping("/")
    public String hello() {
        return "Hello World";
    }
}
