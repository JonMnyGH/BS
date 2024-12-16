import React from 'react';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const HeaderBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['screen header view'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ViewStyles(theme)['screen header view'].style,
          { marginRight: 48 }
        ),
        dimensions.width
      )}
    >
      {/* Back */}
      <Pressable
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          {...GlobalStyles.ViewStyles(theme)['header action'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['header action'].style,
            dimensions.width
          )}
        >
          <Icon name={'Feather/chevron-left'} size={28} />
        </View>
      </Pressable>
      {/* Screen heading */}
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            flex: 1,
            fontFamily: 'Inter_500Medium',
            fontSize: 19,
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Edit profile'}
      </Text>
    </View>
  );
};

export default withTheme(HeaderBlock);
