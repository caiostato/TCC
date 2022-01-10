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

    try:
        WebDriverWait(web,10).until(
        EC.presence_of_element_located((By.XPATH,'//*[@id="estabContent"]/div/section/div[3]/div/div[2]'))
        )

    finally:
        
        #Pega o codigo html da table bootstrap
        html_table = web.find_element_by_xpath('//*[@id="estabContent"]/div/section/div[3]/div/div[2]')
        html_table = html_table.get_attribute('innerHTML')
        soup = BeautifulSoup(html_table, 'html.parser')
        #Separa os campos do HTML em lista
        data = soup.find_all('div', attrs={"class": "form-group"})

        data_list = []

        #Clica botao ambulatorial
        item = web.find_element_by_xpath("/html/body/div[2]/main/div/div[3]/div[1]/aside/section/ul/li[3]/a")
        item.click()

        WebDriverWait(web,2).until(
            EC.presence_of_element_located((By.XPATH,"//section[@class='sidebar']/ul/li[3]/ul/li[1]/a"))
        )

        #Clica em dialise
        especialidade = web.find_element_by_xpath("//section[@class='sidebar']/ul/li[3]/ul/li[1]/a")
        especialidade.click()

        WebDriverWait(web,5).until(
            EC.presence_of_element_located((By.XPATH,"//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[2]"))
        )
        
        item2 = web.find_element_by_xpath("//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[2]")


        # sem utilidade
        # result = item2.get_attribute('innerHTML')
        # soup = BeautifulSoup(result, 'html.parser')
        # item2 = soup.find('text')
        # print("ITEM2 DEBUG")
        # print(item2)

        # Printa os values da lista 
        for each in data:  
            value = BeautifulSoup(each,'html.parser')
            # value = value.input["value"]
            print(value)
            data_list.append(value)

        print("datalist input")
        print(data_list)

        # output_data = {}
        # output_data["unidade"] = []
        # output_data["unidade"].append({
        #         "id": cont,
        #         "nome": data_list[0],
        #         "cep": data_list[10],
        #         "logradouro": data_list[5]+', '+data_list[7]+', '+data_list[8],
        #         "numero": data_list[6],
        #         "telefone": data_list[11],
        #         "tipoEstabelecimento": data_list[14]
        # })

        # with open('json/unidades.json', 'w') as outfile:
        #     json.dump(output_data, outfile)
        
        # btnAmbulatorial = web.find_element_by_xpath('//*[@id="estabContent"]/aside/section/ul/li[3]/a')
        # btnAmbulatorial.click()

        # dataServicos = []
        
        # special = web.find_element_by_xpath('//*[@id="estabContent"]/aside/section/ul/li[3]/ul/li[2]/a')
        # print(special.text)

        # special = web.find_element_by_xpath('//*[@id="estabContent"]/aside/section/ul/li[3]/ul/li[3]/a')
        # print(special.text)
        # special.click()

        # item = web.find_element_by_xpath('//*[@id="estabContent"]/div/section/div[1]/div[2]/div[2]/form/div[1]/div[1]/input')
        # print(item.get_attribute('value'))
        

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