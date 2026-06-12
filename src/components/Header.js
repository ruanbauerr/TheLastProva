import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.icon}>💰</Text>
      <Text style={styles.titulo}>Controle de Orçamento</Text>
      <Text style={styles.subtitulo}>Planejamento financeiro mensal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1e3a5f',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: { fontSize: 40, marginBottom: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  subtitulo: { fontSize: 13, color: '#93c5fd', marginTop: 4 },
});