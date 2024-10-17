import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

// Ejemplo de publicaciones
const posts = [
  {
    id: '1',
    userName: 'John Doe',
    userLocation: 'Buenos Aires',
    date: 'September 20, 2024',
    postText: 'On a new project',
    liked: false,
    likeCount: 26,
  },
  {
    id: '2',
    userName: 'David Smith',
    userLocation: 'Madrid',
    date: 'September 20, 2024',
    postText: 'Enjoying the sunny day',
    liked: true,
    likeCount: 50,
  },
];

const HomeScreen: React.FC = () => {
  const { colors } = useTheme();

  const renderPost = ({ item }: { item: any }) => (
    <View style={[styles.postContainer, { backgroundColor: colors.background }]}>
      <View style={styles.userInfo}>
        <Image source={item.userImage} style={styles.userImage} />
        <View style={styles.userDetails}>
          <Text style={[styles.userName, { color: colors.text }]}>{item.userName}</Text>
          <Text style={[styles.userLocation, { color: colors.secondaryText }]}>
            {item.date} · {item.userLocation}
          </Text>
        </View>
      </View>

      <Image source={item.postImage} style={styles.postImage} />

      <View style={styles.actionsContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity>
            <Image style={styles.icon} />
          </TouchableOpacity>
          <Text style={[styles.likeCount, { color: colors.text }]}>{item.likeCount}</Text>
          <TouchableOpacity>
            <Image style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.postText, { color: colors.text }]}>
          {item.userName}: {item.postText}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primaryColor }]}>
        <Image style={styles.headerIcon} />
        <Text style={[styles.headerTitle, { color: colors.textOnPrimary }]}>Home</Text>
        <Image style={styles.headerIcon} />
      </View>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
      <TouchableOpacity style={[styles.floatingButton, { backgroundColor: colors.primaryColor }]}>
        <Image style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  headerIcon: { width: 30, height: 30 },

  flatList: { paddingHorizontal: 10 },

  postContainer: { marginBottom: 20, borderRadius: 10, overflow: 'hidden' },
  userInfo: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  userImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userDetails: {},
  userName: { fontSize: 16, fontWeight: 'bold' },
  userLocation: { fontSize: 12 },

  postImage: { width: '100%', height: 200 },
  
  actionsContainer: { padding: 10 },
  actionButtons: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: 24, height: 24, marginRight: 5 },
  likeCount: { marginLeft: 5, marginRight: 15 },
  postText: { marginTop: 10 },

  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addIcon: { width: 30, height: 30 },
});

export default HomeScreen;
