from asyncio.windows_events import NULL
from unittest import defaultTestLoader
from bs4.element import PreformattedString, ProcessingInstruction, SoupStrainer
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from chromedriver_py import binary_path
import time
from bs4 import BeautifulSoup as bsoup
from lxml import html
import json

def getInfo(web, index):
    """A cada call dessa funcao, uma ficha vai ser analisada e anexada ao JSON"""
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
        soup = bsoup(html_table, 'html.parser')
        #Separa os campos do HTML em lista
        data = soup.find_all('div', attrs={"class": "form-group"})

        data_list = []
        dataServicos = []

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

        result = item2.get_attribute('innerHTML')
        soup = bsoup(result, 'html.parser')
        item2 = soup.text

        if item2.__contains__("Nenhum resultado para a consulta realizada."):
            dataServicos.append("False")
        else:
            dataServicos.append("True")

        #Clica em quimioRadio
        especialidade = web.find_element_by_xpath("//section[@class='sidebar']/ul/li[3]/ul/li[2]/a")
        especialidade.click()

        WebDriverWait(web,5).until(
            EC.presence_of_element_located((By.XPATH,"//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[2]"))
        )
        item2 = web.find_element_by_xpath("//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[2]")

        result = item2.get_attribute('innerHTML')
        soup = bsoup(result, 'html.parser')
        item2 = soup.text

        if item2.__contains__("Nenhum resultado para a consulta realizada."):
            dataServicos.append("False")
        else:
            dataServicos.append("True")

        #Clica em hemoterapia
        especialidade = web.find_element_by_xpath("//section[@class='sidebar']/ul/li[3]/ul/li[3]/a")
        especialidade.click()

        WebDriverWait(web,5).until(
            EC.presence_of_element_located((By.XPATH,"//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[2]"))
        )
        item2 = web.find_element_by_xpath("//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[2]")

        result = item2.get_attribute('innerHTML')
        soup = bsoup(result, 'html.parser')
        item2 = soup.text

        if item2.__contains__("Nenhum resultado para a consulta realizada."):
            dataServicos.append("False")
        else:
            dataServicos.append("True")

        # Converte os dados 
        for each in data:
                value = each.input["value"]
                data_list.append(value)
                print(data_list)

        # value = data.findAll("input")
        # print(value)


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

        web.switch_to.window(web.window_handles[0])

