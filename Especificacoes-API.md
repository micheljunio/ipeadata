
# IPEADATA 2.0

# Especificação da API

**Histórico de Revisões**

| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 14/07/2017 | 1.00 | Criação | Bruno Rangel |
|   |   |   |   |

## 1.Introdução

### Propósito

Este documento contém as especificações necessárias para o desenvolvimento da API que será responsável pela alimentação do portal IpeaData 2.0.

### Público Alvo

Este documento se destina aos usuários, engenheiros de software, testadores que pretendem entender a solução proposta/desenvolvida.

## 2.Escopo

### Informações iniciais

**info:**
```sh
   Título: IpeaData
   Descrição: Metadados para o Portal IpeaData
   Versão: 1.0.0
   host: **&quot;http://www.ipeadata.gov.br/api/odata4/Metadados**
  schemes:
    - http
    - https
```

### 3.1 Definindo o modelo de dados

**GridSérie:**
```sh
  {
    "SERCODIGO": "PIBPCE",
    "NIVNOME": "Estados",
    "TERCODIGO": "10",
    "1985": 3.78,
    "1986": 0.78,
    "1987": 1.78,
    "1988": 2.78,
    "1989": 4.78,
    "1990": 5.78,
    ...
  }

```

**ListarSéries:**
```sh
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
```
**GráficoSérie:**
```sh
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
```


**MapaSérie:**
```sh
  [
  {
    "type": "Feature",
    "id": "01",
    "properties": {
      "name": "Acre",
      "density": 94.65
    },
    "geometry": [
      {
        "type": "Polygon"
      },
      {
        "coordinates": [
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
```
**MenuDropdow:**
```sh
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
```

### 3.1 Definindo o modelo de configuração dos componentes

**Grid**

```sh
{
		serie: "xxx",
		grid: {
	     	exportToExcelAction:"xx", 
			allowPaging: true,
			allowSorting: true,
			allowGrouping: false,
			allowFiltering: true,
			allowReordering: true,
			allowMultiSorting: true,
			allowResizeToFit: true,
			filterSettings: { filterType: "excel" },
			rowSelected: "window.rowSelected"
		},
```
**Gráfico**
```sh
graph: {			
            theme: "gradientlight",            
            commonSeriesOptions: {
                type: 'line',
                enableAnimation: true,
                border: { width: 2 }
            },
            isResponsive: true,
            load: "loadTheme",            
            legend: { visible: true },
            zooming: {
                enable: true,
                type: 'xy',
                enableMouseWheel: true,
                enableScrollbar: true,
                enableDeferredZoom: true
            },
            crosshair: {
                visible: true,
                type: 'trackball',
                trackballTooltipSettings: {
                    mode: 'grouping',
                    border: {
                        width: 1,
                        color: 'grey'
                    },
                    rx: 3,
                    ry: 3,
                    fill: 'whitesmoke'
                }
            }        
		},
```
**Mapa**
```sh
 map: {
        width='100%' //
        height={500} 
        center={[ -15.7801, -47.9292]} //coordenada para centralizar o mapa
        zoom={4} //zoom padrão do mapa
        position='topright'
        data={date}  
        legend='bottomright' //define a posição da legenda
        legendClass=''     //configurações de estilo para legenda
        valueProperty='density' //variavel utilizada como tema do mapa
        steps={8}
        buckets={[0, 10, 20, 50, 100, 200, 500, 1000, 'inf']} //intervalos da legenda
        colors={['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A']} // cores para a legenda
        style={{
              weight: 2,
              opacity: 1,
              color: '#EE9A49',
              dashArray: 3,
              fillOpacity: 0.7
            }}
            //estilo quando indicado pelo cursor so mouse
            highlightStyle={
              weight: 5, 
              color: '#666', 
              dashArray: '', 
              fillOpacity: 0.7  
            }
    );
  }
}
```



