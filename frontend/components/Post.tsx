// Post.tsx

import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigation/Routes.tsx';

const { width: deviceWidth } = Dimensions.get('window');

interface PostProps {
  post: any;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  
  // Estado para rastrear la imagen visible actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Referencia para detectar cuando cambia la imagen visible
  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50, // Cambiar cuando el 50% de la imagen es visible
  });

  // Manejar el cambio de vista visible en el FlatList
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentImageIndex(viewableItems[0].index);
    }
  });

  const handleNavigateToPostFullScreen = () => {
    navigation.navigate(Routes.PostFullScreen, { post });
  };

  const handleViewComments = () => {
    // Navegación a la pantalla de comentarios
  };

  // Renderizar cada imagen del post
  const renderPostImage = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={handleNavigateToPostFullScreen}>
      <Image source={item} style={styles.postImage} />
    </TouchableOpacity>
  );

  // Función para obtener los indicadores de imagen
  const getImageIndicators = () => {
    const totalImages = post.postImages.length;
    const maxIndicators = 3;

    let indicators = [];

    if (totalImages <= maxIndicators) {
      // Si el total de imágenes es menor o igual al máximo, mostramos todos los indicadores
      for (let i = 0; i < totalImages; i++) {
        indicators.push(
          <View
            key={i}
            style={[
              styles.imageIndicator,
              currentImageIndex === i
                ? { backgroundColor: colors.primaryColor }
                : { backgroundColor: colors.secondaryText },
            ]}
          />
        );
      }
    } else {
      // Si hay más de 3 imágenes, ajustamos los indicadores dinámicamente
      let indicatorPosition = 1; // Por defecto, el punto del medio está activo

      if (currentImageIndex === 0) {
        // Primera imagen
        indicatorPosition = 0;
      } else if (currentImageIndex === totalImages - 1) {
        // Última imagen
        indicatorPosition = 2;
      } else {
        // Cualquier otra imagen
        indicatorPosition = 1;
      }

      for (let i = 0; i < maxIndicators; i++) {
        indicators.push(
          <View
            key={i}
            style={[
              styles.imageIndicator,
              i === indicatorPosition
                ? { backgroundColor: colors.primaryColor }
                : { backgroundColor: colors.secondaryText },
            ]}
          />
        );
      }
    }

    return indicators;
  };

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

      {/* Lista horizontal de imágenes del post */}
      <FlatList
        data={post.postImages}  // Array de imágenes del post
        renderItem={renderPostImage}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}  // Ocultar el indicador de scroll horizontal
        pagingEnabled  // Habilitar el deslizamiento por "página"
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
      />

      {/* Botones de acción e indicadores */}
      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>
          {/* Contenedor de corazón y comentarios */}
          <TouchableOpacity>
            <Image source={require('../assets/images/icon-favorite.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={[styles.likeCount, { color: colors.text }]}>{post.likeCount}</Text>
          <TouchableOpacity onPress={handleViewComments}>
            <Image source={require('../assets/images/icon-comments.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Indicadores de imagen */}
        <View style={styles.imageIndicatorContainer}>
          {getImageIndicators()}
        </View>

        <View style={styles.rightAction}>
          <TouchableOpacity>
            <Image source={require('../assets/images/bookmark.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={[styles.postText, { color: colors.text }]}>
        <Text style={styles.postUserName}>{post.userName}</Text>: {post.postText}
      </Text>
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
    width: deviceWidth,
    height: 300,
    resizeMode: 'cover',
    marginHorizontal: 0,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imageIndicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',  // Centrar los indicadores horizontalmente
    alignItems: 'center',
  },
  rightAction: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: { width: 24, height: 24, marginHorizontal: 5 },
  likeCount: { marginLeft: 5 },
  postText: { marginTop: 10 },
  postUserName: {
    fontWeight: 'bold',
  },
  imageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});

export default Post;
