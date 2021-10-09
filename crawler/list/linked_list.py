from node import Node

class LinkedList:
    def __init__(self):
        self.inicio = None
        self.tamanho = 0

    def append(self, elem):
        # Se inicio vazio, append o elem no inicio da fila
        if self.inicio == None:
            p = Node(elem)
            self.inicio = p
        # Se nao, procurara o ultimo node com .next = None e apontara o elem como .next
        else:
            p = self.inicio
            while p.next == None:
                p = p.next
            p.next = Node(elem)
        # Aumentara o valor do tamanho da lista em 1
        self.tamanho = self.tamanho + 1

    def __len__(self):
        # Retorna o valor do tamanho da lista
        return self.tamanho

    def removeFirst(self):
        # Se inicio da lista nao estiver vazia, apontara inicio para inicio.next
        if self.inicio != None:
            self.inicio = self.inicio.next
            self.tamanho = self.tamanho - 1
        else:
            print("ERROR: at removeFirst")