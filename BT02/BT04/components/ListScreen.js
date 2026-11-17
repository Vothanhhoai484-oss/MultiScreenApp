
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const data = [
  {
    id: '1',
    name: 'Áo thun nam',
    price: '150.000đ',
    description: 'Áo thun cotton mềm mại, thoáng mát.'
  },
  {
    id: '2',
    name: 'Áo sơ mi nam',
    price: '250.000đ',
    description: 'Áo sơ mi phong cách lịch lãm.'
  },
  {
    id: '3',
    name: 'Quần jean nữ',
    price: '300.000đ',
    description: 'Quần jean nữ trẻ trung, năng động.'
  },
  {
    id: '4',
    name: 'Áo hoodie',
    price: '350.000đ',
    description: 'Áo hoodie thời trang, giữ ấm tốt.'
  },
  {
    id: '5',
    name: 'Váy nữ',
    price: '280.000đ',
    description: 'Váy nữ thanh lịch, phù hợp đi chơi.'
  },
  {
    id: '6',
    name: 'Quần kaki nam',
    price: '270.000đ',
    description: 'Quần kaki nam đơn giản và hiện đại.'
  },
];

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        DANH SÁCH SẢN PHẨM
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Detail', { item })
            }
          >
            <View style={styles.info}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>
            </View>

            <Text style={styles.detail}>
              Xem chi tiết →
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e293b',
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 14,
    borderRadius: 12,
    elevation: 3,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#334155',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e11d48',
  },
  detail: {
    color: '#2563eb',
    marginTop: 12,
  },
});
