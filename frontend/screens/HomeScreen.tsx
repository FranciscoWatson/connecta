import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ConnectaHeaderIcon from '../assets/svg/ConnectaHeaderIcon.tsx';
import Post from '../components/Post.tsx';
import SearchIcon from '../assets/svg/SearchIcon.tsx';
import HomeIcon from '../assets/svg/HomeIcon.tsx';
import AddPostIcon from '../assets/svg/AddPostIcon.tsx';

const posts = [
  {
    id: '1',
    userName: 'John Doe',
    userLocation: 'Buenos Aires',
    date: 'September 20, 2024',
    postText: 'On a new project',
    postImages: [
      require('../assets/images/home-post.jpg'),
      require('../assets/images/home-post.jpg'),
      require('../assets/images/home-post.jpg'),
      require('../assets/images/home-post.jpg'),
      require('../assets/images/home-post.jpg'),
      require('../assets/images/home-post.jpg'),  // Otra imagen del post
    ],
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
    postImages: [
      require('../assets/images/home-post.jpg'),
      require('../assets/images/home-post.jpg'),
    ],
    userImage: require('../assets/images/profile-image.png'),
    liked: true,
    likeCount: 50,
  },
];


const HomeScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderPost = ({ item }: { item: any }) => (
    <Post post={item} />
  );

  const renderSeparator = () => (
    <View style={[styles.separator, { backgroundColor: colors.separator }]} />
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primaryColor }]}>
        <View style={styles.headerLeft}>
            <ConnectaHeaderIcon fill={colors.background} width={30} height={30} />
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <SearchIcon fill={colors.background} width={30} height={30} style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/profile-image.png')} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
      />

      <TouchableOpacity style={[styles.floatingButton, { backgroundColor: colors.primaryColor }]}>
        <AddPostIcon style={styles.addIcon} fill={colors.background} />
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 30, // Separación entre los iconos
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 30, // Espaciado entre la imagen de perfil y los demás iconos
  },
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

  separator: {
    height: 1,
    width: '100%',
    marginVertical: 10,
  },
});

export default HomeScreen;
