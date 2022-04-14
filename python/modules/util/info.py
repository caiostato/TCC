from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from bs4 import BeautifulSoup as bsoup

from modules.firebase.firebase import push_database
from modules.util.html_parser import parser
from modules.util.clicker import click_element
from modules.util.service_validator import validate
from modules.util.desativation_checker import checker

def get_info(web, index):
    """A cada call dessa funcao, uma ficha vai ser analisada e anexada ao JSON"""

    #Declaração de variaveis
    dict_data = {}
    dict_servicos = {}
    array_specializacoes = []
    checker_result = False


    try:
        WebDriverWait(web,2).until(
            EC.presence_of_element_located((By.XPATH,'/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody/tr['+str(index)+']/td[8]/a'))
        )
    finally:
        elem = web.find_element_by_xpath('/html/body/div[2]/main/div/div[2]/div/div[3]/table/tbody/tr['+str(index)+']/td[8]/a').get_attribute('href')
        web.execute_script("window.open('about:blank','secondtab');")
        web.switch_to.window("secondtab")
        web.get(elem)

    try:
        WebDriverWait(web,10).until(
        EC.presence_of_element_located((By.XPATH,'//*[@id="estabContent"]/div/section/div[3]/div/div[2]/div[1]/div/form'))
        )
    finally:
        checker_result = checker(web)
        
        if (checker_result == True):

            try:
                #Pega o codigo html da table bootstrap
                html_table = web.find_element_by_xpath('//*[@id="estabContent"]/div/section/div[3]/div/div[2]/div[1]/div/form')
                html_table = html_table.get_attribute('innerHTML')
                soup = bsoup(html_table, 'html.parser')
                data = soup.find_all('div', attrs={"class": "form-group"}) #Separa os campos do HTML em lista

                for each in data:

                    label_value,input_value = parser(each)

                    if input_value != '' and input_value != None:
                        dict_data[label_value] = input_value #Ver se da pra tirar acentos e lowercase label

                #Clica botao conjunto
                click_element(web,"/html/body/div[2]/main/div/div[3]/div[1]/aside/section/ul/li[2]/a")

                WebDriverWait(web,2).until(
                    EC.presence_of_element_located((By.XPATH,"//section[@class='sidebar']/ul/li[2]/ul/li[1]/a"))
                )
                #Clica em inf gerais
                click_element(web,"//section[@class='sidebar']/ul/li[2]/ul/li[1]/a")

                WebDriverWait(web,2).until(
                    EC.presence_of_element_located((By.XPATH,"//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[1]/div[3]/table"))
                )
                WebDriverWait(web,2).until(
                    EC.presence_of_element_located((By.XPATH,'//*[@id="estabContent"]/div/section/div[3]/div/div[2]/div[1]/div[3]/div/div/div/ul'))
                )


                #Achando quantidade de paginas de Especializações
                numbers_bar = web.find_element_by_xpath('//*[@id="estabContent"]/div/section/div[3]/div/div[2]/div[1]/div[3]/div/div/div/ul')
                numbers_bar = numbers_bar.get_attribute('innerHTML')
                numbers_bar = bsoup(numbers_bar, 'html.parser')
                numbers_bar = numbers_bar.find_all('li')

                for y in range(len(numbers_bar)-2):
                    
                    table = web.find_element_by_xpath('//*[@id="estabContent"]/div/section/div[3]/div/div[2]/div[1]/div[3]/table/tbody')
                    table = table.get_attribute('innerHTML')
                    soup = bsoup(table, 'html.parser')
                    array_td = soup.find_all('tr')
                    len_tr = len(array_td)

                    for x in range(len_tr):
                        try:
                            servicos = web.find_element_by_xpath("//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[1]/div[3]/table/tbody/tr["+str(x+1)+"]/td[2]")
                            servicos = servicos.get_attribute('innerHTML')
                        except NoSuchElementException:
                            break
                        else:
                            servicos = web.find_element_by_xpath("//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[1]/div[3]/table/tbody/tr["+str(x+1)+"]/td[2]")
                            servicos = servicos.get_attribute('innerHTML')
                            soup = bsoup(servicos, 'html.parser')
                            servicos = soup.text
                            array_specializacoes.append(servicos)
                        
                    try:
                        nextBtn = web.find_element_by_xpath('//*[@id="estabContent"]/div/section/div[3]/div/div[2]/div[1]/div[3]/div/div/div/ul/li[6]/a')
                    except NoSuchElementException:
                        break
                    else:
                        nextBtn.click()

                #Tratamento de dados servicos 
                arrayAUX = array_specializacoes
                array_specializacoes = []

                for each in arrayAUX:
                    p = str(each)
                    aux = p.replace('\n','')
                    aux = aux.replace('\t','')
                    aux = aux.lower().title()
                    aux = aux.strip()
                    array_specializacoes.append(aux)

                #Clica botao ambulatorial
                click_element(web,"/html/body/div[2]/main/div/div[3]/div[1]/aside/section/ul/li[3]/a")

                WebDriverWait(web,2).until(
                    EC.presence_of_element_located((By.XPATH,"//section[@class='sidebar']/ul/li[3]/ul/li[1]/a"))
                )

                default_elem = "//*[@id='estabContent']/div/section/div[3]/div/div[2]/div[2]"

                #Serviço: dialise
                click_element(web,"//section[@class='sidebar']/ul/li[3]/ul/li[1]/a")

                WebDriverWait(web,5).until(
                    EC.presence_of_element_located((By.XPATH,default_elem))
                )

                validation_result = validate(web,default_elem)
                dict_servicos['dialise'] = validation_result

                #Serviço: quimioRadio
                click_element(web,"//section[@class='sidebar']/ul/li[3]/ul/li[2]/a")

                WebDriverWait(web,5).until(
                    EC.presence_of_element_located((By.XPATH,default_elem))
                )

                validation_result = validate(web,default_elem)
                dict_servicos['quimioRadio'] = validation_result

                #Serviço: hemoterapia
                click_element(web,"//section[@class='sidebar']/ul/li[3]/ul/li[3]/a")

                WebDriverWait(web,5).until(
                    EC.presence_of_element_located((By.XPATH,default_elem))
                )

                validation_result = validate(web,default_elem)
                dict_servicos['hemoterapia'] = validation_result


                # push_database(dict_data,dict_servicos,array_specializacoes)
                print("info: "+dict_data.get('nome'))
            except:
                print("error")
                return False
            else:
                return True

        web.switch_to.window(web.window_handles[0])

