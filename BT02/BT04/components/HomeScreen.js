
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>👕</Text>

      <Text style={styles.title}>
        FASHION STORE
      </Text>

      <Text style={styles.subtitle}>
        Cửa hàng thời trang nam nữ
      </Text>

      <Text style={styles.description}>
        Chào mừng bạn đến với cửa hàng quần áo của chúng tôi!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>
          KHÁM PHÁ SẢN PHẨM
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f8fafc',
  },
  icon: {
    fontSize: 75,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 17,
    color: '#64748b',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 25,
    color: '#475569',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
