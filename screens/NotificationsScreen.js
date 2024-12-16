import React from 'react';
import {
  IconButton,
  Pressable,
  ScreenContainer,
  SimpleStyleFlashList,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
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

const NotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App['Custom Color'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        {...GlobalStyles.ViewStyles(theme)['screen header view'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['screen header view'].style,
            {
              height: [
                { minWidth: Breakpoints.Tablet, value: 65 },
                { minWidth: Breakpoints.BigScreen, value: 90 },
                { minWidth: Breakpoints.Laptop, value: 75 },
                { minWidth: Breakpoints.Desktop, value: 85 },
              ],
              marginRight: 48,
            }
          ),
          dimensions.width
        )}
      >
        <IconButton
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          color={theme.colors.text.strong}
          icon={'AntDesign/left'}
          size={28}
          style={StyleSheet.applyWidth(
            {
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            },
            dimensions.width
          )}
        />
        {/* Screen heading */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              flex: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 19 },
                { minWidth: Breakpoints.Tablet, value: 22 },
                { minWidth: Breakpoints.BigScreen, value: 30 },
                { minWidth: Breakpoints.Desktop, value: 28 },
                { minWidth: Breakpoints.Laptop, value: 25 },
              ],
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Notifications'}
        </Text>
      </View>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.App['Custom Color'],
            flexDirection: [
              { minWidth: Breakpoints.Laptop, value: 'row' },
              { minWidth: Breakpoints.BigScreen, value: 'row' },
            ],
            marginBottom: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: [
                {
                  minWidth: Breakpoints.Laptop,
                  value: theme.colors.text.light,
                },
                {
                  minWidth: Breakpoints.BigScreen,
                  value: theme.colors.text.light,
                },
              ],
              borderRightWidth: [
                { minWidth: Breakpoints.BigScreen, value: 1 },
                { minWidth: Breakpoints.Laptop, value: 1 },
              ],
              flex: [
                { minWidth: Breakpoints.BigScreen, value: 0.35 },
                { minWidth: Breakpoints.Laptop, value: 0.5 },
              ],
            },
            dimensions.width
          )}
        >
          <ExampleDataApi.FetchNotificationsGET>
            {({ loading, error, data, refetchNotifications }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <SimpleStyleFlashList
                  data={fetchData}
                  estimatedItemSize={50}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(flashListData, index) =>
                    flashListData?.id ??
                    flashListData?.uuid ??
                    index?.toString() ??
                    JSON.stringify(flashListData)
                  }
                  listKey={'XNJ6TBJJ'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const flashListData = item;
                    return (
                      <Pressable
                        onPress={() => {
                          try {
                            navigation.navigate('NotificationDetailsScreen', {
                              Title: flashListData?.Title,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20, marginRight: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              paddingBottom: 12,
                              paddingTop: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Notification Icon */}
                          <Image
                            resizeMode={'cover'}
                            {...GlobalStyles.ImageStyles(theme)['Image'].props}
                            source={imageSource(`${flashListData?.URL}`)}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ImageStyles(theme)['Image'].style,
                                {
                                  height: [
                                    { minWidth: Breakpoints.Mobile, value: 40 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 80,
                                    },
                                    { minWidth: Breakpoints.Laptop, value: 75 },
                                    { minWidth: Breakpoints.Tablet, value: 65 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 90,
                                    },
                                  ],
                                  width: [
                                    { minWidth: Breakpoints.Mobile, value: 40 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 80,
                                    },
                                    { minWidth: Breakpoints.Laptop, value: 75 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 90,
                                    },
                                    { minWidth: Breakpoints.Tablet, value: 65 },
                                  ],
                                }
                              ),
                              dimensions.width
                            )}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, marginLeft: 16 },
                              dimensions.width
                            )}
                          >
                            {/* title */}
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 16,
                                      },
                                      {
                                        minWidth: Breakpoints.BigScreen,
                                        value: 25,
                                      },
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 19,
                                      },
                                      {
                                        minWidth: Breakpoints.Laptop,
                                        value: 21,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 23,
                                      },
                                    ],
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {flashListData?.Title}
                            </Text>
                            {/* details */}
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: palettes.App['Custom Color_6'],
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 13,
                                      },
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 16,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 20,
                                      },
                                      {
                                        minWidth: Breakpoints.BigScreen,
                                        value: 22,
                                      },
                                      {
                                        minWidth: Breakpoints.Laptop,
                                        value: 18,
                                      },
                                    ],
                                    marginTop: 3,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Discount valid for current week'}
                            </Text>
                          </View>
                        </View>
                      </Pressable>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                />
              );
            }}
          </ExampleDataApi.FetchNotificationsGET>
        </View>
        {/* Notif_details */}
        <>
          {!(dimensions.width >= Breakpoints.Laptop) ? null : (
            <View
              {...GlobalStyles.ViewStyles(theme)['Notif_details'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Notif_details'].style,
                  {
                    flex: [
                      { minWidth: Breakpoints.BigScreen, value: 0.75 },
                      { minWidth: Breakpoints.Laptop, value: 0.65 },
                    ],
                    paddingLeft: [
                      { minWidth: Breakpoints.BigScreen, value: 20 },
                      { minWidth: Breakpoints.Laptop, value: 20 },
                    ],
                    paddingRight: [
                      { minWidth: Breakpoints.BigScreen, value: 20 },
                      { minWidth: Breakpoints.Laptop, value: 20 },
                    ],
                  }
                ),
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(Images['NotifBanner'])}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    {
                      borderRadius: 9,
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 250 },
                        { minWidth: Breakpoints.Laptop, value: 400 },
                        { minWidth: Breakpoints.Desktop, value: 500 },
                        { minWidth: Breakpoints.BigScreen, value: 650 },
                      ],
                      width: '100%',
                    }
                  ),
                  dimensions.width
                )}
              />
              {/* ~ title */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      fontFamily: 'Inter_500Medium',
                      fontSize: 28,
                      marginTop: 20,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Buy 2, pay for 1'}
              </Text>
              {/* ~ details */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App['Custom Color_6'],
                      fontFamily: 'Inter_300Light',
                      fontSize: [
                        { minWidth: Breakpoints.Desktop, value: 24 },
                        { minWidth: Breakpoints.Laptop, value: 18 },
                        { minWidth: Breakpoints.Mobile, value: 18 },
                      ],
                      lineHeight: [
                        { minWidth: Breakpoints.BigScreen, value: 32 },
                        { minWidth: Breakpoints.Desktop, value: 30 },
                        { minWidth: Breakpoints.Mobile, value: 25 },
                        { minWidth: Breakpoints.Laptop, value: 23 },
                      ],
                      marginTop: 8,
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sit eu morbi velit praesent. Fermentum mauris fringilla vitae feugiat vel sit blandit quam. In mi sodales nisl eleifend duis porttitor. Convallis euismod facilisis neque eget praesent diam in nulla. Faucibus interdum vulputate rhoncus mauris id facilisis est nunc habitant. Velit posuere facilisi tortor sed. Lectus a velit sed pretium egestas integer lacus, mi. Risus eget venenatis at amet sed. Fames rhoncus purus ornare nulla. Lorem dolor eget sagittis mattis eget nam. Nulla nisi egestas nisl nibh eleifend luctus.'
                }
              </Text>
            </View>
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
