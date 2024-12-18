import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: { style: { height: 300, width: '100%' }, props: {} },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({
    'Checkbox Row': { style: { minHeight: 50 }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    'Action button': {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        height: 48,
        marginTop: 25,
        textAlign: 'center',
      },
      props: {},
    },
    Button: {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
    'action btn big screen': {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.Mobile, value: 16 },
          { minWidth: Breakpoints.BigScreen, value: 24 },
        ],
        height: [
          { minWidth: Breakpoints.BigScreen, value: 80 },
          { minWidth: Breakpoints.Mobile, value: 48 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
    'action btn desktop': {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.Mobile, value: 16 },
          { minWidth: Breakpoints.BigScreen, value: 24 },
          { minWidth: Breakpoints.Desktop, value: 20 },
        ],
        height: [
          { minWidth: Breakpoints.BigScreen, value: 80 },
          { minWidth: Breakpoints.Desktop, value: 60 },
          { minWidth: Breakpoints.Mobile, value: 48 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
    'action btn laptop': {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.Desktop, value: 20 },
          { minWidth: Breakpoints.Laptop, value: 20 },
          { minWidth: Breakpoints.Mobile, value: 16 },
          { minWidth: Breakpoints.BigScreen, value: 24 },
        ],
        height: [
          { minWidth: Breakpoints.Mobile, value: 48 },
          { minWidth: Breakpoints.Laptop, value: 60 },
          { minWidth: Breakpoints.Desktop, value: 60 },
          { minWidth: Breakpoints.BigScreen, value: 80 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
    'action btn tablet': {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.BigScreen, value: 24 },
          { minWidth: Breakpoints.Desktop, value: 20 },
          { minWidth: Breakpoints.Laptop, value: 20 },
          { minWidth: Breakpoints.Tablet, value: 20 },
          { minWidth: Breakpoints.Mobile, value: 16 },
        ],
        height: [
          { minWidth: Breakpoints.BigScreen, value: 80 },
          { minWidth: Breakpoints.Desktop, value: 60 },
          { minWidth: Breakpoints.Laptop, value: 60 },
          { minWidth: Breakpoints.Tablet, value: 60 },
          { minWidth: Breakpoints.Mobile, value: 48 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
    'screen heading mobile': {
      style: {
        color: theme.colors.text.strong,
        flex: 1,
        fontFamily: 'Inter_500Medium',
        fontSize: 19,
        textAlign: 'center',
      },
      props: {},
    },
  });

export const ViewStyles = theme =>
  StyleSheet.create({
    Notif_details: {
      style: {
        backgroundColor: palettes.App['Custom Color'],
        padding: 20,
        paddingTop: 0,
      },
      props: {},
    },
    fd: { style: { marginTop: 20 }, props: {} },
    'header action': {
      style: {
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'screen header view': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { style: { minHeight: 40 }, props: {} } });

export const FlashListStyles = theme =>
  StyleSheet.create({ FlashList: { style: { flex: 1 }, props: {} } });

export const MapViewStyles = theme =>
  StyleSheet.create({
    'Map View': {
      style: { flex: 1, height: '100%', width: '100%' },
      props: {},
    },
  });

export const FlatListStyles = theme =>
  StyleSheet.create({ List: { style: { flex: 1 }, props: {} } });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { style: { height: 1 }, props: {} } });

export const DeckSwiperStyles = theme =>
  StyleSheet.create({ 'Deck Swiper': { style: { width: '100%' }, props: {} } });

export const DeckSwiperCardStyles = theme =>
  StyleSheet.create({
    'Deck Swiper Card': {
      style: {
        alignItems: 'center',
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      },
      props: {},
    },
  });

export const LinkStyles = theme =>
  StyleSheet.create({
    Link: { style: { color: theme.colors.branding.primary }, props: {} },
  });

export const SquareStyles = theme =>
  StyleSheet.create({
    Square: {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors.branding.primary,
        justifyContent: 'center',
      },
      props: {},
    },
  });
