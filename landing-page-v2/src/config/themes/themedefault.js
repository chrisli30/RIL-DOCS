const primaryColor = '#212121';
const fontColor = '#9dafbd';
const bgColor = '#212121';
const borderColor = '#ddd';
const mainColor = '#55bca6';
const smMin = 576;
const mdMin = 768;
const lgMin = 992;
const xlMin = 1200;
const xxlMin = 1600;
const xsMax = (smMin - 1); // 575px
const smMax = (mdMin - 1); // 767px
const mdMax = (lgMin - 1); // 991px
const lgMax = (xlMin - 1); // 1199px
const xlMax = (xxlMin - 1); // 1599px

const theme = {
  primaryColor,
  fontColor,
  bgColor,
  borderColor,
  mainColor,
  smMin,
  mdMin,
  lgMin,
  xlMin,
  xxlMin,
  xsMax,
  smMax,
  mdMax,
  lgMax,
  xlMax,
  phone: `only screen and (max-width:${smMin}px )`,
  tablet: `only screen and (min-width: ${mdMin}px)`,
  tabletStrict: `only screen and (min-width: ${mdMin}px) and (max-width: ${mdMax}px)`,
  desktop: `only screen and (min-width: ${lgMin}px)`,
  desktopStrict: `only screen and (min-width: ${lgMin}px) and (max-width: ${lgMax}px)`,
  xl: `only screen and (min-width: ${xlMin}px)`,
  xlStrict: `only screen and (min-width: ${xlMin}px) and (max-width: ${xlMax}px)`,
  xxl: `only screen and (min-width: ${xxlMin}px)`,
};

theme.palette = {
  primary: [
    '#4482FF', // 0: Default
    '#3A78F5', // 1: Darken 4%
    '#3775F2', // 2: Darken 5%
    'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
    '#4C8AFF', // 4: Lighten 3%
    'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
    '#6AA8FF', // 6: Lighten 15%
    '#63A1FF', // 7: Lighten 12%
    '#3F7DFA', // 8: Darken 2%
    '#3369e7', // 9: Algolia color
    '#5896FF', // 10: Lighten 8%
    '#2b69e6', // 11:
    '#236cfe', // 12: darken 10%
    '#4d88ff', // 13: Lighten 5%
  ],
  secondary: [
    '#2d3446', // 0: DarkBlue
    '#f1f3f6', // 1: LightBluish
    '#788195', // 2: LightBlue
    '#E4E6E9', // 3: LightBluish Darken 5%
    '#364d79', // 4:
    '#202739', // 5: DarkBlue Darken 5%
    '#f5f6f8', // 6: LighterBluish
    '#e9ebf1', // 7: DarkBluish
    '#F6F8FB', // 8: LighterBluish Lighten 2%
    '#E9EBEE', // 9: LighterBluish Darken 3%
    '#1a1a1a', // 10: Sidebar submenu select
  ],
  color: [
    '#FEAC01', // 0: Orange
    '#42299a', // 1: Purple
    '#F75D81', // 2: Pink
    '#7ED321', // 3: LimeGreen
    '#39435f', // 4: BlueShade
    '#FFCA28', // 5: Yellow
    '#F2BD1B', // 6: Yellow Darken 5%
    '#3b5998', // 7: Facebook
    '#344e86', // 8: Facebook Darken 5%
    '#dd4b39', // 9: Google Plus
    '#d73925', // 10: Google Plus Darken 5%
    '#e14615', // 11: Auth0
    '#ca3f13', // 12: Auth0
    '#e0364c', // 13: themeColor--AlizarinCrimson
  ],
  warning: [
    '#ffbf00', // 0: Warning
  ],
  success: [
    '#00b16a', // 0: Success
  ],
  error: [
    '#f64744', // 0: Error
    '#EC3D3A', // 1: Darken 4%
    '#FF5B58', // 2: Lighten 8%
  ],
  grayscale: [
    '#bababa', // 0: GreyShade
    '#c1c1c1', // 1: GreyDark
    '#D8D8D8', // 2: Grey
    '#f1f1f1', // 3: GreyAlt
    '#F3F3F3', // 4: GreyLight
    '#fafafa', // 5: DarkWhite
    '#F9F9F9', // 6: DarkerWhite
    '#fcfcfc', // 7: #fff Darken 1%
    '#eeeeee', // 8:
    '#fbfbfb', // 9:
    '#f5f5f5', // 10:
    '#f7f8f9', // 11: today-highlight-bg
  ],
  text: [
    '#323332', // 0: Heading
    '#595959', // 1: HeadingLight
    '#979797', // 2: Text
    '#797979', // 3: TextDark
    '#6a6c6a', // 4: Heading Lighten 22%
<<<<<<< HEAD
    '#55bca6', // 5: RSK Green
=======
>>>>>>> cccb4391a4708935934e2749aaceba13ac1f3cdc
  ],
  border: [
    '#e9e9e9', // 0: Border
    '#d8d8d8', // 1: BorderDark
    '#ebebeb', // 2: BorderLight
    '#d3d3d3', // 3:
    'rgba(228, 228, 228, 0.65)', // 4:
  ],

  calendar: [
    '#905', // 0:
    '#690', // 1:
    '#a67f59', // 2:
    '#07a', // 3:
    '#dd4a68', // 4:
    '#e90', // 5:
  ],
};

theme.fonts = {
  primary: 'Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
};

export default theme;
