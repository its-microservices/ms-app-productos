# === Etapa 1: Build ===
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar todas las dependencias para compilar
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Generar cliente Prisma (si lo usás)
COPY prisma ./prisma
RUN npx prisma generate

# Compilar el proyecto NestJS
RUN npm run build

# === Etapa 2: Producción ===
FROM node:20-alpine

WORKDIR /app

# Copiar solo lo necesario desde la etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Exponer el puerto configurado (3003)
EXPOSE 3003

RUN ls -l prisma/migrations
RUN ls -l prisma

# Comando para iniciar la app
CMD ["npm","run", "start:push"]
