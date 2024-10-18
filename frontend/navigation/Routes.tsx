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
  PostFullScreen: undefined;
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

export default Routes;
