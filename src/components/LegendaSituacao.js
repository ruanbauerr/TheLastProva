import { View, Text, StyleSheet } from 'react-native';

const itens = [
  { cor: '#22c55e', texto: 'Até 70% — Saudável' },
  { cor: '#f59e0b', texto: '71% a 90% — Atenção' },
  { cor: '#ef4444', texto: 'Acima de 90% — Crítica' },
];

export default function LegendaSituacao() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitulo}>📌 Referência</Text>
      {itens.map((item) => (
        <View key={item.texto} style={styles.linha}>
          <View style={[styles.ponto, { backgroundColor: item.cor }]} />
          <Text style={styles.texto}>{item.texto}</Text>
        </View>
      ))}
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
  linha: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  ponto: { width: 12, height: 12, borderRadius: 6, marginRight: 10 },
  texto: { fontSize: 13, color: '#475569' },
});