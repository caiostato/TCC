from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from chromedriver_py import binary_path
import time
from bs4 import BeautifulSoup
from lxml import html
import json

def ficha(index):
    try:
        WebDriverWait(web,2).until(
            EC.presence_of_element_located((By.XPATH,'/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody/tr['+str(index)+']/td[8]/a'))
        )
        elem = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody/tr['+str(index)+']/td[8]/a').get_attribute('href')
        web.execute_script("window.open('about:blank','secondtab');")
        web.switch_to.window("secondtab")
        web.get(elem)

        WebDriverWait(web,10).until(
        EC.presence_of_element_located((By.XPATH,'//*[@id="estabContent"]/div/section/div[3]/div/div[2]'))
        )

        # htmlNome = web.find_element_by_id('nome')
        # htmlNome = htmlNome.get_attribute('outerHTML')
        # soup = BeautifulSoup(htmlNome,'html.parser')
        # soup.find('input')['value']
        # #Cep
        # htmlCEP = web.find_element_by_id('cnpj')
        # htmlCEP = htmlCEP.get_attribute('outerHTML')
        # print(htmlCEP)

        # soup = BeautifulSoup(htmlCEP,'html.parser')
        # soup.find('input')['value']
        # cpnj = tree.xpath('//input[@id="cnpj"]/text()')
        # print(cpnj)



    except:
        web.close()

def fill():
    atendeSUSBtn = web.find_element_by_xpath('//*[@id="inlineRadio2"]')
    atendeSUSBtn.click()

    estadoR = 'SAO PAULO'
    estadoBtn = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/form[1]/div[2]/div[1]/div/select')
    estadoBtn.send_keys(estadoR)

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


web = webdriver.Chrome(executable_path=binary_path)
web.get('http://cnes.datasus.gov.br/pages/estabelecimentos/consulta.jsp')
data={}
data['unidade']=[]

time.sleep(2)

fill()

try:
    WebDriverWait(web,2).until(
        EC.presence_of_element_located((By.XPATH,"/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody"))
    )
except:
    web.quit()

page=1
index=1

for index in range(10):
    index = index + 1
    ficha(index)