import React from 'react';
import {
  Pressable,
  RadioButtonGroup,
  RadioButtonRow,
  withTheme,
} from '@draftbit/ui';
import { Image, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const LangBlock = props => {
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
      <Pressable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* Flag Image */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={imageSource(Images['Flag'])}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 22, width: 32 }
              ),
              dimensions.width
            )}
          />
          {/* Language */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            <RadioButtonRow
              unselectedColor={theme.colors.branding.primary}
              color={palettes.App['Custom Color_3']}
              label={'English'}
              style={StyleSheet.applyWidth(
                { fontFamily: 'Inter_400Regular', fontSize: 16, marginLeft: 0 },
                dimensions.width
              )}
            />
          </View>
        </View>
      </Pressable>
    </RadioButtonGroup>
  );
};

export default withTheme(LangBlock);
