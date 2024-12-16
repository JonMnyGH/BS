import React from 'react';
import { Pressable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const OrdersBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      {/* Food Items */}
      <ExampleDataApi.FetchUsersGET count={10}>
        {({ loading, error, data, refetchUsers }) => {
          const foodItemsData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <FlashList
              data={foodItemsData}
              estimatedItemSize={50}
              horizontal={false}
              inverted={false}
              keyExtractor={(flashListData, index) =>
                flashListData?.id ??
                flashListData?.uuid ??
                index?.toString() ??
                JSON.stringify(flashListData)
              }
              listKey={'UxcdPagF'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const flashListData = item;
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
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'].style,
                            { height: 70, width: 88 }
                          ),
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              { fontFamily: 'Inter_500Medium', fontSize: 16 }
                            ),
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              {
                                color: theme.colors.text.light,
                                fontFamily: 'Inter_400Regular',
                                fontSize: 13,
                                marginTop: 4,
                              }
                            ),
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              {
                                color: palettes.App['Custom Color_4'],
                                fontFamily: 'Inter_600SemiBold',
                                marginTop: 6,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'$4.80'}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              {...GlobalStyles.FlashListStyles(theme)['FlashList'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.FlashListStyles(theme)['FlashList'].style,
                dimensions.width,
                ['width', 'height', 'flexGrow']
              )}
              contentContainerStyle={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.FlashListStyles(theme)['FlashList'].style,
                  { flex: 0 }
                ),
                dimensions.width
              )}
            />
          );
        }}
      </ExampleDataApi.FetchUsersGET>
    </View>
  );
};

export default withTheme(OrdersBlock);
