import React from 'react';
import { Pressable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ItemBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: theme.colors.border.brand,
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 15,
            paddingTop: 15,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={imageSource(Images['Burger'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 70,
              width: 88,
            }),
            dimensions.width
          )}
        />
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingLeft: 16 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {'Hamburger'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors.text.light,
                fontFamily: 'Inter_400Regular',
                fontSize: 13,
                marginTop: 4,
              }),
              dimensions.width
            )}
          >
            {'1 big tasty, 1 large french fries, 1 large drink'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.App['Custom Color_4'],
                fontFamily: 'Inter_600SemiBold',
                marginTop: 6,
              }),
              dimensions.width
            )}
          >
            {'$4.80'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default withTheme(ItemBlock);
