import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const notifications = [
  {
    id: '1',
    title: 'Đơn hàng thành công',
    message: 'Đơn hàng #12345 đã được xác nhận.',
    time: '5 phút trước',
  },
  {
    id: '2',
    title: 'Khuyến mãi mới',
    message: 'Giảm giá 20% cho tất cả sản phẩm.',
    time: '1 giờ trước',
  },
  {
    id: '3',
    title: 'Cập nhật hệ thống',
    message: 'Ứng dụng sẽ bảo trì lúc 23:00.',
    time: 'Hôm nay',
  },
  {
    id: '4',
    title: 'Thanh toán thành công',
    message: 'Bạn đã thanh toán 500.000đ.',
    time: 'Hôm qua',
  },
  {
    id: '5',
    title: 'Tin nhắn mới',
    message: 'Bạn nhận được một tin nhắn mới.',
    time: '2 ngày trước',
  },
   {
    id: '6',
    title: 'Tin nhắn mới1',
    message: 'Bạn nhận được một tin nhắn mới.',
    time: '2 ngày trước',
  },
   {
    id: '7',
    title: 'Tin nhắn mới2',
    message: 'Bạn nhận được một tin nhắn mới.',
    time: '2 ngày trước',
  },
   {
    id: '8',
    title: 'Tin nhắn mới3',
    message: 'Bạn nhận được một tin nhắn mới.',
    time: '2 ngày trước',
  },
];

const NotificationItem = ({ item }:any) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
};

const NotificationList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem item={item} />
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 4,
    color: '#666',
  },
  time: {
    marginTop: 8,
    fontSize: 12,
    color: '#999',
  },
  separator: {
    height: 12,
  },
});

export default NotificationList;