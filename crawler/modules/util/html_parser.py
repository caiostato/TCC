from bs4 import BeautifulSoup as bsoup
from numpy import unicode_
from unidecode import unidecode

def parser(elem):

    label = ''
    value = ''
    subString = 'type="text" value="'

    if subString in str(elem):
        label = elem.label.text
        value = elem.input["value"]

    label = str(label)
    label = label.lower()
    label = unidecode(label)
    value = str(value)


    return label,value