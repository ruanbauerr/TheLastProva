import { useState } from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';

import Header from './src/components/Header';
import FormularioOrcamento from './src/components/FormularioOrcamento';
import ResultadoFinanceiro from './src/components/ResultadoFinanceiro';
import LegendaSituacao from './src/components/LegendaSituacao';

const parseMoeda = (valor) => parseFloat(valor.replace(',', '.')) || 0;

export default function App() {
  const [renda, setRenda] = useState('');
  const [fixos, setFixos] = useState('');
  const [variaveis, setVariaveis] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const rendaNum = parseMoeda(renda);
    const fixosNum = parseMoeda(fixos);
    const variaveisNum = parseMoeda(variaveis);
    const totalGastos = fixosNum + variaveisNum;
    const saldo = rendaNum - totalGastos;
    const percentual = rendaNum > 0 ? (totalGastos / rendaNum) * 100 : 0;

    let situacao, corSituacao;
    if (percentual <= 70) { situacao = '✅ Saudável'; corSituacao = '#22c55e'; }
    else if (percentual <= 90) { situacao = '⚠️ Atenção'; corSituacao = '#f59e0b'; }
    else { situacao = '🚨 Crítica'; corSituacao = '#ef4444'; }

    setResultado({ rendaNum, totalGastos, saldo, percentual, situacao, corSituacao });
  };

  const limpar = () => {
    setRenda('');
    setFixos('');
    setVariaveis('');
    setResultado(null);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a5f" />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Header />
        <FormularioOrcamento
          renda={renda}
          fixos={fixos}
          variaveis={variaveis}
          setRenda={setRenda}
          setFixos={setFixos}
          setVariaveis={setVariaveis}
          onCalcular={calcular}
          onLimpar={limpar}
        />
        <ResultadoFinanceiro resultado={resultado} />
        <LegendaSituacao />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8' },
  content: { padding: 16, paddingBottom: 40 },
});