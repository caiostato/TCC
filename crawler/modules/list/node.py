from ficha import Ficha

class Node:
    """
    data: Um array com os dados que vao no JSON
    pos: Posicao na page
    page: Indentificacao em qual page esta
    """

    def __init__(self,ficha):
        data = ficha
        self.data = data
        self.next = None