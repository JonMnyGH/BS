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

const CatBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
            paddingBottom: 0,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
            }),
            dimensions.width
          )}
        >
          {'Top categories'}
        </Text>

        <Pressable>
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors.text.light,
                fontFamily: 'Inter_400Regular',
              }),
              dimensions.width
            )}
          >
            {'View all'}
          </Text>
        </Pressable>
      </View>

      <ExampleDataApi.FetchUsersGET count={5}>
        {({ loading, error, data, refetchUsers }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <FlashList
              data={fetchData}
              estimatedItemSize={50}
              inverted={false}
              keyExtractor={(flashListData, index) =>
                flashListData?.id ??
                flashListData?.uuid ??
                index?.toString() ??
                JSON.stringify(flashListData)
              }
              listKey={'nmRReVxy'}
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
                          borderColor: theme.colors.text.light,
                          borderRadius: 20,
                          borderWidth: 1,
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'center',
                          marginLeft: 6,
                          marginTop: 12,
                          paddingLeft: 12,
                          paddingRight: 12,
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        {...GlobalStyles.ImageStyles(theme)['Image'].props}
                        source={imageSource(Images['Taco'])}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'].style,
                            { height: 32, width: 32 }
                          ),
                          dimensions.width
                        )}
                      />
                      <Text
                        accessible={true}
                        selectable={false}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            { fontFamily: 'Inter_500Medium', marginLeft: 4 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Vegan'}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
              showsVerticalScrollIndicator={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          );
        }}
      </ExampleDataApi.FetchUsersGET>
    </View>
  );
};

export default withTheme(CatBlock);
