import React from 'react';
import {
  Pressable,
  RadioButton,
  RadioButtonGroup,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const PmBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState(undefined);

  return (
    <RadioButtonGroup
      onValueChange={newRadioButtonGroupValue => {
        const radioButtonGroupValue = newRadioButtonGroupValue;
        try {
          setValue(value);
        } catch (err) {
          console.error(err);
        }
      }}
      value={radioButtonGroupValue}
    >
      {/* Payment methods */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 20, padding: 20 },
          dimensions.width
        )}
      >
        {/* Payoneer */}
        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Menu Icon */}
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={imageSource(Images['Payoneer'])}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { height: 22, width: 32 }
                ),
                dimensions.width
              )}
            />
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              {/* title */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Inter_500Medium', fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {'Payoneer'}
              </Text>
              {/* ~ value */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      fontFamily: 'Inter_300Light',
                      fontSize: 12,
                      marginTop: 4,
                      opacity: 0.6,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Mastercard **** 7890'}
              </Text>
            </View>
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={palettes.App['Custom Color_3']}
              unselectedColor={theme.colors.border.brand}
              value={1}
            />
          </View>
        </Pressable>
        {/* Transfer wise */}
        <Pressable
          style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Menu Icon */}
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={imageSource(Images['TransferWise'])}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { height: 22, width: 32 }
                ),
                dimensions.width
              )}
            />
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              {/* title */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Inter_500Medium', fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {'Transfer wise'}
              </Text>
              {/* ~ value */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      fontFamily: 'Inter_300Light',
                      fontSize: 12,
                      marginTop: 4,
                      opacity: 0.6,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Visa card **** 7890'}
              </Text>
            </View>
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={palettes.App['Custom Color_3']}
              unselectedColor={theme.colors.border.brand}
              value={2}
            />
          </View>
        </Pressable>
        {/* Cash */}
        <Pressable
          style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Menu Icon */}
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={imageSource(Images['Cash'])}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { height: 22, width: 32 }
                ),
                dimensions.width
              )}
            />
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              {/* title */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Inter_500Medium', fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {'Cash'}
              </Text>
            </View>
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={palettes.App['Custom Color_3']}
              unselectedColor={theme.colors.border.brand}
              value={3}
            />
          </View>
        </Pressable>
      </View>
    </RadioButtonGroup>
  );
};

export default withTheme(PmBlock);
