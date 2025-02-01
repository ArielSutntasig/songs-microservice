# Usar node Alpine como base por ser más ligera
FROM node:lts-alpine

# Establecer el entorno como producción
ENV NODE_ENV=production

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production --silent

# Copiar el código fuente
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Cambiar la propiedad de los archivos al usuario node
RUN chown -R node:node /usr/src/app

# Cambiar al usuario node para mayor seguridad
USER node

# Comando para iniciar la aplicación
CMD ["node", "src/app.js"]