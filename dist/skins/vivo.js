"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getVivoSkin: function() {
        return i;
    },
    palette: function() {
        return e;
    }
});
const _constants = require("./constants.js");
const _color = require("../utils/color.js");
const e = {
    vivoPurple: "#660099",
    vivoPurpleDark: "#461E5F",
    vivoPurpleLight10: "#EFE5F4",
    vivoPurpleLight20: "#E0CCEB",
    vivoPurpleLight50: "#B280CC",
    vivoPurpleLight80: "#8433AD",
    vivoPurpleLight90: "#751AA3",
    vivoGreen: "#99CC33",
    vivoGreenDark: "#225C3D",
    vivoGreenLight10: "#EDF8E8",
    vivoGreen25: "#D6EBAD",
    vivoGreenLight30: "#91AE9E",
    vivoBlue: "#00ABDB",
    orange: "#FF9900",
    orange25: "#FFD699",
    orangeDark: "#972A1D",
    orangeLight10: "#FFEFE1",
    orangeLight40: "#FFB84C",
    pink: "#EB3D7D",
    pepper: "#CC1F59",
    pepperDark: "#B71D63",
    pepperDark80: "#8F2052",
    pepperLight10: "#FCE4EF",
    pepperLight30: "#F7B1CB",
    pepperLight40: "#DB628B",
    grey1: "#F6F6F6",
    grey2: "#EEEEEE",
    grey3: "#DDDDDD",
    grey4: "#999999",
    grey5: "#666666",
    grey6: "#000000",
    white: "#FFFFFF",
    darkModeBlack: "#191919",
    darkModeGrey: "#242424",
    darkModeGrey6: "#313235"
}, i = ()=>({
        name: _constants.VIVO_SKIN,
        colors: {
            background: e.white,
            backgroundAlternative: e.grey1,
            backgroundBrand: e.vivoPurple,
            backgroundBrandSecondary: e.vivoPurple,
            backgroundContainer: e.white,
            backgroundContainerError: e.pepperLight10,
            backgroundContainerHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.05),
            backgroundContainerPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.08),
            backgroundContainerBrand: e.vivoPurple,
            backgroundContainerBrandHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.2),
            backgroundContainerBrandPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.4),
            backgroundContainerBrandOverInverse: e.vivoPurpleDark,
            backgroundContainerAlternative: e.grey1,
            backgroundOverlay: (0, _color.applyAlpha)(e.grey6, 0.6),
            backgroundSkeleton: e.grey2,
            backgroundSkeletonInverse: e.vivoPurpleDark,
            backgroundBrandTop: e.vivoPurple,
            backgroundBrandBottom: e.vivoPurple,
            appBarBackground: e.white,
            navigationBarBackground: e.vivoPurple,
            skeletonWave: e.grey2,
            borderLow: e.grey1,
            border: e.grey3,
            borderHigh: e.grey5,
            borderSelected: e.vivoPurple,
            coverBackgroundHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.pepper,
            buttonDangerBackgroundPressed: e.pepperDark,
            buttonDangerBackgroundHover: e.pepperDark,
            buttonLinkDangerBackgroundPressed: e.pepperLight10,
            buttonLinkDangerBackgroundInverse: e.white,
            buttonLinkDangerBackgroundInversePressed: e.pepperLight10,
            buttonLinkBackgroundPressed: e.vivoPurpleLight10,
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.1),
            buttonPrimaryBackground: e.vivoPurple,
            buttonPrimaryBackgroundInverse: e.white,
            buttonPrimaryBackgroundPressed: e.vivoPurpleDark,
            buttonPrimaryBackgroundHover: e.vivoPurpleDark,
            buttonPrimaryBackgroundInversePressed: e.vivoPurpleLight50,
            buttonSecondaryBorder: e.vivoPurple,
            buttonSecondaryBorderPressed: e.vivoPurpleDark,
            buttonSecondaryBackgroundHover: e.vivoPurpleLight10,
            buttonSecondaryBackgroundPressed: e.vivoPurpleLight10,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.white,
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.15),
            textButtonPrimary: e.white,
            textButtonPrimaryInverse: e.vivoPurple,
            textButtonPrimaryInversePressed: e.vivoPurple,
            textButtonSecondary: e.vivoPurple,
            textButtonSecondaryPressed: e.vivoPurpleDark,
            textButtonSecondaryInverse: e.white,
            textButtonSecondaryInversePressed: e.white,
            textLink: e.vivoPurple,
            textLinkInverse: e.white,
            textLinkDanger: e.pepper,
            textLinkSnackbar: e.vivoPurpleLight50,
            textActivated: e.vivoPurple,
            textBrand: e.vivoPurple,
            inputBorder: e.grey3,
            inputBorderInverse: e.white,
            completedStep: e.vivoPurple,
            completedStepInverse: e.vivoPurpleDark,
            control: e.grey3,
            controlActivated: e.vivoPurple,
            controlInverse: e.vivoPurpleLight50,
            controlActivatedInverse: e.white,
            controlError: e.pepper,
            barTrack: e.grey3,
            barTrackInverse: (0, _color.applyAlpha)(e.white, 0.5),
            loadingBar: e.pink,
            loadingBarBackground: e.pepperLight30,
            toggleAndroidInactive: e.grey2,
            toggleAndroidBackgroundActive: e.vivoPurpleLight20,
            iosControlKnob: e.white,
            controlKnobInverse: e.vivoPurple,
            divider: e.grey2,
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.2),
            navigationBarDivider: e.vivoPurple,
            badge: e.pepperDark,
            feedbackErrorBackground: e.pepper,
            feedbackInfoBackground: e.grey6,
            brand: e.vivoPurple,
            brandHigh: e.vivoPurpleDark,
            inverse: e.white,
            neutralHigh: e.grey6,
            neutralMedium: e.grey5,
            neutralMediumInverse: e.grey5,
            neutralLow: e.grey1,
            neutralLowAlternative: e.grey2,
            textPrimary: e.grey6,
            textPrimaryInverse: e.white,
            textSecondary: e.grey5,
            textSecondaryInverse: e.vivoPurpleLight20,
            success: e.vivoGreen,
            warning: e.orange,
            error: e.pepper,
            textError: e.pepper,
            textErrorInverse: e.white,
            promo: e.vivoPurple,
            highlight: e.pink,
            successLow: e.vivoGreenLight10,
            warningLow: e.orangeLight10,
            errorLow: e.pepperLight10,
            promoLow: e.vivoPurpleLight10,
            brandLow: e.vivoPurpleLight10,
            successHigh: e.vivoGreenDark,
            warningHigh: e.orangeDark,
            errorHigh: e.pepperDark80,
            promoHigh: e.vivoPurple,
            successHighInverse: e.vivoGreenDark,
            warningHighInverse: e.orangeDark,
            errorHighInverse: e.pepperDark80,
            promoHighInverse: e.vivoPurple,
            textNavigationBarPrimary: e.white,
            textNavigationBarSecondary: e.vivoPurpleLight50,
            textNavigationSearchBarHint: e.vivoPurpleLight50,
            textNavigationSearchBarText: e.white,
            textAppBar: e.grey4,
            textAppBarSelected: e.vivoPurple,
            customTabsBackground: e.vivoPurple,
            tagTextPromo: e.vivoPurple,
            tagTextActive: e.vivoPurple,
            tagTextInactive: e.grey5,
            tagTextInfo: e.vivoPurple,
            tagTextSuccess: e.vivoGreenDark,
            tagTextWarning: e.orangeDark,
            tagTextError: e.pepperDark80,
            tagBackgroundPromo: e.vivoPurpleLight10,
            tagBackgroundActive: e.vivoPurpleLight10,
            tagBackgroundInactive: e.grey1,
            tagBackgroundInfo: e.vivoPurpleLight10,
            tagBackgroundSuccess: e.vivoGreenLight10,
            tagBackgroundWarning: e.orangeLight10,
            tagBackgroundError: e.pepperLight10,
            tagTextPromoInverse: e.vivoPurple,
            tagTextActiveInverse: e.vivoPurple,
            tagTextInactiveInverse: e.grey5,
            tagTextInfoInverse: e.vivoPurple,
            tagTextSuccessInverse: e.vivoGreenDark,
            tagTextWarningInverse: e.orangeDark,
            tagTextErrorInverse: e.pepperDark80,
            tagBackgroundPromoInverse: e.vivoPurpleLight10,
            tagBackgroundActiveInverse: e.vivoPurpleLight10,
            tagBackgroundInactiveInverse: e.grey1,
            tagBackgroundInfoInverse: e.vivoPurpleLight10,
            tagBackgroundSuccessInverse: e.vivoGreenLight10,
            tagBackgroundWarningInverse: e.orangeLight10,
            tagBackgroundErrorInverse: e.pepperLight10,
            cardContentOverlay: `linear-gradient(180deg, ${(0, _color.applyAlpha)(e.grey6, 0)} 0%, ${(0, _color.applyAlpha)(e.grey6, 0.4)} 30%, ${(0, _color.applyAlpha)(e.grey6, 0.7)} 100%)`
        },
        darkModeColors: {
            background: e.darkModeBlack,
            backgroundAlternative: e.darkModeBlack,
            backgroundBrand: e.darkModeBlack,
            backgroundBrandSecondary: e.darkModeBlack,
            backgroundContainer: e.darkModeGrey,
            backgroundContainerError: e.darkModeGrey,
            backgroundContainerHover: (0, _color.applyAlpha)(e.white, 0.05),
            backgroundContainerPressed: (0, _color.applyAlpha)(e.white, 0.08),
            backgroundContainerBrand: e.darkModeGrey,
            backgroundContainerBrandHover: (0, _color.applyAlpha)(e.white, 0.03),
            backgroundContainerBrandPressed: (0, _color.applyAlpha)(e.white, 0.05),
            backgroundContainerBrandOverInverse: e.darkModeGrey,
            backgroundContainerAlternative: e.darkModeGrey,
            backgroundOverlay: (0, _color.applyAlpha)(e.darkModeGrey, 0.8),
            backgroundSkeleton: e.darkModeGrey6,
            backgroundSkeletonInverse: e.darkModeGrey6,
            backgroundBrandTop: e.darkModeBlack,
            backgroundBrandBottom: e.darkModeBlack,
            appBarBackground: e.darkModeGrey,
            navigationBarBackground: e.darkModeBlack,
            skeletonWave: e.grey5,
            borderLow: e.darkModeBlack,
            border: e.darkModeGrey,
            borderHigh: e.grey5,
            borderSelected: e.vivoPurple,
            coverBackgroundHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.pepper,
            buttonDangerBackgroundPressed: e.pepperDark,
            buttonDangerBackgroundHover: e.pepperDark,
            buttonLinkDangerBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkDangerBackgroundInverse: (0, _color.applyAlpha)(e.white, 0),
            buttonLinkDangerBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonPrimaryBackground: e.vivoPurpleLight80,
            buttonPrimaryBackgroundInverse: e.vivoPurpleLight80,
            buttonPrimaryBackgroundPressed: e.vivoPurpleDark,
            buttonPrimaryBackgroundHover: e.vivoPurpleDark,
            buttonPrimaryBackgroundInversePressed: e.vivoPurpleDark,
            buttonSecondaryBackgroundHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBorder: e.white,
            buttonSecondaryBorderPressed: e.white,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.white,
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.15),
            textButtonPrimary: e.grey2,
            textButtonPrimaryInverse: e.grey2,
            textButtonPrimaryInversePressed: e.grey2,
            textButtonSecondary: e.grey2,
            textButtonSecondaryPressed: e.grey2,
            textButtonSecondaryInverse: e.grey2,
            textButtonSecondaryInversePressed: e.grey2,
            textLink: e.vivoPurpleLight50,
            textLinkInverse: e.vivoPurpleLight50,
            textLinkDanger: e.pepper,
            textLinkSnackbar: e.vivoPurpleLight50,
            textActivated: e.vivoPurpleLight80,
            textBrand: e.vivoPurpleLight80,
            inputBorder: e.darkModeGrey6,
            inputBorderInverse: e.darkModeGrey6,
            completedStep: e.vivoPurpleLight80,
            completedStepInverse: e.vivoPurpleLight80,
            control: e.darkModeGrey6,
            controlActivated: e.vivoPurpleLight80,
            controlInverse: e.darkModeGrey6,
            controlActivatedInverse: e.vivoPurpleLight80,
            controlError: e.pepper,
            barTrack: e.darkModeGrey6,
            barTrackInverse: e.darkModeGrey6,
            loadingBar: e.vivoPurpleLight80,
            loadingBarBackground: e.darkModeGrey6,
            toggleAndroidInactive: e.grey4,
            toggleAndroidBackgroundActive: e.vivoPurpleLight50,
            iosControlKnob: e.grey2,
            controlKnobInverse: e.grey2,
            divider: (0, _color.applyAlpha)(e.white, 0.05),
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.05),
            navigationBarDivider: e.darkModeBlack,
            badge: e.pepperDark,
            feedbackErrorBackground: e.pepper,
            feedbackInfoBackground: e.grey6,
            brand: e.vivoPurpleLight80,
            brandHigh: (0, _color.applyAlpha)(e.white, 0.05),
            inverse: e.grey2,
            neutralHigh: e.grey2,
            neutralMedium: e.grey5,
            neutralMediumInverse: e.grey5,
            neutralLow: e.darkModeGrey6,
            neutralLowAlternative: e.darkModeGrey6,
            textPrimary: e.grey2,
            textPrimaryInverse: e.grey2,
            textSecondary: e.grey4,
            textSecondaryInverse: e.grey4,
            success: e.vivoGreen,
            warning: e.orange,
            error: e.pepper,
            textError: e.pepper,
            textErrorInverse: e.pepper,
            promo: e.vivoPurpleLight80,
            highlight: e.pink,
            successLow: e.darkModeGrey6,
            warningLow: e.darkModeGrey6,
            errorLow: e.darkModeGrey6,
            promoLow: e.darkModeGrey6,
            brandLow: e.darkModeGrey6,
            successHigh: e.vivoGreenLight30,
            warningHigh: e.orangeLight40,
            errorHigh: e.pepperLight40,
            promoHigh: e.vivoPurpleLight50,
            successHighInverse: e.vivoGreenDark,
            warningHighInverse: e.orangeDark,
            errorHighInverse: e.pepperDark80,
            promoHighInverse: e.vivoPurple,
            textNavigationBarPrimary: e.grey2,
            textNavigationBarSecondary: e.grey4,
            textNavigationSearchBarHint: e.grey4,
            textNavigationSearchBarText: e.grey2,
            textAppBar: e.grey5,
            textAppBarSelected: e.grey2,
            customTabsBackground: e.darkModeBlack,
            tagTextPromo: e.vivoPurpleLight50,
            tagTextActive: e.vivoPurpleLight80,
            tagTextInactive: e.grey5,
            tagTextInfo: e.vivoPurpleLight80,
            tagTextSuccess: e.vivoGreenLight30,
            tagTextWarning: e.orangeLight40,
            tagTextError: e.pepperLight40,
            tagBackgroundPromo: e.darkModeGrey6,
            tagBackgroundActive: e.darkModeGrey6,
            tagBackgroundInactive: e.darkModeGrey6,
            tagBackgroundInfo: e.darkModeGrey6,
            tagBackgroundSuccess: e.darkModeGrey6,
            tagBackgroundWarning: e.darkModeGrey6,
            tagBackgroundError: e.darkModeGrey6,
            tagTextPromoInverse: e.vivoPurpleLight50,
            tagTextActiveInverse: e.vivoPurpleLight80,
            tagTextInactiveInverse: e.grey5,
            tagTextInfoInverse: e.vivoPurpleLight80,
            tagTextSuccessInverse: e.vivoGreenLight30,
            tagTextWarningInverse: e.orangeLight40,
            tagTextErrorInverse: e.pepperLight40,
            tagBackgroundPromoInverse: e.darkModeGrey6,
            tagBackgroundActiveInverse: e.darkModeGrey6,
            tagBackgroundInactiveInverse: e.darkModeGrey6,
            tagBackgroundInfoInverse: e.darkModeGrey6,
            tagBackgroundSuccessInverse: e.darkModeGrey6,
            tagBackgroundWarningInverse: e.darkModeGrey6,
            tagBackgroundErrorInverse: e.darkModeGrey6,
            cardContentOverlay: `linear-gradient(180deg, ${(0, _color.applyAlpha)(e.grey6, 0)} 0%, ${(0, _color.applyAlpha)(e.grey6, 0.4)} 30%, ${(0, _color.applyAlpha)(e.grey6, 0.7)} 100%)`
        },
        borderRadii: {
            avatar: "50%",
            bar: "999px",
            button: "4px",
            checkbox: "2px",
            container: "8px",
            indicator: "999px",
            input: "8px",
            legacyDisplay: "16px",
            popup: "8px",
            sheet: "8px",
            mediaSmall: "8px"
        },
        textPresets: {
            button: {
                weight: "medium"
            },
            cardTitle: {
                weight: "regular"
            },
            indicator: {
                weight: "medium"
            },
            link: {
                weight: "medium"
            },
            navigationBar: {
                weight: "medium"
            },
            tabsLabel: {
                lineHeight: {
                    desktop: 24,
                    mobile: 24
                },
                size: {
                    desktop: 18,
                    mobile: 16
                },
                weight: "medium"
            },
            text1: {
                lineHeight: {
                    desktop: 20,
                    mobile: 16
                },
                size: {
                    desktop: 14,
                    mobile: 12
                }
            },
            text2: {
                lineHeight: {
                    desktop: 24,
                    mobile: 20
                },
                size: {
                    desktop: 16,
                    mobile: 14
                }
            },
            text3: {
                lineHeight: {
                    desktop: 24,
                    mobile: 24
                },
                size: {
                    desktop: 18,
                    mobile: 16
                }
            },
            text4: {
                lineHeight: {
                    desktop: 28,
                    mobile: 24
                },
                size: {
                    desktop: 20,
                    mobile: 18
                }
            },
            text5: {
                lineHeight: {
                    desktop: 32,
                    mobile: 24
                },
                size: {
                    desktop: 28,
                    mobile: 20
                },
                weight: "light"
            },
            text6: {
                lineHeight: {
                    desktop: 40,
                    mobile: 32
                },
                size: {
                    desktop: 32,
                    mobile: 24
                },
                weight: "light"
            },
            text7: {
                lineHeight: {
                    desktop: 48,
                    mobile: 32
                },
                size: {
                    desktop: 40,
                    mobile: 28
                },
                weight: "light"
            },
            text8: {
                lineHeight: {
                    desktop: 56,
                    mobile: 40
                },
                size: {
                    desktop: 48,
                    mobile: 32
                },
                weight: "light"
            },
            text9: {
                lineHeight: {
                    desktop: 64,
                    mobile: 48
                },
                size: {
                    desktop: 56,
                    mobile: 40
                },
                weight: "light"
            },
            text10: {
                lineHeight: {
                    desktop: 72,
                    mobile: 56
                },
                size: {
                    desktop: 64,
                    mobile: 48
                },
                weight: "light"
            },
            title1: {
                weight: "medium"
            },
            title2: {
                weight: "light"
            },
            title3: {
                lineHeight: {
                    desktop: 32,
                    mobile: 24
                },
                size: {
                    desktop: 28,
                    mobile: 20
                },
                weight: "light"
            }
        },
        themeVariants: {
            successFeedback: "inverse",
            brandLoadingScreen: "inverse"
        }
    });
