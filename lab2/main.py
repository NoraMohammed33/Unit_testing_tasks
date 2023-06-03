from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.select import Select
import time

driver =webdriver.Chrome('G:\\40-Unit_Testing\\chromedriver.exe')
driver.get("https://artoftesting.com/sampleSiteForSelenium/")
time.sleep(5)

dropList=Select(driver.find_element(By.ID,'testingDropdown'))
dropList.select_by_index(2)

time.sleep(5)

driver.get("https://www.google.com/")
time.sleep(3)
print(driver.title)
time.sleep(3)

driver.back()

time.sleep(3)
print(driver.title)