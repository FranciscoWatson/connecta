import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Routes, { RootStackParamList } from '../navigation/Routes.tsx';
import ConnectaHeaderIcon from '../assets/svg/ConnectaHeaderIcon.tsx';
import Post from '../components/Post.tsx';  // Asegúrate de importar el componente Post
import SearchIcon from '../assets/svg/SearchIcon.tsx';
import HomeIcon from '../assets/svg/HomeIcon.tsx';

// Datos de ejemplo
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
    <Post post={item} />  // Utiliza el componente Post
  );

  // Agregamos un separador entre los posts
  const renderSeparator = () => (
    <View style={[styles.separator, { backgroundColor: colors.separator }]} />
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primaryColor }]}>
        <TouchableOpacity>
          <ConnectaHeaderIcon fill={colors.background} width={30} height={30} style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SearchIcon fill={colors.background} width={30} height={30} style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <HomeIcon fill={colors.background} width={30} height={30} style={styles.headerIcon} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image source={require('../assets/images/profile-image.png')} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator} // Agregamos el separador aquí
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
