import { View, Text, StyleSheet } from 'react-native';

const formatarMoeda = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function ResultadoFinanceiro({ resultado }) {
  if (!resultado) return null;

  const { rendaNum, totalGastos, saldo, percentual, situacao, corSituacao } = resultado;

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitulo}>📊 Resumo Financeiro</Text>

      <View style={styles.linha}>
        <Text style={styles.labelItem}>Renda Mensal</Text>
        <Text style={[styles.valor, { color: '#22c55e' }]}>{formatarMoeda(rendaNum)}</Text>
      </View>

      <View style={styles.divisor} />

      <View style={styles.linha}>
        <Text style={styles.labelItem}>Total de Gastos</Text>
        <Text style={[styles.valor, { color: '#ef4444' }]}>{formatarMoeda(totalGastos)}</Text>
      </View>

      <View style={styles.linha}>
        <Text style={styles.labelItem}>Saldo Disponível</Text>
        <Text style={[styles.valor, { color: saldo >= 0 ? '#22c55e' : '#ef4444' }]}>
          {formatarMoeda(saldo)}
        </Text>
      </View>

      <View style={styles.divisor} />

      <View style={styles.linha}>
        <Text style={styles.labelItem}>Percentual Comprometido</Text>
        <Text style={[styles.valor, { color: corSituacao }]}>{percentual.toFixed(1)}%</Text>
      </View>

      <View style={styles.barraFundo}>
        <View
          style={[
            styles.barraProgresso,
            { width: `${Math.min(percentual, 100)}%`, backgroundColor: corSituacao },
          ]}
        />
      </View>

      <View style={[styles.situacaoBox, { borderColor: corSituacao }]}>
        <Text style={styles.situacaoLabel}>Situação Financeira</Text>
        <Text style={[styles.situacaoValor, { color: corSituacao }]}>{situacao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitulo: { fontSize: 16, fontWeight: 'bold', color: '#1e3a5f', marginBottom: 16 },
  linha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 },
  labelItem: { fontSize: 14, color: '#64748b' },
  valor: { fontSize: 15, fontWeight: 'bold' },
  divisor: { height: 1, backgroundColor: '#e2e8f0', marginVertical: 4 },
  barraFundo: {
    height: 10,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  barraProgresso: { height: 10, borderRadius: 10 },
  situacaoBox: { borderWidth: 2, borderRadius: 12, padding: 14, alignItems: 'center' },
  situacaoLabel: { fontSize: 12, color: '#94a3b8', marginBottom: 4 },
  situacaoValor: { fontSize: 20, fontWeight: 'bold' },
});