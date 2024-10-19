// PostFullScreen.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, RouteProp } from '@react-navigation/native';
import Routes, { RootStackParamList } from '../navigation/Routes.tsx';
import Post from '../components/Post.tsx';  // Importa el componente reutilizable Post

interface PostFullScreenProps {
  route: RouteProp<RootStackParamList, 'PostFullScreen'>;
}

const PostFullScreen: React.FC<PostFullScreenProps> = ({ route }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { post } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primaryColor }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/logo-home.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textOnPrimary }]}>{post.userName}</Text>
      </View>

      {/* Reutilizamos el componente Post */}
      <Post post={post} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backIcon: { width: 30, height: 30 },
  headerTitle: { fontSize: 18, marginLeft: 10, fontWeight: 'bold' },
});

export default PostFullScreen;
