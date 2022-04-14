from bs4 import BeautifulSoup as bsoup

def validate(driver,elem):
    service = driver.find_element_by_xpath(elem)
    service = service.get_attribute('innerHTML')
    service = bsoup(service, 'html.parser')
    service = service.text

    if service.__contains__("Nenhum resultado para a consulta realizada."):
        return False
    else:
        return True