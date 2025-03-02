# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Copia los archivos estáticos de la carpeta dist al servidor Nginx
COPY ./dist /usr/share/nginx/html

# Expone los puertos
EXPOSE 80

# Ejecuta Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]

