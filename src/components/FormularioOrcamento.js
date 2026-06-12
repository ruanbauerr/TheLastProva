import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function FormularioOrcamento({ renda, fixos, variaveis, setRenda, setFixos, setVariaveis, onCalcular, onLimpar }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitulo}>📋 Informações Financeiras</Text>

      <Text style={styles.label}>Renda Mensal (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 3000,00"
        placeholderTextColor="#94a3b8"
        keyboardType="numeric"
        value={renda}
        onChangeText={setRenda}
      />

      <Text style={styles.label}>Gastos Fixos (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1200,00"
        placeholderTextColor="#94a3b8"
        keyboardType="numeric"
        value={fixos}
        onChangeText={setFixos}
      />

      <Text style={styles.label}>Gastos Variáveis (R$)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 500,00"
        placeholderTextColor="#94a3b8"
        keyboardType="numeric"
        value={variaveis}
        onChangeText={setVariaveis}
      />

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.btnCalcular} onPress={onCalcular}>
          <Text style={styles.btnTexto}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLimpar} onPress={onLimpar}>
          <Text style={styles.btnTextoLimpar}>Limpar</Text>
        </TouchableOpacity>
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
  label: { fontSize: 13, color: '#64748b', marginBottom: 6, fontWeight: '600' },
  input: {
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: '#1e293b',
    marginBottom: 14,
    backgroundColor: '#f8fafc',
  },
  botoes: { flexDirection: 'row', gap: 10, marginTop: 4 },
  btnCalcular: {
    flex: 1,
    backgroundColor: '#1e3a5f',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  btnTexto: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  btnLimpar: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#1e3a5f',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  btnTextoLimpar: { color: '#1e3a5f', fontWeight: 'bold', fontSize: 15 },
});