from bs4 import BeautifulSoup as bsoup

def checker(driver):
    elem = driver.find_element_by_xpath('//*[@id="estabContent"]/div/section/div[3]/div/div[2]/div[1]/div/form/div[10]/div/div[2]')
    elem = elem.get_attribute('innerHTML')
    elem = bsoup(elem, 'html.parser')

    try:
        elem = elem.input['value']
    except KeyError:
        #CONTINUA
        return True
    else:
        #VAZA
        return False