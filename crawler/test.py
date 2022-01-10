from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from chromedriver_py import binary_path
import time

s = Service(binary_path)
driver = webdriver.Chrome(service=s)
driver.get('http://cnes.datasus.gov.br/pages/estabelecimentos/consulta.jsp')
assert "Python" in driver.title
