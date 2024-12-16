import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const PromoCodeMdlBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <Modal
      supportedOrientations={['portrait', 'landscape']}
      animationType={'slide'}
      transparent={true}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.text.strong,
            bottom: 0,
            flex: 1,
            left: 0,
            opacity: 0.25,
            position: 'absolute',
            right: 0,
            top: 0,
          },
          dimensions.width
        )}
      />
      <KeyboardAvoidingView
        behavior={'padding'}
        enabled={true}
        keyboardVerticalOffset={0}
        style={StyleSheet.applyWidth(
          { bottom: 0, left: 0, position: 'absolute', right: 0 },
          dimensions.width
        )}
      >
        {/* Promo code pop up */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color'],
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              bottom: 0,
              flex: 1,
              left: 0,
              padding: 20,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 40,
              },
              dimensions.width
            )}
          >
            {/* heading */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    flex: 1,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 18,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'Promo code'}
            </Text>
          </View>
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
            placeholder={'Enter promo code'}
            placeholderTextColor={theme.colors.text.light}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  borderRadius: 12,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  paddingLeft: 16,
                  paddingRight: 16,
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* Actions */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingBottom: 20,
              },
              dimensions.width
            )}
          >
            {/* Apply */}
            <Button
              accessible={true}
              iconPosition={'left'}
              {...GlobalStyles.ButtonStyles(theme)['Action button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Action button'].style,
                  {
                    backgroundColor: palettes.App['Custom Color_5'],
                    marginTop: 20,
                  }
                ),
                dimensions.width
              )}
              title={'Apply'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default withTheme(PromoCodeMdlBlock);
