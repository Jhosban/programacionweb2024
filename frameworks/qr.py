import cv2
import pyzbar.pyzbar as pyzbar

# Inicializa la cámara
cap = cv2.VideoCapture(0)

# Bandera para indicar si se ha leído un código QR
qr_read = False

while not qr_read:
    # Captura un frame de la cámara
    ret, frame = cap.read()

    # Decodifica los códigos QR en el frame
    decoded_objects = pyzbar.decode(frame)
    for obj in decoded_objects:
        qr_data = obj.data.decode("utf-8")
        print(f"Datos del código QR: {qr_data}")
        qr_read = True  # Marca como leído para salir del bucle

# Libera la cámara
cap.release()


