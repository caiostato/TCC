from unittest import defaultTestLoader
from bs4.element import PreformattedString, ProcessingInstruction, SoupStrainer
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from chromedriver_py import binary_path
import time
from bs4 import BeautifulSoup
from lxml import html
import json
from modules.info import getInfo

cont = 1

def ficha(index):

    try:
        #Espera 2sec para achar o element da clickable a ficha detalhada dado o index
        WebDriverWait(web,2).until(
            EC.presence_of_element_located((By.XPATH,'/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody/tr['+str(index)+']/td[8]/a'))
        )

    finally:
        #Pega o atributo href do clickable da ficha detalhada
        elem = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody/tr['+str(index)+']/td[8]/a').get_attribute('href')
        #Abre outra aba e setas a url para o attr do href
        web.execute_script("window.open('about:blank','secondtab');")
        web.switch_to.window("secondtab")
        web.get(elem)

def fill():
    atendeSUSBtn = web.find_element_by_xpath('//*[@id="inlineRadio2"]')
    atendeSUSBtn.click()

    estadoR = 'SAO PAULO'
    estadoBtn = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/form[1]/div[2]/div[1]/div/select')
    estadoBtn.send_keys(estadoR)

    WebDriverWait(web,2).until(
        EC.presence_of_element_located((By.XPATH,"/html/body/div[2]/main/div/div[2]/div/form[1]/div[2]/div[2]/div/select"))
    )

    municipioR = 'CAMPINAS'
    municipioBtn = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/form[1]/div[2]/div[2]/div/select')
    municipioBtn.send_keys(municipioR)

    gestaoR = 'MUNICIPAL'
    gestaoBtn = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/form[1]/div[3]/div[1]/div/select')
    gestaoBtn.send_keys(gestaoR)

    naturezaR = 'ADMINISTRAÇÃO PÚBLICA'
    naturezaBtn = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/form[1]/div[3]/div[2]/div/select')
    naturezaBtn.send_keys(naturezaR)

    searchR = 'CENTRO DE SAUDE'
    searchBtn = web.find_element_by_xpath('//*[@id="pesquisaValue"]')
    searchBtn.send_keys(searchR)

    sendBtn = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/form[2]/div/button')
    sendBtn.click()

try:
    s = Service(binary_path)
    web = webdriver.Chrome(service=s)
    web.get('http://cnes.datasus.gov.br/pages/estabelecimentos/consulta.jsp')
except:
    # web.quit()
    pass
    
time.sleep(2)

fill()

try:
    WebDriverWait(web,2).until(
        EC.presence_of_element_located((By.XPATH,"/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody"))
    )
except:
    # web.quit()
    pass

page=1
index=1

for index in range(10):
    index = index + 1
    ficha(index)