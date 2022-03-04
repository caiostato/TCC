from geopy.geocoders import Nominatim


def getCoords(address):

    print(address)

    coordsArray = []
    locator = Nominatim(user_agent = 'tcc').geocode(address)
    print(locator)
    # coordsArray.append(location.latitude)
    # coordsArray.append(location.longitude)

    # return coordsArray