










**IPEADATA 2.0**

**        Especificação da API**















**Histórico de Revisões**



| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 14/07/2017 | 1.00 | Criação | Bruno Rangel |
|   |   |   |   |





























# 1.Introdução

##  Propósito

Este documento contém as especificações necessárias para o desenvolvimento da API que será responsável pela alimentação do porta do IpeaData 2.0.

## Público Alvo

Este documento se destina aos usuários, engenheiros de software, testadores que pretendem entender a solução proposta/desenvolvida.

## 2.Escopo

### Informações iniciais



**info:**
   Título: IpeaData
   Descrição: Metadados para o Portal IpeaData
   Versão: 1.0.0
   host: **&quot;http://www.ipeadata.gov.br/api/odata4/Metadados**
  schemes:
    - http
    - https





## 3.1Definindo o modelo de Dados



Componente:

**  GridSérie:**

    type: object

    Propriedades:

       Série:

         type: string

       Nível Geográfico:

         type: string

       Código Territorial:

           id:

            type:interger

           Ano:

            type: string

            format: date

 Componente:

**  ListarSéries:**

    type: object

    Propriedades:

       Código:

          type: string

       Nome:

          type: string

       Unidade:

          type:interger

       Frequência:

          type:interger

 Componente:

**  GráficoSérie:**

    type: object

    Propriedades:

       Nome:

          type: string

       Pontos:

          x:

          type: integer

          y:

          type: integer











Componente:

**  MapaSérie:**

    type: object

    Propriedades:

       id:

         type: integer

       Nome:

         type: string

       valor:

         type: string

       Geometria:

          Tipo:

            type:MultiPolygon

          Coordenada:

            type: integer