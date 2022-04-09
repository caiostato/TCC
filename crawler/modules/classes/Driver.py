from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager


class DriverCreator():

    def __init__(self) -> None:
        pass

    def factory_method():
            try:
                s=Service(ChromeDriverManager().install())
                web = webdriver.Chrome(service=s)
            except:
                print("Driver Factory Error: ")
            else:
                return web