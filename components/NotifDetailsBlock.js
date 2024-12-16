import React from 'react';
import { withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const NotifDetailsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: palettes.App['Custom Color'],
          flex: 1,
          padding: 20,
          paddingTop: 0,
        },
        dimensions.width
      )}
    >
      <Image
        resizeMode={'cover'}
        {...GlobalStyles.ImageStyles(theme)['Image'].props}
        source={imageSource(Images['NotifBanner'])}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
            borderRadius: 9,
            height: 250,
            width: '100%',
          }),
          dimensions.width
        )}
      />
      {/* ~ title */}
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Inter_500Medium',
            fontSize: 28,
            marginTop: 20,
          }),
          dimensions.width
        )}
      >
        {null}
      </Text>
      {/* ~ details */}
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            color: palettes.App['Custom Color_6'],
            fontFamily: 'Inter_300Light',
            fontSize: 18,
            lineHeight: 25,
            marginTop: 8,
            textAlign: 'left',
          }),
          dimensions.width
        )}
      >
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sit eu morbi velit praesent. Fermentum mauris fringilla vitae feugiat vel sit blandit quam. In mi sodales nisl eleifend duis porttitor. Convallis euismod facilisis neque eget praesent diam in nulla. Faucibus interdum vulputate rhoncus mauris id facilisis est nunc habitant. Velit posuere facilisi tortor sed. Lectus a velit sed pretium egestas integer lacus, mi. Risus eget venenatis at amet sed. Fames rhoncus purus ornare nulla. Lorem dolor eget sagittis mattis eget nam. Nulla nisi egestas nisl nibh eleifend luctus.'
        }
      </Text>
    </View>
  );
};

export default withTheme(NotifDetailsBlock);
