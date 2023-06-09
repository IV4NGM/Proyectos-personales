import json

arr = []

seguir = True
while seguir:
    print('Ingresa 1 si quieres añadir una nueva palabra, de lo contrario ingresa enter')
    a = input()
    if a=="1":
        item = {"word": "", "meaning": "", "spanish": ""}
        item["word"] = input('word: ')
        meaning = input('meaning: ')
        if meaning[-1] != ".":
            meaning = meaning +"."
        item["meaning"] = meaning
        item["spanish"] = input('spanish: ')
        arr = arr + [item]
    else:
        seguir = False
print(arr)
print('Ingresa 1 si deseas añadirlo al diccionario actual, de lo contrario ingresa enter')
b = input()
if b=="1":
    filename = "C:\\Users\\Lenovo\\Documents\\HTMLDevF\\Proyectos-personales\\Proyecto-palabras\\api\\words.json"
    with open(filename, "r") as file:
        data = json.load(file)
    for newWord in arr:
        data.append(newWord)
    with open(filename, "w") as file:
        json.dump(data, file)
    print('Se ha terminado de añadir')
