from cmath import exp
from distutils.log import error
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from chromedriver_py import binary_path

def driverFactory():
    try:
        s = Service(binary_path)
        web = webdriver.Chrome(service=s)
    except error:
        print("Driver Factory Error: "+error)
    else:
        return web