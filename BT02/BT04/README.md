# BÀI TẬP 04 – MULTI SCREEN APP

## 1. Thông tin bài tập

- **Tên bài:** MultiScreenApp
- **Chủ đề:** Ứng dụng cửa hàng quần áo – Fashion Store
- **Công nghệ:** React Native, Expo
- **Điều hướng:** Stack Navigation

## 2. Link ứng dụng Expo

[ DÁN LINK EXPO SNACK CỦA BẠN VÀO ĐÂY ]

## 3. Các chức năng chính

- HomeScreen: Màn hình trang chủ, giới thiệu cửa hàng quần áo.
- ListScreen: Hiển thị danh sách sản phẩm quần áo.
- DetailScreen: Hiển thị thông tin chi tiết sản phẩm được chọn.
- Sử dụng Stack Navigation để chuyển đổi giữa các màn hình.
- Có nút quay lại danh sách từ màn hình chi tiết.

## 4. Cấu trúc chương trình

```text
Bt04/
├── App.js
├── components/
│   ├── HomeScreen.js
│   ├── ListScreen.js
│   └── DetailScreen.js
├── images/
│   ├── HomeScreen.png
│   ├── ListScreen.png
│   └── DetailScreen.png
└── README.md
```

## 5. Code chương trình

### App.js
Sử dụng NavigationContainer và createNativeStackNavigator để quản lý điều hướng giữa ba màn hình.

### HomeScreen.js
Thiết kế giao diện trang chủ và nút chuyển đến danh sách sản phẩm.

### ListScreen.js
Sử dụng FlatList để hiển thị danh sách sản phẩm. Khi chọn một sản phẩm, ứng dụng chuyển sang DetailScreen và truyền thông tin sản phẩm.

### DetailScreen.js
Nhận dữ liệu từ route.params, hiển thị thông tin sản phẩm và sử dụng navigation.goBack() để quay lại.

## 6. Hình ảnh kết quả thực hiện

### Màn hình HomeScreen
![HomeScreen](images/HomeScreen.png)

### Màn hình ListScreen
![ListScreen](images/ListScreen.png)

### Màn hình DetailScreen
![DetailScreen](images/DetailScreen.png)

## 7. Kết luận

Đã hoàn thành ứng dụng MultiScreenApp với ba màn hình HomeScreen, ListScreen và DetailScreen. Ứng dụng sử dụng Stack Navigation để chuyển màn hình, truyền dữ liệu sản phẩm và quay lại màn hình trước đó.