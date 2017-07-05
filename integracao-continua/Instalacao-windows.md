![alt text](https://i2.wp.com/codeforgeek.com/wp-content/uploads/2016/04/banner-1.png?zoom=2&resize=770%2C385&ssl=1 "react+jenkins") 

# Integração continua do React com o Jenkins

Este é um tutorial de como fazer a integração contínua de um projeto **React** com o **Jenkins** utilizando um ambiente windows.

## Table of Contents

- [Instalação Jenkins](#instalação-node)
- [Instalação Node](#instalação-node)
- [Configurando um Job React/NodeJS](#configurando-um-job-reactnodejs)
- [Erros Comuns](#erros-comuns)


## Ambiente
> **Infraestrutura:**
> - `Máquina 1`: windows 10; 

## Instalação Jenkins
Faça o Download através do link https://jenkins.io/download/

acesse o instalador

![Imgur](http://i.imgur.com/aD7JH1f.png)

siga a instalação normalmente

Abra o Jenkins em http://localhost:8080

**Pronto!** você tem agora o Jenkins funcionando!!

![Imgur](http://i.imgur.com/Ov9L4Jc.png)

## Instalação Node
Faça o Download através do link https://nodejs.org/en/download/

acesse o instalador

![Imgur](http://i.imgur.com/NewL0wT.png)

siga a instalação normalmente

**Pronto!** você tem agora o Node funcionando!!

## Configurando um Job React/NodeJS no Jenkins
![alt text](http://coenraets.org/blog/wp-content/uploads/2014/12/react-node.png "Apache") 


1. Criando Job
No Clique no item em `New Item` do menu lateral

2. Escolha o tipo de Job

Insira o nome do job no campo `Enter an item name`

Escolha o tipo `Freestyle project`

3. Adicionando código Fonte
No menu `Source Code Management` escolha a opção `Git`

Em `Repositories` adicione a url do projeto Git em `Repository URL`

Para este projeto ` adicione o repositório: https://gitlab.com/ipeadata/ipeadata2-desenv.git `

adicione as suas Credentials

Caso seja nescessário adicione um Branch específica em `Branches to build`

Para este projeto `adicione a branch: ipeadata_refactor`

![Imgur](http://i.imgur.com/g6KW4Fm.png)

4. Gatilhos de Build
**Formato:** MINUTE (0-59), HOUR (0-23), DAY (1-31), MONTH (1-12), DAY OF THE WEEK (0-6)

Coloque @midnight para executar a build todos os dias a meia noite

![Imgur](http://i.imgur.com/6FeHErj.png)

5. Build
Neste passo é onde "compilamos" o projeto React

Clique em `Add build step` e escolha a opção `executar no comando do Windows`

Adicione o código abaixo:

```shell
C:\Users\03062795174\Documents\npm install && C:\Users\03062795174\Documents\npm run build
```

![Imgur](http://i.imgur.com/H0MBIrL.png)

**Pronto!** agora você integrou seu projeto React com o Jenkins e suas builds serão feitas automaticamente.

## Erros Comuns!!

> **npm: not found**
>
> Este erro acentece porque o pacote npm não está instalado
>
> execute o comando:
> ```shell
> $ curl -sL https://deb.nodesource.com/setup | sudo bash -
> $ sudo apt-get install -y nodejs
> ```

> **sudo: sorry, you must have a tty to run sudo**
>
> Este erro acentece porque o o usuário jenkins que está tentando executar o script do passo da build não tem autorização
>
> execute o comando:
> ```shell
> $ sudo su 
> $ visudo -f /etc/sudoers
> ```
> inclua a linha:
> ```shell
> Defaults requiretty
> ```

> **sudo: no tty present and no askpass program specified**
>
> Este erro acentece porque você não configurou direito a parmissão do jenkins executar scritps
>
> execute o comando:
> ```shell
> $ sudo su 
> $ visudo -f /etc/sudoers
> ```
> inclua a linha:
> ```shell
> jenkins ALL= NOPASSWD: ALL
> ```
















