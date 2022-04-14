from selenium.common.exceptions import ElementNotInteractableException

def click_element(driver,elem):
    try:
        button = driver.find_element_by_xpath(elem)
        button.click()
    except ElementNotInteractableException:
        button = driver.find_element_by_xpath(elem)
        button.click()
    else:
        button = driver.find_element_by_xpath(elem)
        button.click()