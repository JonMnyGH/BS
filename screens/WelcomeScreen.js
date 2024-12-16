import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const WelcomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      style={StyleSheet.applyWidth(
        { alignContent: 'space-around', alignItems: 'stretch', paddingTop: 5 },
        dimensions.width
      )}
    >
      {/* Content View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginBottom: 50,
          },
          dimensions.width
        )}
      >
        <Image
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          resizeMode={'contain'}
          source={imageSource(Images['blondshotlogo'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: [
                { minWidth: Breakpoints.Mobile, value: 500 },
                { minWidth: Breakpoints.Tablet, value: 750 },
                { minWidth: Breakpoints.Laptop, value: 600 },
                { minWidth: Breakpoints.BigScreen, value: 900 },
                { minWidth: Breakpoints.Desktop, value: 750 },
              ],
              position: { minWidth: Breakpoints.Tablet, value: 'relative' },
              width: [
                { minWidth: Breakpoints.Tablet, value: 490 },
                { minWidth: Breakpoints.Laptop, value: 392 },
                { minWidth: Breakpoints.Desktop, value: 490 },
                { minWidth: Breakpoints.BigScreen, value: 588 },
                { minWidth: Breakpoints.Mobile, value: 327 },
              ],
            }),
            dimensions.width
          )}
        />
      </View>
      {/* Actions View */}
      <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
        {/* Start */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'OrdersScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
              {
                backgroundColor: palettes.App['Custom Color'],
                borderColor: [
                  { minWidth: Breakpoints.Tablet, value: 'rgb(237, 184, 222)' },
                  { minWidth: Breakpoints.Mobile, value: 'rgb(237, 184, 222)' },
                ],
                borderWidth: 1.5,
                color: {
                  minWidth: Breakpoints.Tablet,
                  value: 'rgb(237, 184, 222)',
                },
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 75 },
                ],
              }
            ),
            dimensions.width
          )}
          title={'Start\n'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
