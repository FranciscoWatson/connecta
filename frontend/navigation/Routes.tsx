export type RootStackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  NewPasswordScreen: undefined;
  PasswordChangedScreen: undefined;
  CodeVerificationScreen: undefined;
  LoginStack: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
  PostFullScreen: { post: PostType }; // Asegúrate de definir PostType
  CommentsScreen: { postId: string };
};

enum Routes {
  SplashScreen = "SplashScreen",
  WelcomeScreen = "WelcomeScreen",
  LoginScreen = "LoginScreen",
  ForgotPasswordScreen = "ForgotPasswordScreen",
  NewPasswordScreen = "NewPasswordScreen",
  PasswordChangedScreen = "PasswordChangedScreen",
  CodeVerificationScreen = 'CodeVerificationScreen',
  LoginStack = 'LoginStack',
  SignUpScreen = 'SignUpScreen',
  HomeScreen= 'HomeScreen',
  PostFullScreen= 'PostFullScreen',
}

// Puedes definir PostType en un archivo separado o en Routes.tsx

interface PostType {
  id: string;
  userName: string;
  userLocation: string;
  date: string;
  postText: string;
  postImage: any; // Ajusta el tipo según corresponda
  userImage: any; // Ajusta el tipo según corresponda
  liked: boolean;
  likeCount: number;
}


export default Routes;
