import os
import time

os.system("color a")
print("!Bienvenido a su asistente de  firebase")
time.sleep(1.5)
print("")
def update():
    print("elija nuestras opciones:")
    print("1-Actualizar archivos en firebase")
    answer = int(input())
    if answer == 1:
        print("[+] Ejecutando código")
        print("[+] Espere...")
        time.sleep(1)
        print("")
        os.system("cd C:\\Users\\Usuario\\github\\MyPortafolio")
        os.system("firebase deploy --only hosting")
        #os.system("")
        print("")
        print("[+] EL código y la función fueron ejecutados con éxito")
        print("¿Quieres ir al menu?  y/n")
        reintento = str(input())
        if reintento == "y":
            update()
        if reintento == "n":
            print("Hasta pronto")
            time.sleep(1)
update()
