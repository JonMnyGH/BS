import React from 'react';
import { TextInput, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const FdBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <View style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}>
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Inter_400Regular',
            opacity: 0.7,
          }),
          dimensions.width
        )}
      >
        {'Name'}
      </Text>
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={true}
        changeTextDelay={500}
        onChangeText={newTextInputValue => {
          const textInputValue = newTextInputValue;
          try {
            setValue(value);
          } catch (err) {
            console.error(err);
          }
        }}
        webShowOutline={true}
        {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
        placeholder={'Enter your name'}
        placeholderTextColor={theme.colors.text.light}
        selectionColor={theme.colors.branding.primary}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextInputStyles(theme)['Text Input'].style,
            {
              fontFamily: 'Inter_400Regular',
              height: 48,
              marginTop: 10,
              paddingLeft: 16,
              paddingRight: 16,
            }
          ),
          dimensions.width
        )}
        value={textInputValue}
      />
    </View>
  );
};

export default withTheme(FdBlock);
