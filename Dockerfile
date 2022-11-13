FROM ubuntu:latest
WORKDIR /app
COPY . .
RUN apt update && apt upgrade -y
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - 
RUN apt install -y nodejs 
RUN curl -L https://www.npmjs.com/install.sh | sh 
RUN npm install
CMD npm run wdio:docker