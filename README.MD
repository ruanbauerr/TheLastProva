Controle de Orçamento Mensal
Descrição do Projeto

O Controle de Orçamento Mensal é um aplicativo mobile desenvolvido com React Native e Expo que auxilia usuários no acompanhamento básico de suas finanças pessoais. O sistema permite registrar informações de renda e despesas para calcular automaticamente o saldo disponível e apresentar uma visão simplificada da situação financeira do mês.

O objetivo é fornecer uma ferramenta simples e intuitiva para ajudar no planejamento financeiro e no controle dos gastos mensais.

Objetivos
Facilitar o controle financeiro pessoal.
Permitir o cálculo automático do saldo mensal.
Exibir informações financeiras de forma clara e organizada.
Incentivar o planejamento e a conscientização sobre gastos.
Público-Alvo
Estudantes.
Trabalhadores autônomos.
Pessoas que desejam controlar seus gastos mensais.
Usuários que buscam uma solução simples para organização financeira.
Requisitos Funcionais
RF01 – Informar Renda Mensal

O sistema deve permitir que o usuário informe o valor de sua renda mensal.

RF02 – Informar Gastos Fixos

O sistema deve permitir que o usuário informe o valor total dos gastos fixos mensais.

RF03 – Informar Gastos Variáveis

O sistema deve permitir que o usuário informe o valor total dos gastos variáveis do mês.

RF04 – Calcular Total de Gastos

O sistema deve calcular automaticamente a soma dos gastos fixos e variáveis.

RF05 – Calcular Saldo Disponível

O sistema deve calcular automaticamente o saldo restante após a subtração dos gastos da renda mensal.

RF06 – Exibir Percentual de Gastos

O sistema deve calcular e exibir o percentual da renda comprometido com despesas.

RF07 – Classificar Situação Financeira

O sistema deve informar a situação financeira do usuário com base no percentual de gastos:

Saudável
Atenção
Crítica
RF08 – Atualizar Resultados

O sistema deve atualizar os cálculos sempre que os valores forem alterados.

RF09 – Limpar Dados

O sistema deve disponibilizar uma opção para limpar todos os campos preenchidos.

RF10 – Exibir Resumo Financeiro

O sistema deve apresentar um resumo contendo:

Renda mensal;
Total de gastos;
Saldo disponível;
Percentual comprometido;
Situação financeira.
Requisitos Não Funcionais
RNF01 – Plataforma

O aplicativo deverá ser desenvolvido utilizando React Native com Expo.

RNF02 – Interface

A interface deverá ser simples, intuitiva e responsiva.

RNF03 – Desempenho

Os cálculos deverão ser executados instantaneamente após a alteração dos valores.

RNF04 – Usabilidade

O usuário deverá conseguir utilizar todas as funcionalidades sem necessidade de treinamento.

RNF05 – Armazenamento

O sistema não utilizará banco de dados ou APIs externas.

Tecnologias Utilizadas
React Native
Expo
JavaScript
React Hooks (useState)
Fluxo de Funcionamento
O usuário informa sua renda mensal.
O usuário informa seus gastos fixos.
O usuário informa seus gastos variáveis.
O sistema realiza os cálculos automaticamente.
O sistema exibe:
Total de gastos;
Saldo restante;
Percentual comprometido;
Situação financeira.
O usuário pode limpar os dados e realizar novos cálculos.
Estrutura de Telas
Tela Principal

Campos:

Renda Mensal
Gastos Fixos
Gastos Variáveis

Botões:

Calcular
Limpar

Resultados:

Total de Gastos
Saldo Disponível
Percentual de Gastos
Situação Financeira
Resultado Esperado

Ao final, o aplicativo permitirá que o usuário tenha uma visão rápida e organizada de sua situação financeira mensal, auxiliando na tomada de decisões relacionadas ao controle de gastos e planejamento financeiro.