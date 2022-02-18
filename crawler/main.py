from asyncio.windows_events import NULL
from lxml import html
from pydoc import pager
from unittest import defaultTestLoader
#BeautifulSoup IMPORTS
from bs4.element import PreformattedString, ProcessingInstruction, SoupStrainer
from bs4 import BeautifulSoup
#SELENIUM IMPORTS
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
#PYTHON IMPORTS
import time
import warnings
#MODULES IMPORTS
from modules.util.info import getInfo
from modules.util.fill import fill
from modules.factories.driver_factory import driverFactory

warnings.filterwarnings("ignore", category=UserWarning, module='bs4')

result = False

web = driverFactory()
web.set_page_load_timeout(10)

while result == False:
    try:
        print("get")
        web.get('http://cnes.datasus.gov.br/pages/estabelecimentos/consulta.jsp')
        WebDriverWait(web,2).until(
        EC.presence_of_element_located((By.XPATH,"/html/body/div[2]/main/div/div[2]/div/form[1]"))
        )
    except TimeoutException:
        print("TimeoutException")
        web.close()
    else:
        print("ELSE")
        result = True
        fill(web)

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
            getInfo(web,index)
    else:
        for index in range(7):
            index = index + 1
            getInfo(web,index)

    pageBtn = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/div[3]/div/div/div/ul/li['+str(page+1)+']/a')
    pageBtn.click()