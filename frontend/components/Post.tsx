import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigation/Routes.tsx';

interface PostProps {
  post: any;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.postContainer, { backgroundColor: colors.background }]}>
      <View style={styles.userInfo}>
        <Image source={post.userImage} style={styles.userImage} />
        <View style={styles.userDetails}>
          <Text style={[styles.userName, { color: colors.text }]}>{post.userName}</Text>
          <Text style={[styles.userLocation, { color: colors.secondaryText }]}>
            {post.date} · {post.userLocation}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.PostFullScreen, { post })}>
        <Image source={post.postImage} style={styles.postImage} />
      </TouchableOpacity>

      <View style={styles.actionsContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity>
            <Image source={require('../assets/images/icon-favorite.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={[styles.likeCount, { color: colors.text }]}>{post.likeCount}</Text>
          <TouchableOpacity>
            <Image source={require('../assets/images/icon-comments.png')} style={styles.icon} />
          </TouchableOpacity>
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
});

export default Post;
