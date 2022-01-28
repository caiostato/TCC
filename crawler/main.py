from asyncio.windows_events import NULL
from unittest import defaultTestLoader
from bs4.element import PreformattedString, ProcessingInstruction, SoupStrainer
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from chromedriver_py import binary_path
import time
from bs4 import BeautifulSoup
import warnings
from lxml import html
import json
from modules.info import getInfo
from modules.fill import fill

warnings.filterwarnings("ignore", category=UserWarning, module='bs4')

try:
    s = Service(binary_path)
    web = webdriver.Chrome(service=s)
    web.get('http://cnes.datasus.gov.br/pages/estabelecimentos/consulta.jsp')
except:
    # web.quit()
    pass
    
time.sleep(2)

fill(web)

try:
    WebDriverWait(web,2).until(
        EC.presence_of_element_located((By.XPATH,"/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody"))
    )
except:
    # web.quit()
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