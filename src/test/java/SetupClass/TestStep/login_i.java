package SetupClass.TestStep;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import SetupClass.Set;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class login_i extends Set{
	
	WebDriverWait wait = new WebDriverWait(driver,50);


@Given("^Open the Website URL i\\.$")
public void open_the_Website_URL_i() throws Throwable {
	driver.get(AppURL);
	log.info("It's opening the website URL");
	Thread.sleep(8000);
    driver.manage().deleteAllCookies();
    Thread.sleep(4000);
}

@Then("^click on Sign In i\\.$")
public void click_on_Sign_In_i() throws Throwable {
	
   WebElement sign_in_btn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[normalize-space()='Sign In']")));
   Thread.sleep(2000);
   sign_in_btn.click();
   //Thread.sleep(3000);
   
   // close chat window
   try {
		WebElement iframe = driver.findElement(By.id("livechat-full-view"));
		if(iframe.isDisplayed()) {
			driver.switchTo().frame(iframe);   
			 Actions act = new Actions(driver);
			 act.moveToElement(driver.findElement(By.cssSelector("#title .icon-minimize"))).build().perform();
			 Thread.sleep(2000);
				WebElement chat1=driver.findElement(By.cssSelector("#title .icon-minimize"));
				 Thread.sleep(1000);
					chat1.click();
					 Thread.sleep(1000);
					 driver.switchTo().defaultContent();
					 Thread.sleep(1000);
					 driver.switchTo().parentFrame();
				 Thread.sleep(1000);
		}
		else {
			

		System.out.println("chat window does not open");
		}
	}
			catch(NoSuchElementException NCP) {
				
			}


}

@Then("^enter email and password i\\.$")
public void enter_email_and_password_i() throws Throwable {
	
	WebElement login_email = wait.until(ExpectedConditions.elementToBeClickable(By.id("email")));
	   Thread.sleep(2000);
	   login_email.sendKeys("sakshi.pathania@slidetech.in");
	   
	   WebElement login_pass = wait.until(ExpectedConditions.elementToBeClickable(By.id("pass")));
	   Thread.sleep(2000);
	   login_pass.sendKeys("Qwerty@1");
    
}

@Then("^click on login button i\\.$")
public void click_on_login_button_i() throws Throwable {
	
	 WebElement login_btn = wait.until(ExpectedConditions.elementToBeClickable(By.id("send2")));
	   Thread.sleep(2000);
	   login_btn.click();
	   Thread.sleep(5000);
	   
	   // close chat window
	   try {
			WebElement iframe = driver.findElement(By.id("livechat-full-view"));
			if(iframe.isDisplayed()) {
				driver.switchTo().frame(iframe);   
				 Actions act = new Actions(driver);
				 act.moveToElement(driver.findElement(By.cssSelector("#title .icon-minimize"))).build().perform();
				 Thread.sleep(2000);
					WebElement chat1=driver.findElement(By.cssSelector("#title .icon-minimize"));
					 Thread.sleep(1000);
						chat1.click();
						 Thread.sleep(1000);
						 driver.switchTo().defaultContent();
						 Thread.sleep(1000);
						 driver.switchTo().parentFrame();
					 Thread.sleep(1000);
			}
			else {
				

			System.out.println("chat window does not open");
			}
		}
				catch(NoSuchElementException NCP) {
					
				}

}

@Then("^donwload a product from complete deck i\\.$")
public void donwload_a_product_from_complete_deck_i() throws Throwable {
	
	Thread.sleep(4000);
	driver.get("https://www1.slideteam.net/vision-mission-goals-and-objectives-complete-powerpoint-deck-with-slides.html");
	Thread.sleep(3500);
	
	 
	   // close chat window
	   try {
			WebElement iframe = driver.findElement(By.id("livechat-full-view"));
			if(iframe.isDisplayed()) {
				driver.switchTo().frame(iframe);   
				 Actions act = new Actions(driver);
				 act.moveToElement(driver.findElement(By.cssSelector("#title .icon-minimize"))).build().perform();
				 Thread.sleep(2000);
					WebElement chat1=driver.findElement(By.cssSelector("#title .icon-minimize"));
					 Thread.sleep(1000);
						chat1.click();
						 Thread.sleep(1000);
						 driver.switchTo().defaultContent();
						 Thread.sleep(1000);
						 driver.switchTo().parentFrame();
					 Thread.sleep(1000);
			}
			else {
				

			System.out.println("chat window does not open");
			}
		}
				catch(NoSuchElementException NCP) {
					
				}
	   
	   //download paid ppt
	   WebElement download_btn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/main/div[2]/div/div[2]/div[3]/div[3]/form/div/button")));
	   Thread.sleep(2000);
	   download_btn.click();
	   Thread.sleep(5000);
	   
	   try
	   {
		   Thread.sleep(3000);
		   driver.get("https://test:!test123!@www1.slideteam.net");
		   Thread.sleep(3000);
	   }
	   catch (Exception e) {
		// TODO: handle exception
	}
	   
}

@Then("^Logout from Website i\\.$")
public void logout_from_Website_i() throws Throwable {
	
	WebElement logout_btn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(.,'Sign Out')]"))); 
	   Thread.sleep(2000);
	  logout_btn.click();
	   Thread.sleep(5000);
    
}





}
