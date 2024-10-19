import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigation/Routes.tsx';

const { width: deviceWidth } = Dimensions.get('window');

interface PostProps {
  post: any;
  isFullScreen?: boolean;
}

const Post: React.FC<PostProps> = ({ post, isFullScreen = false }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.postContainer, { backgroundColor: colors.background }]}>
      {/* Barra superior con información del usuario */}
      <View style={styles.userInfo}>
        <Image source={post.userImage} style={styles.userImage} />
        <View style={styles.userDetails}>
          <Text style={[styles.userName, { color: colors.text }]}>{post.userName}</Text>
          <Text style={[styles.userLocation, { color: colors.secondaryText }]}>
            {post.date} · {post.userLocation}
          </Text>
        </View>
      </View>

      {/* Imagen del post */}
      {isFullScreen ? (
        <Image source={post.postImage} style={[styles.postImage]} />
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.PostFullScreen, { post })}>
          <Image source={post.postImage} style={styles.postImage} />
        </TouchableOpacity>
      )}

      {/* Botones de acción */}
      <View style={styles.actionsContainer}>
        <View style={styles.actionButtons}>
          <View style={styles.leftActions}>
            <TouchableOpacity>
              <Image source={require('../assets/images/icon-favorite.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={[styles.likeCount, { color: colors.text }]}>{post.likeCount}</Text>
            <TouchableOpacity>
              <Image source={require('../assets/images/icon-comments.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image source={require('../assets/images/bookmark.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.postText, { color: colors.text }]}>
          {post.userName}: {post.postText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: deviceWidth,
  },
  userImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userDetails: {
    flex: 1,
  },
  userName: { fontSize: 16, fontWeight: 'bold' },
  userLocation: { fontSize: 12, color: '#888' },
  postImage: {
    width: deviceWidth, // Centrado y ocupando todo el ancho
    height: 300,
    resizeMode: 'cover',
    marginHorizontal: 0, // Eliminamos cualquier margen
  },
  actionsContainer: { paddingHorizontal: 10, paddingVertical: 5 },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { width: 24, height: 24, marginHorizontal: 5 },
  likeCount: { marginLeft: 5 },
  postText: { marginTop: 10 },
});

export default Post;
