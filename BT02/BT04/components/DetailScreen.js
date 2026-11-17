
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>👕</Text>

      <Text style={styles.title}>
        CHI TIẾT SẢN PHẨM
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Tên sản phẩm
        </Text>

        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.label}>
          Giá bán
        </Text>

        <Text style={styles.price}>
          {item.price}
        </Text>

        <Text style={styles.label}>
          Mô tả sản phẩm
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.label}>
          Mã sản phẩm
        </Text>

        <Text style={styles.text}>
          SP{item.id}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          QUAY LẠI DANH SÁCH
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 22,
    backgroundColor: '#f1f5f9',
  },
  icon: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 15,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 12,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e11d48',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: '#334155',
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    color: '#334155',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
    marginTop: 22,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
