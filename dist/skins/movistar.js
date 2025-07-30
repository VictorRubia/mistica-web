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
    getMovistarSkin: function() {
        return d;
    },
    palette: function() {
        return e;
    }
});
const _constants = require("./constants.js");
const _color = require("../utils/color.js");
const e = {
    movistarBlue: "#0B9CEA",
    movistarBlue10: "#E6F5FD",
    movistarBlue15: "#CEEBFB",
    movistarBlue20: "#B3E1FB",
    movistarBlue30: "#80CEF9",
    movistarBlue40: "#4DBAF7",
    movistarBlue55: "#008EDD",
    movistarBlueHC: "#066FCB",
    movistarBlueHC55: "#055EAC",
    movistarBlueHC65: "#055398",
    movistarGreen: "#5CB615",
    movistarGreen10: "#EFF8E8",
    movistarGreen30: "#ADDA8A",
    movistarGreen40: "#8DCC5B",
    movistarGreen55: "#52A413",
    movistarGreen60: "#499110",
    movistarGreen70: "#407F0F",
    pepper: "#FF374A",
    pepper10: "#FFEBED",
    pepper40: "#FF7380",
    pepper45: "#FF5F6E",
    pepper55: "#D73241",
    pepper60: "#CC2C3B",
    pepper65: "#BF2937",
    pepper70: "#B22634",
    egg: "#F28D15",
    egg10: "#FEF4E8",
    egg40: "#F6AF5B",
    egg55: "#D97D0D",
    egg80: "#6D3F09",
    pink: "#E63780",
    pink45: "#EB5F99",
    pink55: "#C42F6D",
    purple: "#A13EA1",
    purple10: "#F6ECF6",
    purple35: "#C78BC7",
    purple40: "#BD78BD",
    purple70: "#712B71",
    grey1: "#F6F6F6",
    grey2: "#EEEEEE",
    grey3: "#DDDDDD",
    grey4: "#949494",
    grey5: "#6B6C6F",
    grey6: "#313235",
    white: "#FFFFFF",
    black: "#000000",
    movistarBlueDark: "#0B2739",
    darkModeBlack: "#061824",
    darkModeGrey: "#081F2E",
    darkModeGrey2: "#EAEBEE",
    darkModeGrey3: "#CED4D7",
    darkModeGrey4: "#89969F",
    darkModeGrey5: "#6D7D88",
    darkModeGrey6: "#3C5261",
    darkModeGrey7: "#032F46"
}, d = ()=>({
        name: _constants.MOVISTAR_SKIN,
        colors: {
            background: e.white,
            backgroundAlternative: e.grey1,
            backgroundBrand: e.movistarBlue,
            backgroundBrandSecondary: e.movistarBlueDark,
            backgroundContainer: e.white,
            backgroundContainerError: e.pepper10,
            backgroundContainerHover: (0, _color.applyAlpha)(e.black, 0.05),
            backgroundContainerPressed: (0, _color.applyAlpha)(e.black, 0.08),
            backgroundContainerBrand: e.movistarBlue,
            backgroundContainerBrandHover: (0, _color.applyAlpha)(e.black, 0.1),
            backgroundContainerBrandPressed: (0, _color.applyAlpha)(e.black, 0.2),
            backgroundContainerBrandOverInverse: e.movistarBlue55,
            backgroundContainerAlternative: e.grey1,
            backgroundOverlay: (0, _color.applyAlpha)(e.movistarBlueDark, 0.6),
            backgroundSkeleton: e.grey2,
            backgroundSkeletonInverse: e.movistarBlue55,
            backgroundBrandTop: e.movistarBlue,
            backgroundBrandBottom: e.movistarBlue,
            appBarBackground: e.white,
            navigationBarBackground: e.movistarBlue,
            skeletonWave: e.grey2,
            borderLow: e.grey1,
            border: e.grey3,
            borderHigh: e.grey5,
            borderSelected: e.movistarBlue,
            coverBackgroundHover: (0, _color.applyAlpha)(e.black, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.black, 0.35),
            buttonDangerBackground: e.pepper55,
            buttonDangerBackgroundPressed: e.pepper70,
            buttonDangerBackgroundHover: e.pepper65,
            buttonLinkDangerBackgroundPressed: e.pepper10,
            buttonLinkDangerBackgroundInverse: e.white,
            buttonLinkDangerBackgroundInversePressed: e.pepper10,
            buttonLinkBackgroundPressed: e.movistarBlue10,
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.2),
            buttonPrimaryBackground: e.movistarBlueHC,
            buttonPrimaryBackgroundInverse: e.white,
            buttonPrimaryBackgroundPressed: e.movistarBlueHC65,
            buttonPrimaryBackgroundHover: e.movistarBlueHC55,
            buttonPrimaryBackgroundInversePressed: e.movistarBlue10,
            buttonSecondaryBorder: e.movistarBlueHC,
            buttonSecondaryBorderPressed: e.movistarBlueHC65,
            buttonSecondaryBackgroundHover: e.movistarBlue10,
            buttonSecondaryBackgroundPressed: e.movistarBlue15,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.white,
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.2),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.3),
            textButtonPrimary: e.white,
            textButtonPrimaryInverse: e.movistarBlueHC,
            textButtonPrimaryInversePressed: e.movistarBlueHC,
            textButtonSecondary: e.movistarBlueHC,
            textButtonSecondaryPressed: e.movistarBlueHC55,
            textButtonSecondaryInverse: e.white,
            textButtonSecondaryInversePressed: e.white,
            textLink: e.movistarBlueHC,
            textLinkInverse: e.white,
            textLinkDanger: e.pepper60,
            textLinkSnackbar: e.movistarBlue30,
            textActivated: e.movistarBlueHC,
            textBrand: e.movistarBlueHC,
            inputBorder: e.grey4,
            inputBorderInverse: e.white,
            completedStep: e.movistarBlueHC,
            completedStepInverse: e.movistarBlue55,
            control: e.grey4,
            controlActivated: e.movistarBlue,
            controlInverse: e.movistarBlue20,
            controlActivatedInverse: e.white,
            controlError: e.pepper55,
            barTrack: e.grey3,
            barTrackInverse: (0, _color.applyAlpha)(e.black, 0.14),
            loadingBar: e.movistarBlue,
            loadingBarBackground: e.grey2,
            toggleAndroidInactive: e.grey2,
            toggleAndroidBackgroundActive: e.movistarBlue20,
            iosControlKnob: e.white,
            controlKnobInverse: e.movistarBlue,
            divider: e.grey3,
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.2),
            navigationBarDivider: e.movistarBlue,
            badge: e.pepper55,
            feedbackErrorBackground: e.pepper55,
            feedbackInfoBackground: e.movistarBlueDark,
            brand: e.movistarBlue,
            brandHigh: e.movistarBlue55,
            inverse: e.white,
            neutralHigh: e.movistarBlueDark,
            neutralMedium: e.grey5,
            neutralMediumInverse: e.grey5,
            neutralLow: e.grey1,
            neutralLowAlternative: e.grey2,
            textPrimary: e.movistarBlueDark,
            textPrimaryInverse: e.white,
            textSecondary: e.grey5,
            textSecondaryInverse: e.movistarBlue10,
            success: e.movistarGreen55,
            warning: e.egg55,
            error: e.pepper55,
            textError: e.pepper55,
            textErrorInverse: e.white,
            promo: e.pepper70,
            highlight: e.pink55,
            successLow: e.movistarGreen10,
            warningLow: e.egg10,
            errorLow: e.pepper10,
            promoLow: e.pepper10,
            brandLow: e.movistarBlue10,
            successHigh: e.movistarGreen70,
            warningHigh: e.egg80,
            errorHigh: e.pepper70,
            promoHigh: e.pepper70,
            successHighInverse: e.movistarGreen70,
            warningHighInverse: e.egg80,
            errorHighInverse: e.pepper70,
            promoHighInverse: e.pepper70,
            textNavigationBarPrimary: e.white,
            textNavigationBarSecondary: e.movistarBlue20,
            textNavigationSearchBarHint: e.movistarBlue20,
            textNavigationSearchBarText: e.white,
            textAppBar: e.grey5,
            textAppBarSelected: e.movistarBlueHC,
            customTabsBackground: e.white,
            tagTextPromo: e.white,
            tagTextActive: e.movistarBlueHC,
            tagTextInactive: e.grey5,
            tagTextInfo: e.white,
            tagTextSuccess: e.movistarGreen70,
            tagTextWarning: e.egg80,
            tagTextError: e.pepper70,
            tagBackgroundPromo: e.pepper70,
            tagBackgroundActive: e.movistarBlue10,
            tagBackgroundInactive: e.grey1,
            tagBackgroundInfo: e.movistarBlueDark,
            tagBackgroundSuccess: e.movistarGreen10,
            tagBackgroundWarning: e.egg10,
            tagBackgroundError: e.pepper10,
            tagTextPromoInverse: e.pepper70,
            tagTextActiveInverse: e.movistarBlueHC,
            tagTextInactiveInverse: e.grey5,
            tagTextInfoInverse: e.movistarBlueDark,
            tagTextSuccessInverse: e.movistarGreen70,
            tagTextWarningInverse: e.egg80,
            tagTextErrorInverse: e.pepper70,
            tagBackgroundPromoInverse: e.white,
            tagBackgroundActiveInverse: e.white,
            tagBackgroundInactiveInverse: e.white,
            tagBackgroundInfoInverse: e.white,
            tagBackgroundSuccessInverse: e.white,
            tagBackgroundWarningInverse: e.white,
            tagBackgroundErrorInverse: e.white,
            cardContentOverlay: `linear-gradient(180deg, ${(0, _color.applyAlpha)(e.black, 0)} 0%, ${(0, _color.applyAlpha)(e.black, 0.4)} 30%, ${(0, _color.applyAlpha)(e.black, 0.7)} 100%)`
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
            skeletonWave: e.darkModeGrey6,
            borderLow: e.darkModeBlack,
            border: e.darkModeGrey,
            borderHigh: e.darkModeGrey5,
            borderSelected: e.movistarBlue,
            coverBackgroundHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.pepper55,
            buttonDangerBackgroundPressed: e.pepper70,
            buttonDangerBackgroundHover: e.pepper65,
            buttonLinkDangerBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkDangerBackgroundInverse: (0, _color.applyAlpha)(e.white, 0),
            buttonLinkDangerBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonPrimaryBackground: e.movistarBlueHC,
            buttonPrimaryBackgroundInverse: e.movistarBlueHC,
            buttonPrimaryBackgroundPressed: e.movistarBlueHC65,
            buttonPrimaryBackgroundHover: e.movistarBlueHC55,
            buttonPrimaryBackgroundInversePressed: e.movistarBlueHC65,
            buttonSecondaryBackgroundHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.25),
            buttonSecondaryBorder: e.white,
            buttonSecondaryBorderPressed: e.white,
            buttonSecondaryBorderInverse: e.darkModeGrey2,
            buttonSecondaryBorderInversePressed: e.darkModeGrey2,
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.25),
            textButtonPrimary: e.white,
            textButtonPrimaryInverse: e.white,
            textButtonPrimaryInversePressed: e.white,
            textButtonSecondary: e.darkModeGrey2,
            textButtonSecondaryPressed: e.darkModeGrey2,
            textButtonSecondaryInverse: e.darkModeGrey2,
            textButtonSecondaryInversePressed: e.darkModeGrey2,
            textLink: e.movistarBlue,
            textLinkInverse: e.movistarBlue,
            textLinkDanger: e.pepper45,
            textLinkSnackbar: e.movistarBlue,
            textActivated: e.movistarBlue,
            textBrand: e.movistarBlue,
            inputBorder: e.darkModeGrey4,
            inputBorderInverse: e.darkModeGrey4,
            completedStep: e.movistarBlueHC,
            completedStepInverse: e.movistarBlueHC,
            control: e.darkModeGrey4,
            controlActivated: e.movistarBlue,
            controlInverse: e.darkModeGrey4,
            controlActivatedInverse: e.movistarBlue,
            controlError: e.pepper45,
            barTrack: e.darkModeGrey6,
            barTrackInverse: e.darkModeGrey6,
            loadingBar: e.movistarBlue,
            loadingBarBackground: e.darkModeGrey6,
            toggleAndroidInactive: e.darkModeGrey2,
            toggleAndroidBackgroundActive: e.movistarBlue20,
            iosControlKnob: e.darkModeGrey2,
            controlKnobInverse: e.darkModeGrey2,
            divider: (0, _color.applyAlpha)(e.white, 0.1),
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.1),
            navigationBarDivider: e.darkModeBlack,
            badge: e.pepper55,
            feedbackErrorBackground: e.pepper55,
            feedbackInfoBackground: e.movistarBlueDark,
            brand: e.movistarBlue,
            brandHigh: e.movistarBlue40,
            inverse: e.darkModeGrey2,
            neutralHigh: e.darkModeGrey2,
            neutralMedium: e.darkModeGrey5,
            neutralMediumInverse: e.grey5,
            neutralLow: e.darkModeGrey7,
            neutralLowAlternative: e.darkModeGrey7,
            textPrimary: e.darkModeGrey2,
            textPrimaryInverse: e.darkModeGrey2,
            textSecondary: e.darkModeGrey4,
            textSecondaryInverse: e.darkModeGrey4,
            success: e.movistarGreen,
            warning: e.egg,
            error: e.pepper45,
            textError: e.pepper45,
            textErrorInverse: e.pepper45,
            promo: e.pepper45,
            highlight: e.pink45,
            successLow: e.darkModeGrey7,
            warningLow: e.darkModeGrey7,
            errorLow: e.darkModeGrey7,
            promoLow: e.darkModeGrey7,
            brandLow: e.darkModeGrey7,
            successHigh: e.movistarGreen40,
            warningHigh: e.egg40,
            errorHigh: e.pepper45,
            promoHigh: e.pepper45,
            successHighInverse: e.movistarGreen70,
            warningHighInverse: e.egg80,
            errorHighInverse: e.pepper70,
            promoHighInverse: e.pepper45,
            textNavigationBarPrimary: e.darkModeGrey2,
            textNavigationBarSecondary: e.darkModeGrey4,
            textNavigationSearchBarHint: e.darkModeGrey4,
            textNavigationSearchBarText: e.darkModeGrey2,
            textAppBar: e.darkModeGrey4,
            textAppBarSelected: e.movistarBlue,
            customTabsBackground: e.darkModeBlack,
            tagTextPromo: e.white,
            tagTextActive: e.movistarBlue,
            tagTextInactive: e.darkModeGrey3,
            tagTextInfo: e.white,
            tagTextSuccess: e.movistarGreen40,
            tagTextWarning: e.egg40,
            tagTextError: e.pepper45,
            tagBackgroundPromo: e.pepper70,
            tagBackgroundActive: e.darkModeGrey7,
            tagBackgroundInactive: e.darkModeGrey7,
            tagBackgroundInfo: e.darkModeGrey7,
            tagBackgroundSuccess: e.darkModeGrey7,
            tagBackgroundWarning: e.darkModeGrey7,
            tagBackgroundError: e.darkModeGrey7,
            tagTextPromoInverse: e.white,
            tagTextActiveInverse: e.movistarBlue,
            tagTextInactiveInverse: e.darkModeGrey3,
            tagTextInfoInverse: e.white,
            tagTextSuccessInverse: e.movistarGreen40,
            tagTextWarningInverse: e.egg40,
            tagTextErrorInverse: e.pepper45,
            tagBackgroundPromoInverse: e.pepper70,
            tagBackgroundActiveInverse: e.darkModeGrey7,
            tagBackgroundInactiveInverse: e.darkModeGrey7,
            tagBackgroundInfoInverse: e.darkModeGrey7,
            tagBackgroundSuccessInverse: e.darkModeGrey7,
            tagBackgroundWarningInverse: e.darkModeGrey7,
            tagBackgroundErrorInverse: e.darkModeGrey7,
            cardContentOverlay: `linear-gradient(180deg, ${(0, _color.applyAlpha)(e.black, 0)} 0%, ${(0, _color.applyAlpha)(e.black, 0.4)} 30%, ${(0, _color.applyAlpha)(e.black, 0.7)} 100%)`
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
                weight: "bold"
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
                weight: "bold"
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
                weight: "bold"
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
                weight: "bold"
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
                weight: "bold"
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
                weight: "bold"
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
                weight: "bold"
            },
            title1: {
                weight: "medium"
            },
            title2: {
                weight: "bold"
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
                weight: "bold"
            }
        },
        themeVariants: {
            successFeedback: "default",
            brandLoadingScreen: "default"
        }
    });
