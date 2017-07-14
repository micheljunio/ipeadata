









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

### 3.1.1



**  GridSérie:**

   [
  {
    "1985": 3.78,
    "1986": 0.78,
    "1987": 1.78,
    "1988": 2.78,
    "1989": 4.78,
    "1990": 5.78,
    "SERCODIGO": "PIBPCE",
    "NIVNOME": "Estados",
    "TERCODIGO": "10"
  },


**  ListarSéries:**

[
  {
    "field": "SERCODIGO",
    "headerText": "Código",
    "isPrimaryKey": true
  },
  {
    "field": "SERNOME",
    "headerText": "Nome"
  },
  {
    "field": "UNINOME",
    "headerText": "Unidade"
  },
  {
    "field": "PERNOME",
    "headerText": "Frequência"
  }
]    


**  GráficoSérie:**
 [
  {
    "Nome": "teste",
    "Pontos": [
      {
        "x": 10
      },
      {
        "y": 20
      }
    ]
  }
]



**  MapaSérie:**

  [
  {
    "type": "Feature",
    "id": "01",
    "propriedades": {
      "nome": "Acre",
      "valor": 94.65
    },
    "geometria": [
      {
        "type": "Polygon"
      },
      {
        "coordenadas": [
          {
            "y": 20
          },
          {
            "x": 10
          }
        ]
      }
    ]
  }
]

**  MenuDropdow:**
[
    name:  "macroeconomico",
    active: true,
    itens: [
        {
        name: "Temas",
        fantasia: "temas"},
        subItens: [
                {
                name: "Balanço de pagamentos",
                fantasia: "balanco-de-pagamentos"},
                subItens: [
                        {
                        name: "(Todas)",
                        fantasia: "todas"}
                     ]]]] 



