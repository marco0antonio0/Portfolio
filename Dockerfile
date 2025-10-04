# Etapa de build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Gera o build de produção
RUN npm run build

# Etapa final: imagem enxuta
FROM node:18-alpine

WORKDIR /app

# Copia apenas arquivos necessários do build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expõe a porta padrão
EXPOSE 3000

# Comando de start
CMD ["npm", "start"]
