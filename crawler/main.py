#SELENIUM IMPORTS
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
#PYTHON IMPORTS
import time
import warnings
#MODULES IMPORTS
from modules.util.info import get_info
from modules.util.get_data import get_data
from modules.util.fill import fill_keys
from modules.classes.Driver import DriverCreator

driver = DriverCreator
web = driver.factory_method()
web.set_page_load_timeout(10)

web.get('http://cnes.datasus.gov.br/pages/estabelecimentos/consulta.jsp')
WebDriverWait(web,2).until(
EC.presence_of_element_located((By.XPATH,"/html/body/div[2]/main/div/div[2]/div/form[1]"))
)

fill_keys(web)

try:
    WebDriverWait(web,2).until(
        EC.presence_of_element_located((By.XPATH,"/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody"))
    )
except:
    pass

for page in range(7):
    page = page + 1

    if page < 7:
        for index in range(10):

            index = index + 1
            repeat_result = False

            while repeat_result == False:
                repeat_result = get_info(web,index)
    else:
        for index in range(7):

            index = index + 1
            repeat_result = False
            
            while repeat_result == False:
                repeat_result = get_info(web,index)

    pageBtn = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/div[3]/div/div/div/ul/li['+str(page+1)+']/a')
    pageBtn.click()