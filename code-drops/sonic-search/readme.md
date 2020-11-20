# Sonic com NodeJS

```bash
#Comando para rodar o sonic via docker

docker run -p 1491:1491 -v $(pwd)/sonic.cfg:/etc/sonic.cfg -v $(pwd)/store/:/var/lib/sonic/store/ valeriansaliou/sonic:v1.3.0
```
