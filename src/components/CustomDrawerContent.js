import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constants/Colors';
import Icons from '../constants/Icons';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  withRepeat,
  AnimatedComponent,
  FadeIn,
  SlideInDown,
  SlideInUp,
  FadeInRight,
  BounceInRight,
  FlipInYRight,
} from 'react-native-reanimated';

const CustomDrawerContent = ({navigation}) => {
  const rotation_communications = useSharedValue(0);
  const rotation_text = useSharedValue(0);
  const rotation_email = useSharedValue(0);
  const [checkRotation, setcheckRotation] = useState(false);
  const [checkRotation_text, setcheckRotation_text] = useState(false);
  const [checkRotation_email, setcheckRotation_email] = useState(false);

   function signOut(){
navigation.navigate('Login')
   }  
  const rotation_value_communication = () => {
    //communication roation checks angle and returns opposite angle
    let rotate_degree;
    if (rotation_communications.value === 0) {
      rotate_degree = 90;
    } else {
      rotate_degree = 0;
    }
    return rotate_degree;
  };
  const rotation_value_text = () => {
    //text rotation checks angle and returns opposite angle
    let rotate_degree;
    if (rotation_text.value === 0) {
      rotate_degree = 90;
    } else {
      rotate_degree = 0;
    }
    return rotate_degree;
  };
  const rotation_value_email = () => {
    //email rotation checks angle and returns opposite angle
    let rotate_degree;
    if (rotation_email.value === 0) {
      rotate_degree = 90;
    } else {
      rotate_degree = 0;
    }
    return rotate_degree;
  };

  const animatedStyles_communications = useAnimatedStyle(() => {
    //rotates the animated communication arrow
    return {
      transform: [{rotateZ: `${rotation_communications.value}deg`}],
    };
  });
  const animatedStyles_text = useAnimatedStyle(() => {
    //rotates the animated text tab arrow
    return {
      transform: [{rotateZ: `${rotation_text.value}deg`}],
    };
  });
  const animatedStyles_email = useAnimatedStyle(() => {
    //rotates the animated email tab arrow
    return {
      transform: [{rotateZ: `${rotation_email.value}deg`}],
    };
  });

  return (
    <ScrollView contentContainerStyle={styles.app}>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Dashboard')
        }}
        style={styles.touchable}
        underlayColor={Colors.orange}>
        <Text style={styles.touchable_text}>Dashboard</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          // Alert.alert('Touchable Highlight pressed.');
          navigation.navigate('MyWorkSpace')
        }}
        style={styles.touchable}
        underlayColor={Colors.orange}>
        <Text style={styles.touchable_text}>My WorkDesk</Text>
      </TouchableHighlight>
      <Pressable
        onPress={() => {
          rotation_communications.value = withTiming(
            rotation_value_communication(),
          );

          setcheckRotation(!checkRotation);
        }}
        style={[
          styles.touchable,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <Text style={styles.touchable_text}>Communications</Text>
        <Animated.View
          style={[{marginRight: 10}, animatedStyles_communications]}>
          <View>{Icons.arrow}</View>
        </Animated.View>
      </Pressable>
      {checkRotation ? (
        <Animated.View entering={FadeInRight}>
          <Pressable
            onPress={() => {
              rotation_text.value = withTiming(rotation_value_text());

              setcheckRotation_text(!checkRotation_text);
            }}
            style={[
              styles.touchable,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}
            underlayColor={Colors.orange}>
            <Text style={styles.touchable_text}>Text</Text>
            <Animated.View style={[{marginRight: 10}, animatedStyles_text]}>
              <View>{Icons.arrow}</View>
            </Animated.View>
          </Pressable>
          {/* text menu */}
          {checkRotation_text ? (
            <Animated.View entering={FlipInYRight}>
              <TouchableHighlight
                onPress={() => {
                 navigation.navigate("ComposeText")
                }}
                style={[
                  styles.touchable,
                  styles.subsub_menu_button,
                ]}
                underlayColor={Colors.orange}>
                <Text style={[styles.touchable_text, styles.subsub_menu]}>
                  Compose Text
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("InboxText")
                }}
                style={[
                  styles.touchable,
                  styles.subsub_menu_button,
                ]}
                underlayColor={Colors.orange}>
                <Text style={[styles.touchable_text, styles.subsub_menu]}>
                  Text Inbox
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("SentText")
                }}
                style={[
                  styles.touchable,
                  styles.subsub_menu_button,
                ]}
                underlayColor={Colors.orange}>
                <Text style={[styles.touchable_text, styles.subsub_menu]}>
                  Sent Text messeges
                </Text>
              </TouchableHighlight>
            </Animated.View>
          ) : (
            <View></View>
          )}
          <Pressable
            onPress={() => {
              rotation_email.value = withTiming(rotation_value_email());

              setcheckRotation_email(!checkRotation_email);
            }}
            style={[
              styles.touchable,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}
            underlayColor={Colors.orange}>
            <Text style={styles.touchable_text}>Email</Text>
            <Animated.View style={[{marginRight: 10}, animatedStyles_email]}>
              <View>{Icons.arrow}</View>
            </Animated.View>
          </Pressable>
          {/* email menu */}
          {checkRotation_email ? (
            <Animated.View entering={FlipInYRight}>
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("ComposeEmail")
                }}
                style={[
                  styles.touchable,
                  styles.subsub_menu_button,
                ]}
                underlayColor={Colors.orange}>
                <Text style={[styles.touchable_text, styles.subsub_menu]}>
                  Compose Email
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("EmailInbox")
                }}
                style={[
                  styles.touchable,
                  styles.subsub_menu_button,
                ]}
                underlayColor={Colors.orange}>
                <Text style={[styles.touchable_text, styles.subsub_menu]}>
                  Email Inbox
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("SentEmails")
                }}
                style={[
                  styles.touchable,
                styles.subsub_menu_button,
                ]}
                underlayColor={Colors.orange}>
                <Text style={[styles.touchable_text, styles.subsub_menu]}>
                  Sent Emails
                </Text>
              </TouchableHighlight>
            </Animated.View>
          ) : (
            <View></View>
          )}
        </Animated.View>
      ) : (
        <View></View>
      )}

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 40,
          alignSelf: 'center',
          width: 120,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.orange,
          flexDirection: 'row',
          borderRadius: 5,
        }} onPress={signOut}>
        {Icons.signOut}
        <Text style={[styles.touchable_text, {marginLeft: 0}]}>SignOut</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.blue,
    flexWrap: 'wrap',
  },
  touchable: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor:Colors.orange,
  },
  touchable_text: {
    color: Colors.white,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subsub_menu: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    marginTop: 0,
    marginLeft: 30,
    
  },
  subsub_menu_button:
  {
    backgroundColor:Colors.blue,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});
