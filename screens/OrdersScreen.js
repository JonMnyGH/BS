import React from 'react';
import { ScreenContainer, SimpleStyleFlashList, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SquareApi from '../apis/SquareApi.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useIsOnline from '../utils/useIsOnline';
import useWindowDimensions from '../utils/useWindowDimensions';

const OrdersScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const isOnline = useIsOnline();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Screen heading */}
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Inter_500Medium',
            fontSize: [
              { minWidth: Breakpoints.Mobile, value: 19 },
              { minWidth: Breakpoints.Tablet, value: 22 },
              { minWidth: Breakpoints.Laptop, value: 25 },
              { minWidth: Breakpoints.Desktop, value: 28 },
              { minWidth: Breakpoints.BigScreen, value: 30 },
            ],
            lineHeight: [
              { minWidth: Breakpoints.BigScreen, value: 90 },
              { minWidth: Breakpoints.Mobile, value: 50 },
              { minWidth: Breakpoints.Tablet, value: 65 },
              { minWidth: Breakpoints.Laptop, value: 75 },
              { minWidth: Breakpoints.Desktop, value: 85 },
            ],
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Orders\n'}
      </Text>

      <SquareApi.FetchSearchPOST
        refetchInterval={5000}
        refetchOnReconnect={isOnline}
      >
        {({ loading, error, data, refetchSearch }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <SimpleStyleFlashList
              data={fetchData?.orders?.[0]?.line_items}
              horizontal={false}
              inverted={false}
              keyExtractor={(flashListData, index) =>
                flashListData?.id ??
                flashListData?.uuid ??
                index?.toString() ??
                JSON.stringify(flashListData)
              }
              listKey={'IYL2m1al'}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const flashListData = item;
                return <>{!flashListData ? null : <View></View>}</>;
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              estimatedItemSize={25}
              initialNumToRender={20}
              numColumns={fetchData}
            />
          );
        }}
      </SquareApi.FetchSearchPOST>
    </ScreenContainer>
  );
};

export default withTheme(OrdersScreen);
