import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import MetisMenu from "react-metismenu";
import RouterLink from "react-metismenu-router-link";

import "../css/font-awesome.css";

const menu = [
	{
		icon: "globe",
		label: "Macroeconômico",
		content: [
			{
				icon: "bolt",
				label: "Todas as Séries",
				to: "/macroeconomico"
			},
			{
				icon: "bolt",
				label: "Temas",
				content: [
					{
						icon: "bolt",
						label: "Todos os temas",
						to: "/macroeconomico/temas"
					},
					{
						icon: "bolt",
						label: "Balanço de Pagamentos",
						content: [
							{
								icon: "bolt",
								label: "(Todas)",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos"
							},
							{
								icon: "bolt",
								label: "Bacen/Boletim/BP",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos/bacen-boletim-bp"
							},
							{
								icon: "bolt",
								label: "Bacen/BP (BPM5)",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos/bacen-bp-bpm5"
							},
							{
								icon: "bolt",
								label: "Bacen/BP (BPM6)",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos/bacen-bp-bpm6"
							},
							{
								icon: "bolt",
								label: "Bacen/Div Ext.",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos/bacen-div-ext"
							},
							{
								icon: "bolt",
								label: "Bacen/Not. Imp/Set. Ext.",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos/bacen-not-imp-set-ext"
							},
							{
								icon: "bolt",
								label: "Bacen/PII",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos/bacen-pii"
							},
							{
								icon: "bolt",
								label: "Outras Fontes",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos/bacen-pii"
							},
							{
								icon: "bolt",
								label: "Outras Fontes",
								to:
									"/macroeconomico/temas/balanco-de-pagamentos/bacen-pii"
							}
						]
					},
					{
						icon: "bolt",
						label: "Câmbio",
						content: [
							{
								icon: "bolt",
								label: "(Todas)",
								to: "/macroeconomico/temas/cambio"
							},
							{
								icon: "bolt",
								label: "Bacen Outras/SGS",
								to:
									"/macroeconomico/temas/cambio/bacen-outras-sgs"
							},
							{
								icon: "bolt",
								label: "Bacen/Boletim/BP",
								to:
									"/macroeconomico/temas/cambio/bacen-boletim-bp"
							},
							{
								icon: "bolt",
								label: "Banco Mundial/WDI",
								to:
									"/macroeconomico/temas/cambio/banco-mundial-wdi"
							},
							{
								icon: "bolt",
								label: "BM&FBovespa",
								to: "/macroeconomico/temas/cambio/bm&fbovespa"
							},
							{
								icon: "bolt",
								label: "IPEA",
								to: "/macroeconomico/temas/cambio/ipea"
							},
							{
								icon: "bolt",
								label: "Outras Fontes",
								to: "/macroeconomico/temas/cambio/outras-fontes"
							},
							{
								icon: "bolt",
								label: "Valor Economico",
								to:
									"/macroeconomico/temas/cambio/valor-economico"
							}
						]
					},
					{
						icon: "bolt",
						label: "Comércio Exterior",
						content: [
							{
								icon: "bolt",
								label: "(Todas)",
								to: "/macroeconomico/temas/comercio-exterior/"
							},
							{
								icon: "bolt",
								label: "Anda",
								to:
									"/macroeconomico/temas/comercio-exterior/anda"
							},
							{
								icon: "bolt",
								label: "Anfavea",
								to:
									"/macroeconomico/temas/comercio-exterior/anfavea"
							},
							{
								icon: "bolt",
								label: "ANP",
								to:
									"/macroeconomico/temas/comercio-exterior/ANP"
							},
							{
								icon: "bolt",
								label: "Bacen/BP/(BPM5)",
								to:
									"/macroeconomico/temas/comercio-exterior/bacen-BP-BPM5)"
							},
							{
								icon: "bolt",
								label: "CNI",
								to:
									"/macroeconomico/temas/comercio-exterior/CNI"
							},
							{
								icon: "bolt",
								label: "Funcex",
								to:
									"/macroeconomico/temas/comercio-exterior/funcex"
							},
							{
								icon: "bolt",
								label: "Funcex/Séries antigas",
								to:
									"/macroeconomico/temas/comercio-exterior/Funcex/Séries antigas"
							},
							{
								icon: "bolt",
								label: "IPEA",
								to:
									"/macroeconomico/temas/comercio-exterior/IPEA"
							},
							{
								icon: "bolt",
								label: "MDIC/SECEX",
								to:
									"/macroeconomico/temas/comercio-exterior/MDIC-SECEX"
							},
							{
								icon: "bolt",
								label: "MDIC/SECEX Países",
								to:
									"/macroeconomico/temas/comercio-exterior/MDIC-SECEX-paises"
							},
							{
								icon: "bolt",
								label: " Min.Fazenda/Cotec",
								to:
									"/macroeconomico/temas/comercio-exterior/min.fazenda/cotec"
							},
							{
								icon: "bolt",
								label: "Outras Fontes",
								to:
									"/macroeconomico/temas/comercio-exterior/outras fontes"
							}
						]
					},
					{
						icon: "bolt",
						label: "Consumos e Vendas",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/consumos-e-vendas/"
							},
							{
								label: "Abinee",
								to:
									"/macroeconomico/temas/consumos-e-vendas/abinee"
							},
							{
								label: "Abracal",
								to:
									"/macroeconomico/temas/consumos-e-vendas/Abracal"
							},
							{
								label: "Abras",
								to:
									"/macroeconomico/temas/consumos-e-vendas/Abras"
							},
							{
								label: "ACSP/IEGV",
								to:
									"/macroeconomico/temas/consumos-e-vendas/ACSP-IEGV"
							},
							{
								label: "Anda",
								to:
									"/macroeconomico/temas/consumos-e-vendas/anda"
							},
							{
								label: "ANP",
								to:
									"/macroeconomico/temas/consumos-e-vendas/ANP"
							},
							{
								label: "CNI",
								to:
									"/macroeconomico/temas/consumos-e-vendas/CNI"
							},
							{
								label: "Eletrobras",
								to:
									"/macroeconomico/temas/consumos-e-vendas/eletrobras"
							},
							{
								label: "Eletros",
								to:
									"/macroeconomico/temas/consumos-e-vendas/eletros"
							},
							{
								label: "Fecomercio SP",
								to:
									"/macroeconomico/temas/consumos-e-vendas/fecomércio-SP"
							},
							{
								label: "Fiesp",
								to:
									"/macroeconomico/temas/consumos-e-vendas/fiesp"
							},
							{
								label: "Firjan",
								to:
									"/macroeconomico/temas/consumos-e-vendas/firjan"
							},
							{
								label: "IBGE/PMC",
								to:
									"/macroeconomico/temas/consumos-e-vendas/IBGE/PMC"
							},
							{
								label: "Outras fontes",
								to:
									"/macroeconomico/temas/consumos-e-vendas/outras fontes"
							},
							{
								label: "Serasa",
								to:
									"/macroeconomico/temas/consumos-e-vendas/serasa"
							}
						]
					},
					{
						icon: "bolt",
						label: "Contas Nacionais",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/contas-nacionais/"
							},
							{
								label: "Bacen Outras/SGS",
								to:
									"/macroeconomico/temas/contas-nacionais/bacen-outras/SGS"
							},
							{
								label: "Bacen/Boletim/Ativ.Ec.",
								to:
									"/macroeconomico/temas/contas-nacionais/bacen-boletim-ativ.ec."
							},
							{
								label: "IBGE/RTSP",
								to:
									"/macroeconomico/temas/contas-nacionais/IBGE/RTSP"
							},
							{
								label: "IBGE/SCN 2000 Anual",
								to:
									"/macroeconomico/temas/contas-nacionais/IBGE/SCN-2000-anual"
							},
							{
								label: "IBGE/SCN 2000 Trim.",
								to:
									"/macroeconomico/temas/contas-nacionais/IBGE/SCN-2000-trim."
							},
							{
								label: "IBGE/SCN 2010 Anual.",
								to:
									"/macroeconomico/temas/contas-nacionais/IBGE/SCN-2010-anual"
							},
							{
								label: "IBGE/SCN 2010 Trim.",
								to:
									"/macroeconomico/temas/contas-nacionais/IBGE/SCN-2010-trim."
							},
							{
								label: "IPEA",
								to:
									"/macroeconomico/temas/contas-nacionais/IPEA"
							},
							{
								label: "Outras fontes",
								to:
									"/macroeconomico/temas/contas-nacionais/outras-fontes"
							}
						]
					},
					{
						icon: "bolt",
						label: "Correção Monetária",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/correção-monetária/"
							},
							{
								label: "Bacen Outras/SGS",
								to:
									"/macroeconomico/temas/correção-monetária/bacen outras/SGS"
							},
							{
								label: "CJF",
								to:
									"/macroeconomico/temas/correção-monetária/CJF"
							},
							{
								label: "IBGE/SNIPC",
								to:
									"/macroeconomico/temas/correção-monetária/IBGE/SNIPC"
							}
						]
					},
					{
						icon: "bolt",
						label: "Economia Internacional",
						content: [
							{
								label: "(Todas)",
								to:
									"/macroeconomico/temas/economia-internacional/"
							},
							{
								label: "Bacen/Boletim/Intern.",
								to:
									"/macroeconomico/temas/economia-internacional/bacen-boletim-intern."
							},
							{
								label: "Banco Mundial/WDI",
								to:
									"/macroeconomico/temas/economia-internacional/banco-mundial-WDI"
							},
							{
								label: "BLS",
								to:
									"/macroeconomico/temas/economia-internacional/BLS"
							},
							{
								label: "Economist",
								to:
									"/macroeconomico/temas/economia-internacional/economist"
							},
							{
								label: "EIA",
								to:
									"/macroeconomico/temas/economia-internacional/EIA"
							},
							{
								label: "FMI/IFS",
								to:
									"/macroeconomico/temas/economia-internacional/FMI/IFS"
							},
							{
								label: "KOF",
								to:
									"/macroeconomico/temas/economia-internacional/KOF"
							},
							{
								label: "Nasdaq",
								to:
									"/macroeconomico/temas/economia-internacional/Nasdaq"
							},
							{
								label: "OCDE",
								to:
									"/macroeconomico/temas/economia-internacional/OCDE"
							},
							{
								label: "Outras fontes",
								to:
									"/macroeconomico/temas/economia-internacional/outras fontes"
							},
							{
								label: "Valor Econômico",
								to:
									"/macroeconomico/temas/economia-internacional/valor-econômico"
							}
						]
					},
					{
						icon: "bolt",
						label: "Emprego",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/emprego/"
							},
							{
								label: "CNI",
								to: "/macroeconomico/temas/emprego/CNI"
							},
							{
								label: "Dieese",
								to: "/macroeconomico/temas/emprego/dieese"
							},
							{
								label: "Fiesp",
								to: "/macroeconomico/temas/emprego/fiesp"
							},
							{
								label: "Firjam",
								to: "/macroeconomico/temas/emprego/Firjam"
							},
							{
								label: "IBGE/PIM-DG",
								to: "/macroeconomico/temas/emprego/IBGE-PIM-DG"
							},
							{
								label: "IBGE/Pimes",
								to: "/macroeconomico/temas/emprego/IBGE-Pimes"
							},
							{
								label: "IBGE/PME",
								to: "/macroeconomico/temas/emprego/IBGE-PME"
							},
							{
								label: "IBGE/PME antiga",
								to:
									"/macroeconomico/temas/emprego/IBGE-PME-antiga"
							},
							{
								label: "IBGE/PNAD contínua",
								to:
									"/macroeconomico/temas/emprego/IBGE-PNAD-contínua"
							},
							{
								label: "IPEA",
								to: "/macroeconomico/temas/emprego/IPEA"
							},
							{
								label: "MTE/caged",
								to: "/macroeconomico/temas/emprego/todas"
							},
							{
								label: "Seade/PED",
								to: "/macroeconomico/temas/emprego/Seade-PED"
							}
						]
					},
					{
						icon: "bolt",
						label: "Estoque de Capital",
						to: "/macroeconomico/temas/estoque-de-capital"
					},
					{
						icon: "bolt",
						label: "Finanças Publicas",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/financas-publicas"
							},
							{
								label: "Bacen/Not.Imp./F.Púb.",
								to:
									"/macroeconomico/temas/financas-publicas/bacen-not.imp.-f.púb."
							},
							{
								label: "Bacen/Not.Imp./Moeda",
								to:
									"/macroeconomico/temas/financas-publicas/bacen/not.imp./moeda"
							},
							{
								label: "BNDES",
								to:
									"/macroeconomico/temas/financas-publicas/BNDES"
							},
							{
								label: "FNDE",
								to:
									"/macroeconomico/temas/financas-publicas/FNDE"
							},
							{
								label: "IBGE/RTSP",
								to:
									"/macroeconomico/temas/financas-publicas/IBGE-RTSP"
							},
							{
								label: "IPEA",
								to:
									"/macroeconomico/temas/financas-publicas/IPEA"
							},
							{
								label: "Min.Fazenda/Cotepe",
								to:
									"/macroeconomico/temas/financas-publicas/min.fazenda-cotepe"
							},
							{
								label: "Min.Fazenda/SRF",
								to:
									"/macroeconomico/temas/financas-publicas/min.fazenda-SRF"
							},
							{
								label: "Min.Fazenda/STN",
								to:
									"/macroeconomico/temas/financas-publicas/min.fazenda-STN"
							},
							{
								label: "MPS",
								to:
									"/macroeconomico/temas/financas-publicas/MPS"
							},
							{
								label: "Outras fontes",
								to:
									"/macroeconomico/temas/financas-publicas/Outras fontes"
							}
						]
					},
					{
						icon: "bolt",
						label: "Financeiras",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/financeiras/"
							},
							{
								label: "Anbina",
								to: "/macroeconomico/temas/financeiras/anbina"
							},
							{
								label: "Bacen/Boletim/M.Finan.",
								to:
									"/macroeconomico/temas/financeiras/bacen-boletim-m.finan."
							},
							{
								label: "BM&FBovespa",
								to:
									"/macroeconomico/temas/financeiras/BM&FBovespa"
							},
							{
								label: "Fundap/Diesp",
								to:
									"/macroeconomico/temas/financeiras/Fundap-Diesp"
							},
							{
								label: "IBMEC",
								to: "/macroeconomico/temas/financeiras/IBMEC"
							},
							{
								label: "IPEA",
								to: "/macroeconomico/temas/financeiras/IPEA"
							},
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/financeiras/todas"
							},
							{
								label: "JP Morgan",
								to:
									"/macroeconomico/temas/financeiras/JP-Morgan"
							},
							{
								label: "Valor Econômico",
								to:
									"/macroeconomico/temas/financeiras/valor economico"
							}
						]
					},
					{
						icon: "bolt",
						label: "Indicadores sociais",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/indicadores/"
							},
							{
								label: "IBGE/Pop",
								to: "/macroeconomico/temas/indicadores/IBGE-Pop"
							},
							{
								label: "IPEA",
								to: "/macroeconomico/temas/indicadores/IPEA"
							},
							{
								label: "MPS",
								to: "/macroeconomico/temas/indicadores/MPS"
							}
						]
					},
					{
						icon: "bolt",
						label: "Moeda e Crédito",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/moeda-e-credito/"
							},
							{
								label: "Anbina",
								to:
									"/macroeconomico/temas/moeda-e-credito/anbina"
							},
							{
								label: "Bacen/Boletim/M.Finan.",
								to:
									"/macroeconomico/temas/moeda-e-credito/bacen-boletim-m.finan."
							},
							{
								label: "Bacen/Not.Imp./Moeda",
								to:
									"/macroeconomico/temas/moeda-e-credito/bacen-not.-imp.-noeda"
							},
							{
								label: "Outras fontes",
								to:
									"/macroeconomico/temas/moeda-e-credito/outras fontes"
							}
						]
					},
					{
						icon: "bolt",
						label: "Percepção e expectativa",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/moeda-e-credito/"
							},
							{
								label: "CNI",
								to: "/macroeconomico/temas/moeda-e-credito/CNI"
							},
							{
								label: "Fecomercio",
								to:
									"/macroeconomico/temas/moeda-e-credito/Fecomercio"
							},
							{
								label: "IPEA",
								to: "/macroeconomico/temas/moeda-e-credito/IPEA"
							}
						]
					},
					{
						icon: "bolt",
						label: "População",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/populacao/"
							},
							{
								label: "IBGE/PNAD Contínua",
								to:
									"/macroeconomico/temas/populacao/IBGE-PNAD-continua"
							},
							{
								label: "IBGE/pop",
								to: "/macroeconomico/temas/populacao/IBGE-pop"
							},
							{
								label: "Outras Fontes",
								to:
									"/macroeconomico/temas/populacao/outras Fontes"
							}
						]
					},
					{
						icon: "bolt",
						label: "Preços",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/precos/"
							},
							{
								label: "ANP",
								to: "/macroeconomico/temas/precos/ANP"
							},
							{
								label: "BACEN/Boletim/Ativ.Ec.",
								to:
									"/macroeconomico/temas/precos/BACEN-boletim-Ativ.Ec."
							},
							{
								label: "Conab/IE",
								to: "/macroeconomico/temas/precos/Conab/IE"
							},
							{
								label: "Dieese",
								to: "/macroeconomico/temas/precos/dieese"
							},
							{
								label: "FGV/Conj.Econ.",
								to:
									"/macroeconomico/temas/precos/FGV-Conj.Econ."
							},
							{
								label: "FGV/Conj.Econ.-IGP",
								to:
									"/macroeconomico/temas/precos/FGV-conj.Econ.-IGP"
							},
							{
								label: "FGV/Conj.Econ.-IGP antigo",
								to:
									"/macroeconomico/temas/precos/FGV-conj.Econ.-IGP-antigo"
							},
							{
								label: "Fipe",
								to: "/macroeconomico/temas/precos/fipe"
							},
							{
								label: "IBGE/IPP",
								to: "/macroeconomico/temas/precos/IBGE-IPP"
							},
							{
								label: "IBGE/SNIPC",
								to: "/macroeconomico/temas/precos/IBGE-SNIPC"
							},
							{
								label: "IPEA",
								to: "/macroeconomico/temas/precos/IPEA"
							},
							{
								label: "Outras fontes",
								to: "/macroeconomico/temas/precos/outras fontes"
							},
							{
								label: "Seab-PR",
								to: "/macroeconomico/temas/precos/seab-PR"
							}
						]
					},
					{
						icon: "bolt",
						label: "Produção",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/producao/"
							},
							{
								label: "Abia",
								to: "/macroeconomico/temas/producao/abia"
							},
							{
								label: "ASPO",
								to: "/macroeconomico/temas/producao/ASPO"
							},
							{
								label: "Abracal",
								to: "/macroeconomico/temas/producao/abracal"
							},
							{
								label: "Anatel",
								to: "/macroeconomico/temas/producao/anatel"
							},
							{
								label: "Anda",
								to: "/macroeconomico/temas/producao/anda"
							},
							{
								label: "Anfavea",
								to: "/macroeconomico/temas/producao/anfavea"
							},
							{
								label: "ANP",
								to: "/macroeconomico/temas/producao/ANP"
							},
							{
								label: "Bacen Outras/SGS",
								to:
									"/macroeconomico/temas/producao/bacen outras-SGS"
							},
							{
								label: "CNI",
								to: "/macroeconomico/temas/producao/CNI"
							},
							{
								label: "Conab/IE",
								to: "/macroeconomico/temas/producao/Conab-IE"
							},
							{
								label: "Eletrobras",
								to: "/macroeconomico/temas/producao/eletrobras"
							},
							{
								label: "FGV/conj.Econ.",
								to:
									"/macroeconomico/temas/producao/FGV-conj.econ."
							},
							{
								label: "FGV/conj.Econ.antiga",
								to:
									"/macroeconomico/temas/producao/FGV-conj.econ. antiga"
							},
							{
								label: "Fiemg",
								to: "/macroeconomico/temas/producao/fiemg"
							},
							{
								label: "Fiesp",
								to: "/macroeconomico/temas/producao/fiesp"
							},
							{
								label: "Firjan",
								to: "/macroeconomico/temas/producao/firjan"
							},
							{
								label: "IBGE/Coagro",
								to: "/macroeconomico/temas/producao/IBGE-coagro"
							},
							{
								label: "IBGE/PAM",
								to: "/macroeconomico/temas/producao/IBGE-PAM"
							},
							{
								label: "IBGE/PIM-PF",
								to: "/macroeconomico/temas/producao/IBGE-PIM-PF"
							},
							{
								label: "IBGE/PIM-PF antiga",
								to:
									"/macroeconomico/temas/producao/IBGE-PIM-PF-antiga"
							},
							{
								label: "IBGE/PPM",
								to: "/macroeconomico/temas/producao/IBGE-PPM"
							},
							{
								label: "IBS/ES",
								to: "/macroeconomico/temas/producao/IBS-ES"
							},
							{
								label: "IBS/IE",
								to: "/macroeconomico/temas/producao/IBS-IE"
							},
							{
								label: "MME",
								to: "/macroeconomico/temas/producao/MME"
							},
							{
								label: "ONS",
								to: "/macroeconomico/temas/producao/ONS"
							},
							{
								label: "Outras fontes",
								to:
									"/macroeconomico/temas/producao/outras-fontes"
							},
							{
								label: "SNIC",
								to: "/macroeconomico/temas/producao/SNIC"
							}
						]
					},
					{
						icon: "bolt",
						label: "Projeções",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/projecoes/"
							},
							{
								label: "FMI/IFS",
								to: "/macroeconomico/temas/projecoes/FMI-IFS"
							},
							{
								label: "IBGE/Pop",
								to: "/macroeconomico/temas/projecoes/IBGE-Pop"
							}
						]
					},
					{
						icon: "bolt",
						label: "Salário e Renda",
						content: [
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/salario-e-renda/"
							},
							{
								label: "CNI",
								to: "/macroeconomico/temas/salario-e-renda/CNI"
							},
							{
								label: "Fiesp",
								to: "/macroeconomico/temas/salario-e-renda/fiesp"
							},
							{
								label: "IBGE/PIM-DG",
								to: "/macroeconomico/temas/salario-e-renda/IBGE-PIM-DG"
							},
							{
								label: "IBGE/Pimes",
								to: "/macroeconomico/temas/salario-e-renda/IBGE-Pimes"
							},
							{
								label: "IBGE/PME",
								to: "/macroeconomico/temas/salario-e-renda/todas"
							},
							{
								label: "IBGE/PME antiga",
								to: "/macroeconomico/temas/salario-e-renda/IBGE-PME-antiga"
							},
							{
								label: "IBGE PNAD contínua",
								to: "/macroeconomico/temas/salario-e-renda/IBGE-PNAD-contínua"
							},
							{
								label: "IEA",
								to: "/macroeconomico/temas/salario-e-renda/IEA"
							},
							{
								label: "IPEA",
								to: "/macroeconomico/temas/salario-e-renda/IPEA"
							},
							{
								label: "(Todas)",
								to: "/macroeconomico/temas/salario-e-renda/todas"
							},
							{
								label: "MTE/outras",
								to: "/macroeconomico/temas/salario-e-renda/MTE-outras"
							},
							{
								label: "Outras Fontes",
								to: "/macroeconomico/temas/salario-e-renda/Outras-fontes"
							},
							{
								label: "Seade/PED",
								to: "/macroeconomico/temas/salario-e-renda/Seade-PED"
							}
						]
					},
					{
						icon: "bolt",
						label: "Transporte",
						content: [
                        {
                        label: "(Todas)",
                                to: "/macroeconomico/temas/transporte/"
                        },
                        {
                        label: "Anac",
                                to: "/macroeconomico/temas/transporte/Anac"
                        },
                        {
                        label: "Antaq/AEP",
                                to: "/macroeconomico/temas/transporte/Antaq-AEP"
                        },
                        {
                        label: "ANTT/AETT",
                                to: "/macroeconomico/temas/transporte/ANTT-AETT"
                        },
                        ]
					}
				]
			},
			{
				icon: "bolt",
				label: "Fontes",
				content: [
					{
						icon: "bolt",
						label: "Todas as Fontes",
						to: "/macroeconomico/fontes"
					},
					{
						icon: "bolt",
						label: "Abia",
						to: "/macroeconomico/fontes/abia"
					},
					{
						icon: "bolt",
						label: "Abinee",
						to: "/macroeconomico/fontes/abinee"
					},
					{
						icon: "bolt",
						label: "Abracal",
						to: "/macroeconomico/fontes/Abracal"
					},
					{
						icon: "bolt",
						label: "Abinee",
						to: "/macroeconomico/fontes/abinee"
					},
					{
						icon: "bolt",
						label: "Abras",
						to: "/macroeconomico/fontes/abras"
					},
					{
						icon: "bolt",
						label: "ACSP",
						to: "/macroeconomico/fontes/ACSP"
					},
					{
						icon: "bolt",
						label: "Anac",
						to: "/macroeconomico/fontes/anac"
					},
					{
						icon: "bolt",
						label: "Anatil",
						to: "/macroeconomico/fontes/anatil"
					},
					{
						icon: "bolt",
						label: "Anbima",
						to: "/macroeconomico/fontes/anbima"
					},
					{
						icon: "bolt",
						label: "Anda",
						to: "/macroeconomico/fontes/anda"
					},
					{
						icon: "bolt",
						label: "Anfavea",
						to: "/macroeconomico/fontes/anfavea"
					},
					{
						icon: "bolt",
						label: "ANP",
						to: "/macroeconomico/fontes/ANP"
					},
					{
						icon: "bolt",
						label: "Abinee",
						to: "/macroeconomico/fontes/abinee"
					},
					{
						icon: "bolt",
						label: "Antaq/AEP",
						to: "/macroeconomico/fontes/antaq-AEP"
					},
					{
						icon: "bolt",
						label: "ANTT/AETT",
						to: "/macroeconomico/fontes/ANTT/AETT"
					},
					{
						icon: "bolt",
						label: "Bacen",
						to: "/macroeconomico/fontes/bacen"
					},
					{
						icon: "bolt",
						label: "Banco Mundial",
						to: "/macroeconomico/fontes/banco-mundial"
					},
					{
						icon: "bolt",
						label: "BlS",
						to: "/macroeconomico/fontes/BlS"
					},
					{
						icon: "bolt",
						label: "BM & FBovespa",
						to: "/macroeconomico/fontes/BM-&-fbovespa"
					},
					{
						icon: "bolt",
						label: "BNDES",
						to: "/macroeconomico/fontes/BNDES"
					},
					{
						icon: "bolt",
						label: "CJF",
						to: "/macroeconomico/fontes/CJF"
					},
					{
						icon: "bolt",
						label: "CNI",
						to: "/macroeconomico/fontes/CNI"
					},
					{
						icon: "bolt",
						label: "Conab",
						to: "/macroeconomico/fontes/Conab"
					},
					{
						icon: "bolt",
						label: "Abinee",
						to: "/macroeconomico/fontes/abinee"
					},
					{
						icon: "bolt",
						label: "Dieese",
						to: "/macroeconomico/fontes/dieese"
					},
					{
						icon: "bolt",
						label: "Economist",
						to: "/macroeconomico/fontes/economist"
					},
					{
						icon: "bolt",
						label: "EIA",
						to: "/macroeconomico/fontes/EIA"
					},
					{
						icon: "bolt",
						label: "Eletrobras",
						to: "/macroeconomico/fontes/Eletrobras"
					},
					{
						icon: "bolt",
						label: "Eletros",
						to: "/macroeconomico/fontes/eletros"
					},
					{
						icon: "bolt",
						label: "Fecomercio SP",
						to: "/macroeconomico/fontes/Fecomercio-SP"
					},
					{
						icon: "bolt",
						label: "FGV",
						to: "/macroeconomico/fontes/FGV"
					},
					{
						icon: "bolt",
						label: "Abinee",
						to: "/macroeconomico/fontes/abinee"
					},
					{
						icon: "bolt",
						label: "Fiesp",
						to: "/macroeconomico/fontes/fiesp"
					},
					{
						icon: "bolt",
						label: "Firjan",
						to: "/macroeconomico/fontes/Firjan"
					},
					{
						icon: "bolt",
						label: "FMI",
						to: "/macroeconomico/fontes/FMI"
					},
					{
						icon: "bolt",
						label: "Abinee",
						to: "/macroeconomico/fontes/abinee"
					},
					{
						icon: "bolt",
						label: "FNDE",
						to: "/macroeconomico/fontes/FNDE"
					},
					{
						icon: "bolt",
						label: "Funcex",
						to: "/macroeconomico/fontes/funcex"
					},
					{
						icon: "bolt",
						label: "Fundap/Diesp",
						to: "/macroeconomico/fontes/Fundap-Diesp"
					},
					{
						icon: "bolt",
						label: "IBGE",
						to: "/macroeconomico/fontes/IBGE"
					},
					{
						icon: "bolt",
						label: "IBMEC",
						to: "/macroeconomico/fontes/IBMEC"
					},
					{
						icon: "bolt",
						label: "IBS",
						to: "/macroeconomico/fontes/IBS"
					},
					{
						icon: "bolt",
						label: "IEA",
						to: "/macroeconomico/fontes/IEA"
					},
					{
						icon: "bolt",
						label: "IPEA",
						to: "/macroeconomico/fontes/IPEA"
					},
					{
						icon: "bolt",
						label: "JP Morgan",
						to: "/macroeconomico/fontes/JP-morgan"
					},
					{
						icon: "bolt",
						label: "KOF",
						to: "/macroeconomico/fontes/KOF"
					},
					{
						icon: "bolt",
						label: "MDIC",
						to: "/macroeconomico/fontes/MDIC"
					},
					{
						icon: "bolt",
						label: "Min.Fazenda",
						to: "/macroeconomico/fontes/min.-fazenda"
					},
					{
						icon: "bolt",
						label: "Abinee",
						to: "/macroeconomico/fontes/abinee"
					},
					{
						icon: "bolt",
						label: "MME",
						to: "/macroeconomico/fontes/MME"
					},
					{
						icon: "bolt",
						label: "MPC",
						to: "/macroeconomico/fontes/MPC"
					},
					{
						icon: "bolt",
						label: "Nasdaq",
						to: "/macroeconomico/fontes/nasdaq"
					},
					{
						icon: "bolt",
						label: "OCDE",
						to: "/macroeconomico/fontes/OCDE"
					},
					{
						icon: "bolt",
						label: "Outras fontes",
						to: "/macroeconomico/fontes/outras-fontes"
					},
					{
						icon: "bolt",
						label: "Seab-PR",
						to: "/macroeconomico/fontes/seab-PR"
					},
					{
						icon: "bolt",
						label: "Seab/PED",
						to: "/macroeconomico/fontes/Seab-PED"
					},
					{
						icon: "bolt",
						label: "Serasa",
						to: "/macroeconomico/fontes/serasa"
					},
					{
						icon: "bolt",
						label: "SNIC",
						to: "/macroeconomico/fontes/SNIC"
					},
					{
						icon: "bolt",
						label: "Valor econômico",
						to: "/macroeconomico/fontes/valor-econômico"
					}
				]
			},
			{
				icon: "bolt",
				label: "Periodicidade",
				content: [
					{
						icon: "bolt",
						label: "Todos os períodos",
						to: "/macroeconomico/peridiocididade"
					},
					{
						icon: "bolt",
						label: "Diária",
						to: "/macroeconomico/peridiocididade/diaria"
					},
					{
						icon: "bolt",
						label: "Mensal",
						to: "/macroeconomico/peridiocididade/mensal"
					},
					{
						icon: "bolt",
						label: "Trimestral",
						to: "/macroeconomico/peridiocididade/trimestral"
					},
					{
						icon: "bolt",
						label: "Anual",
						to: "/macroeconomico/peridiocididade/anual"
					}
				]
			},
			{
				icon: "bolt",
				label: "Índices analíticos",
				content: [
					{
						icon: "bolt",
						label: "Todos os Índices",
						to: "/macroeconomico/indices-analiticos/"
					},
					{
						icon: "bolt",
						label: "Agregados Monetários",
						to:
							"/macroeconomico/indices-analiticos/agregados-monetarios"
					},
					{
						icon: "bolt",
						label: "Balanço de Pagamentos (BPM5)",
						to:
							"/macroeconomico/indices-analiticos/balanco-de-pagamentos-bpm5"
					},
					{
						icon: "bolt",
						label: "Balanço de Pagamentos (BPM6)",
						to:
							"/macroeconomico/indices-analiticos/balanco-de-pagamentos-bpm6"
					},
					{
						icon: "bolt",
						label: "Comércio Exterior",
						to:
							"/macroeconomico/indices-analiticos/comercio-exterior"
					},
					{
						icon: "bolt",
						label: "Contas Nacionais - Anuais",
						to:
							"/macroeconomico/indices-analiticos/contas-nacionais-anuais"
					},
					{
						icon: "bolt",
						label: "Contas Nacionais - Trimestrais",
						to:
							"/macroeconomico/indices-analiticos/contas-nacionais-trimestrais"
					},
					{
						icon: "bolt",
						label: "Contas Públicas",
						to: "/macroeconomico/indices-analiticos/contas-publicas"
					},
					{
						icon: "bolt",
						label: "Dívida líquida do setor público",
						to:
							"/macroeconomico/indices-analiticos/divida-liquida-do-setor-publico"
					},
					{
						icon: "bolt",
						label: "Emprego e Renda",
						to: "/macroeconomico/indices-analiticos/emprego-e-renda"
					},
					{
						icon: "bolt",
						label: "Execução financeira - STN",
						to:
							"/macroeconomico/indices-analiticos/execucao-financeira-stn"
					},
					{
						icon: "bolt",
						label: "Fluxo de caixa da previdência",
						to:
							"/macroeconomico/indices-analiticos/fluxo-de-caixa-da-previdencia"
					},
					{
						icon: "bolt",
						label: "NFSP - BCB",
						to: "/macroeconomico/indices-analiticos/nfsp-bcb"
					},
					{
						icon: "bolt",
						label: "NFSP - STN",
						to: "/macroeconomico/indices-analiticos/nfsp-stn"
					},
					{
						icon: "bolt",
						label: "Preços",
						to: "/macroeconomico/indices-analiticos/precos"
					},
					{
						icon: "bolt",
						label: "Receitas Publicas",
						to:
							"/macroeconomico/indices-analiticos/receitas-publicas"
					},
					{
						icon: "bolt",
						label: "Taxa de câmbio real",
						to:
							"/macroeconomico/indices-analiticos/taxa-de-cambio-real"
					},
					{
						icon: "bolt",
						label: "Transportes",
						to: "/macroeconomico/indices-analiticos/transportes"
					}
				]
			},
			{
				icon: "bolt",
				label: "Sinopse macroeconômica",
				to: "/macroeconomico/sinopse-macroeconomica"
			},
			{
				icon: "bolt",
				label: "Séries mais usadas",
				to: "/macroeconomico/series-mais-usadas"
			},
			{
				icon: "bolt",
				label: "Indicadores Ipea ",
				to: "/macroeconomico/indicadores-ipea"
			},
			{
				icon: "bolt",
				label: "Séries Históricas ",
				content: [
					{
						icon: "bolt",
						label: "Todas as Séries Históricas",
						to: "/macroeconomico/series-historicas/"
					},
					{
						icon: "bolt",
						label: "Balanço de Pagamentos",
						to:
							"/macroeconomico/series-historicas/balanco-de-pagamentos"
					},
					{
						icon: "bolt",
						label: "Câmbio",
						to: "/macroeconomico/series-historicas/cambio"
					},
					{
						icon: "bolt",
						label: "Comércio Exterior",
						to:
							"/macroeconomico/series-historicas/comercio-exterior"
					},
					{
						icon: "bolt",
						label: "Consumos e Vendas",
						to:
							"/macroeconomico/series-historicas/consumos-e-vendas"
					},
					{
						icon: "bolt",
						label: "Contas Nacionais",
						to: "/macroeconomico/series-historicas/contas-nacionais"
					},
					{
						icon: "bolt",
						label: "Correção Monetária",
						to:
							"/macroeconomico/series-historicas/correção-monetária"
					},
					{
						icon: "bolt",
						label: "Economia Internacional",
						to:
							"/macroeconomico/series-historicas/economia-internacional"
					},
					{
						icon: "bolt",
						label: "Finanças Publicas",
						to:
							"/macroeconomico/series-historicas/financas-publicas"
					},
					{
						icon: "bolt",
						label: "Financeiras",
						to: "/macroeconomico/series-historicas/financeiras"
					},
					{
						icon: "bolt",
						label: "Moeda e Crédito",
						to: "/macroeconomico/series-historicas/moeda-e-crédito"
					},
					{
						icon: "bolt",
						label: "População",
						to: "/macroeconomico/series-historicas/populacao"
					},
					{
						icon: "bolt",
						label: "Preços",
						to: "/macroeconomico/series-historicas/precos"
					},
					{
						icon: "bolt",
						label: "Produção",
						to: "/macroeconomico/series-historicas/producao"
					},
					{
						icon: "bolt",
						label: "Salário e Renda",
						to: "/macroeconomico/series-historicas/salario-e-renda"
					},
					{
						icon: "bolt",
						label: "Transporte",
						to: "/macroeconomico/series-historicas/transporte"
					}
				]
			},
			{
				icon: "bolt",
				label: "Ajuda",
				to: "/teste"
			}
		]
	},
	{
		icon: "globe",
		label: "Regional",
		content: [
			{
				icon: "bolt",
				label: "Todas as Séries",
				to: "/regional"
			},
			{
				icon: "bolt",
				label: "Ajuda",
				to: "/teste"
			}
		]
	},
	{
		icon: "globe",
		label: "Social",
		content: [
			{
				icon: "bolt",
				label: "Todas as Séries",
				to: "/social"
			},
			{
				icon: "bolt",
				label: "Ajuda",
				to: "/teste"
			}
		]
	}
];

const menu2 = [
	{
		icon: "globe",
		label: "Regional",
		content: [
			{
				icon: "bolt",
				label: "Todas as Séries",
				to: "/regional"
			},
			{
				icon: "bolt",
				label: "Ajuda",
				to: "/teste"
			}
		]
	}
];

const menu3 = [
	{
		icon: "globe",
		label: "Social",
		content: [
			{
				icon: "bolt",
				label: "Todas as Séries",
				to: "/social"
			},
			{
				icon: "bolt",
				label: "Ajuda",
				to: "/teste"
			}
		]
	}
];

class NewMenu extends Component {
	render() {
		if (this.props.url.id == "macroeconomico") {
			return (
				<MetisMenu
					className={"testenew1"}
					content={menu}
					activeLinkFromLocation
					LinkComponent={RouterLink}
				/>
			);
		}

		if (this.props.url.id == "regional") {
			return (
				<MetisMenu
					className={"testenew1"}
					content={menu2}
					activeLinkFromLocation
					LinkComponent={RouterLink}
				/>
			);
		}

		if (this.props.url.id == "social") {
			return (
				<MetisMenu
					className={"testenew1"}
					content={menu3}
					activeLinkFromLocation
					LinkComponent={RouterLink}
				/>
			);
		}
		return (
			<MetisMenu
				className={"testenew1"}
				content={menu}
				activeLinkFromLocation
				LinkComponent={RouterLink}
			/>
		);
	}
}
export default NewMenu;