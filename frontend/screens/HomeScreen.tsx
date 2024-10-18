import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Routes, { RootStackParamList } from '../navigation/Routes.tsx';

// Example posts data
const posts = [
  {
    id: '1',
    userName: 'John Doe',
    userLocation: 'Buenos Aires',
    date: 'September 20, 2024',
    postText: 'On a new project',
    postImage: require('../assets/images/home-post.jpg'),
    userImage: require('../assets/images/profile-image.png'),
    liked: false,
    likeCount: 26,
  },
  {
    id: '2',
    userName: 'David Smith',
    userLocation: 'Madrid',
    date: 'September 20, 2024',
    postText: 'Enjoying the sunny day',
    postImage: require('../assets/images/home-post.jpg'),
    userImage: require('../assets/images/profile-image.png'),
    liked: true,
    likeCount: 50,
  },
];

const HomeScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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

      <TouchableOpacity onPress={() => navigation.navigate(Routes.PostFullScreen, { post: item })}>
        <Image source={item.postImage} style={styles.postImage} />
      </TouchableOpacity>

      <View style={styles.actionsContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity>
            <Image source={require('../assets/images/icon-favorite.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={[styles.likeCount, { color: colors.text }]}>{item.likeCount}</Text>
          <TouchableOpacity>
            <Image source={require('../assets/images/icon-comments.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/bookmark.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.postText, { color: colors.text }]}>{item.userName}: {item.postText}</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primaryColor }]}>
        <TouchableOpacity>
          <Image source={require('../assets/images/icon-search.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textOnPrimary }]}>Home</Text>
        <TouchableOpacity>
          <Image source={require('../assets/images/profile-image.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
      <TouchableOpacity style={[styles.floatingButton, { backgroundColor: colors.primaryColor }]}>
        <Image source={require('../assets/images/icon-add-post.png')} style={styles.addIcon} />
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
    alignItems: 'center',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  headerIcon: { width: 24, height: 24 },
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
  icon: { width: 24, height: 24, marginHorizontal: 5 },
  likeCount: { marginLeft: 5 },
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
