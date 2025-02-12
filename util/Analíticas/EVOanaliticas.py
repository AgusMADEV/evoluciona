import sqlite3
import matplotlib.pyplot as plt

class EVOanaliticas:
    def __init__(self):
        self.conexion = sqlite3.connect("../front/log/logs.sqlite")
        self.conexion.row_factory = sqlite3.Row
        self.cursor = self.conexion.cursor()

    def graficaTarta(self,peticion,salida,titulo):
        self.cursor.execute(peticion)
        filas = self.cursor.fetchall()
        valores = []
        numeros = []
        for fila in filas:
            diccionario = dict(fila)
            valores.append(diccionario['valor'])
            numeros.append(diccionario['numero'])

        plt.figure()
        plt.pie(numeros, labels=valores, autopct='%1.1f%%')
        plt.title(titulo)
        plt.savefig("imagenes/"+salida)
        plt.close()

    def graficaBarras(self, peticion, salida,titulo):
        self.cursor.execute(peticion)
        filas = self.cursor.fetchall()
        valores = []
        numeros = []
        for fila in filas:
            diccionario = dict(fila)
            valores.append(diccionario['valor'])
            numeros.append(diccionario['numero'])

        # Crear gráfico de barras
        plt.figure()  # Crear una nueva figura para evitar sobreescritura
        plt.bar(valores, numeros, color='LightPink')  # Asigna el color LightPink
        plt.xlabel('Categorías')  # Etiqueta para el eje x
        plt.ylabel('Frecuencia')  # Etiqueta para el eje y
        plt.title(titulo)  # Título opcional
        plt.xticks(rotation=45, ha='right')  # Rotar etiquetas del eje x para mayor legibilidad
        plt.tight_layout()  # Ajustar el diseño para evitar superposición
        plt.savefig("imagenes/"+salida)
        plt.close()  # Cerrar la figura para evitar superposición
    
    def graficaBarrasHorizontales(self, peticion, salida,titulo):
        self.cursor.execute(peticion)
        filas = self.cursor.fetchall()
        valores = []
        numeros = []
        for fila in filas:
            diccionario = dict(fila)
            valores.append(diccionario['valor'])
            numeros.append(diccionario['numero'])

        # Crear gráfico de barras horizontales
        plt.figure()
        plt.barh(valores, numeros, color='LightPink')  # Asigna el color LightPink
        plt.xlabel('Frecuencia')  # Etiqueta para el eje x
        plt.ylabel('Categorías')  # Etiqueta para el eje y
        plt.title(titulo)
        plt.tight_layout()  # Ajustar el diseño para evitar superposición
        plt.savefig("imagenes/" + salida)
        plt.close()
