from asyncio.windows_events import NULL
from unittest import defaultTestLoader
from bs4.element import PreformattedString, ProcessingInstruction, SoupStrainer
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service

def fill(web):
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