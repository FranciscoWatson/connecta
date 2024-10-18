import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, RouteProp } from '@react-navigation/native';
import Routes, { RootStackParamList } from '../navigation/Routes.tsx';

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

      <Image source={post.postImage} style={styles.postImage} />

      <View style={styles.detailsContainer}>
        <Text style={[styles.postText, { color: colors.text }]}>
          {post.userName}: {post.postText}
        </Text>
        <Text style={[styles.postDate, { color: colors.secondaryText }]}>
          {post.date} · {post.userLocation}
        </Text>
      </View>
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
  postImage: { width: '100%', height: 300 },
  detailsContainer: { padding: 20 },
  postText: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  postDate: { fontSize: 12 },
});

export default PostFullScreen;
