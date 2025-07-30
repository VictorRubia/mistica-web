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
    getO2Skin: function() {
        return d;
    },
    palette: function() {
        return e;
    }
});
const _constants = require("./constants.js");
const _color = require("../utils/color.js");
const e = {
    o2BluePrimary: "#0019A5",
    o2BluePrimary70: "#000066",
    o2BluePrimary90: "#000033",
    o2BluePrimary30: "#808CD2",
    o2BluePrimary15: "#CCD1ED",
    o2BluePrimary10: "#E5E8F6",
    o2BlueMid: "#0090D0",
    o2BlueLight: "#41B6E6",
    o2BlueLight30: "#C6E9F7",
    o2BlueLight35: "#8DD3F0",
    o2Teal: "#01B7B4",
    o2Green: "#91C90E",
    o2Green10: "#F4FAE7",
    o2Green40: "#B2D956",
    o2Green80: "#415A06",
    o2Yellow: "#FEDB00",
    o2Orange: "#FF7F41",
    o2Orange10: "#FFF2EC",
    o2Orange40: "#FFA57A",
    o2Orange75: "#A6522A",
    o2Pink: "#E45DBF",
    o2Purple: "#952D98",
    o2Purple10: "#F4EAF5",
    o2Purple30: "#CA9ACB",
    pepper: "#F4364C",
    pepper10: "#FEEBED",
    pepper20: "#FCC3C9",
    pepper40: "#FF7380",
    pepper60: "#C32B3D",
    grey1: "#F6F6F6",
    grey2: "#EEEEEE",
    grey3: "#DDDDDD",
    grey4: "#999999",
    grey5: "#707070",
    grey6: "#000033",
    white: "#FFFFFF",
    black: "#000000",
    darkModeBlack: "#191919",
    darkModeGrey: "#242424",
    darkModeGrey6: "#313235",
    darkModeO2BluePrimary: "#0020D6",
    darkModeO2BluePrimaryDark: "#000099"
}, d = ()=>({
        name: _constants.O2_SKIN,
        colors: {
            background: e.white,
            backgroundAlternative: e.grey1,
            backgroundBrand: e.o2BluePrimary,
            backgroundBrandSecondary: e.o2BluePrimary,
            backgroundContainer: e.white,
            backgroundContainerError: e.pepper10,
            backgroundContainerHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.05),
            backgroundContainerPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.08),
            backgroundContainerBrand: e.o2BluePrimary,
            backgroundContainerBrandHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.2),
            backgroundContainerBrandPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.4),
            backgroundContainerBrandOverInverse: e.o2BluePrimary70,
            backgroundContainerAlternative: e.grey1,
            backgroundOverlay: (0, _color.applyAlpha)(e.grey6, 0.6),
            backgroundSkeleton: e.grey2,
            backgroundSkeletonInverse: e.o2BluePrimary70,
            backgroundBrandTop: e.o2BluePrimary,
            backgroundBrandBottom: e.o2BluePrimary,
            appBarBackground: e.white,
            navigationBarBackground: e.o2BluePrimary,
            skeletonWave: e.grey2,
            borderLow: e.grey1,
            border: e.grey3,
            borderHigh: e.grey5,
            borderSelected: e.o2BluePrimary,
            coverBackgroundHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.pepper,
            buttonDangerBackgroundPressed: e.pepper60,
            buttonDangerBackgroundHover: e.pepper60,
            buttonLinkDangerBackgroundPressed: e.pepper10,
            buttonLinkDangerBackgroundInverse: e.white,
            buttonLinkDangerBackgroundInversePressed: e.pepper10,
            buttonLinkBackgroundPressed: e.o2BluePrimary10,
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonPrimaryBackground: e.o2BluePrimary,
            buttonPrimaryBackgroundInverse: e.white,
            buttonPrimaryBackgroundPressed: e.o2BluePrimary70,
            buttonPrimaryBackgroundHover: e.o2BluePrimary70,
            buttonPrimaryBackgroundInversePressed: e.o2BluePrimary30,
            buttonSecondaryBorder: e.o2BluePrimary,
            buttonSecondaryBorderPressed: e.o2BluePrimary70,
            buttonSecondaryBackgroundHover: e.o2BluePrimary10,
            buttonSecondaryBackgroundPressed: e.o2BluePrimary10,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.o2BluePrimary30,
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.15),
            textButtonPrimary: e.white,
            textButtonPrimaryInverse: e.o2BluePrimary,
            textButtonPrimaryInversePressed: e.o2BluePrimary70,
            textButtonSecondary: e.o2BluePrimary,
            textButtonSecondaryPressed: e.o2BluePrimary70,
            textButtonSecondaryInverse: e.white,
            textButtonSecondaryInversePressed: e.white,
            textLink: e.o2BluePrimary,
            textLinkInverse: e.white,
            textLinkDanger: e.pepper,
            textLinkSnackbar: e.o2BluePrimary30,
            textActivated: e.o2BluePrimary,
            textBrand: e.o2BluePrimary,
            inputBorder: e.grey3,
            inputBorderInverse: e.white,
            completedStep: e.o2BluePrimary,
            completedStepInverse: e.o2BluePrimary70,
            control: e.grey3,
            controlActivated: e.o2BluePrimary,
            controlInverse: e.o2BluePrimary30,
            controlActivatedInverse: e.white,
            controlError: e.pepper,
            barTrack: e.grey3,
            barTrackInverse: (0, _color.applyAlpha)(e.white, 0.3),
            loadingBar: e.o2BluePrimary,
            loadingBarBackground: e.grey1,
            toggleAndroidInactive: e.grey2,
            toggleAndroidBackgroundActive: e.o2BluePrimary15,
            iosControlKnob: e.white,
            controlKnobInverse: e.o2BluePrimary,
            divider: e.grey2,
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.2),
            navigationBarDivider: e.o2BluePrimary,
            badge: e.pepper60,
            feedbackErrorBackground: e.pepper,
            feedbackInfoBackground: e.grey6,
            brand: e.o2BluePrimary,
            brandHigh: e.o2BluePrimary70,
            inverse: e.white,
            neutralHigh: e.grey6,
            neutralMedium: e.grey5,
            neutralMediumInverse: e.grey5,
            neutralLow: e.grey1,
            neutralLowAlternative: e.grey2,
            textPrimary: e.grey6,
            textPrimaryInverse: e.white,
            textSecondary: e.grey5,
            textSecondaryInverse: e.o2BluePrimary15,
            success: e.o2Green,
            warning: e.o2Orange,
            error: e.pepper,
            textError: e.pepper,
            textErrorInverse: e.white,
            promo: e.o2Purple,
            highlight: e.o2Pink,
            successLow: e.o2Green10,
            warningLow: e.o2Orange10,
            errorLow: e.pepper10,
            promoLow: e.o2Purple10,
            brandLow: e.o2BluePrimary10,
            successHigh: e.o2Green80,
            warningHigh: e.o2Orange75,
            errorHigh: e.pepper60,
            promoHigh: e.o2Purple,
            successHighInverse: e.o2Green80,
            warningHighInverse: e.o2Orange75,
            errorHighInverse: e.pepper60,
            promoHighInverse: e.o2Purple,
            textNavigationBarPrimary: e.white,
            textNavigationBarSecondary: e.o2BluePrimary30,
            textNavigationSearchBarHint: e.o2BluePrimary30,
            textNavigationSearchBarText: e.white,
            textAppBar: e.grey4,
            textAppBarSelected: e.o2BluePrimary,
            customTabsBackground: e.o2BluePrimary,
            tagTextPromo: e.o2Purple,
            tagTextActive: e.o2BluePrimary,
            tagTextInactive: e.grey5,
            tagTextInfo: e.o2BluePrimary,
            tagTextSuccess: e.o2Green80,
            tagTextWarning: e.o2Orange75,
            tagTextError: e.pepper60,
            tagBackgroundPromo: e.o2Purple10,
            tagBackgroundActive: e.o2BluePrimary10,
            tagBackgroundInactive: e.grey1,
            tagBackgroundInfo: e.o2BluePrimary10,
            tagBackgroundSuccess: e.o2Green10,
            tagBackgroundWarning: e.o2Orange10,
            tagBackgroundError: e.pepper10,
            tagTextPromoInverse: e.o2Purple,
            tagTextActiveInverse: e.o2BluePrimary,
            tagTextInactiveInverse: e.grey5,
            tagTextInfoInverse: e.o2BluePrimary,
            tagTextSuccessInverse: e.o2Green80,
            tagTextWarningInverse: e.o2Orange75,
            tagTextErrorInverse: e.pepper60,
            tagBackgroundPromoInverse: e.o2Purple10,
            tagBackgroundActiveInverse: e.o2BluePrimary10,
            tagBackgroundInactiveInverse: e.grey1,
            tagBackgroundInfoInverse: e.o2BluePrimary10,
            tagBackgroundSuccessInverse: e.o2Green10,
            tagBackgroundWarningInverse: e.o2Orange10,
            tagBackgroundErrorInverse: e.pepper10,
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
            skeletonWave: e.grey5,
            borderLow: e.darkModeBlack,
            border: e.darkModeGrey,
            borderHigh: e.grey5,
            borderSelected: e.o2BluePrimary30,
            coverBackgroundHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.pepper,
            buttonDangerBackgroundPressed: e.pepper60,
            buttonDangerBackgroundHover: e.pepper60,
            buttonLinkDangerBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkDangerBackgroundInverse: (0, _color.applyAlpha)(e.white, 0),
            buttonLinkDangerBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonPrimaryBackground: e.darkModeO2BluePrimary,
            buttonPrimaryBackgroundInverse: e.darkModeO2BluePrimary,
            buttonPrimaryBackgroundPressed: e.darkModeO2BluePrimaryDark,
            buttonPrimaryBackgroundHover: e.darkModeO2BluePrimaryDark,
            buttonPrimaryBackgroundInversePressed: e.darkModeO2BluePrimaryDark,
            buttonSecondaryBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBorder: e.white,
            buttonSecondaryBorderPressed: e.white,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.white,
            buttonSecondaryBackgroundHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.15),
            textButtonPrimary: e.grey2,
            textButtonPrimaryInverse: e.grey2,
            textButtonPrimaryInversePressed: e.grey2,
            textButtonSecondary: e.grey2,
            textButtonSecondaryPressed: e.grey2,
            textButtonSecondaryInverse: e.grey2,
            textButtonSecondaryInversePressed: e.grey2,
            textLink: e.o2BluePrimary30,
            textLinkInverse: e.o2BluePrimary30,
            textLinkDanger: e.pepper,
            textLinkSnackbar: e.o2BluePrimary30,
            textActivated: e.o2BluePrimary30,
            textBrand: e.o2BluePrimary30,
            inputBorder: e.darkModeGrey6,
            inputBorderInverse: e.darkModeGrey6,
            completedStep: e.darkModeO2BluePrimary,
            completedStepInverse: e.darkModeO2BluePrimary,
            control: e.darkModeGrey6,
            controlActivated: e.o2BluePrimary30,
            controlInverse: e.darkModeGrey6,
            controlActivatedInverse: e.o2BluePrimary30,
            controlError: e.pepper,
            barTrack: e.darkModeGrey6,
            barTrackInverse: e.darkModeGrey6,
            loadingBar: e.darkModeO2BluePrimary,
            loadingBarBackground: e.darkModeGrey6,
            toggleAndroidInactive: e.grey4,
            toggleAndroidBackgroundActive: e.o2BlueLight30,
            iosControlKnob: e.grey2,
            controlKnobInverse: e.grey2,
            badge: e.pepper60,
            feedbackErrorBackground: e.pepper,
            feedbackInfoBackground: e.darkModeGrey6,
            divider: (0, _color.applyAlpha)(e.white, 0.05),
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.05),
            navigationBarDivider: e.darkModeBlack,
            brand: e.o2BluePrimary30,
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
            success: e.o2Green,
            warning: e.o2Orange,
            error: e.pepper,
            textError: e.pepper,
            textErrorInverse: e.pepper,
            promo: e.o2Purple,
            highlight: e.o2Pink,
            successLow: e.darkModeGrey6,
            warningLow: e.darkModeGrey6,
            errorLow: e.darkModeGrey6,
            promoLow: e.darkModeGrey6,
            brandLow: e.darkModeGrey6,
            successHigh: e.o2Green40,
            warningHigh: e.o2Orange40,
            errorHigh: e.pepper40,
            promoHigh: e.o2Purple30,
            successHighInverse: e.o2Green80,
            warningHighInverse: e.o2Orange75,
            errorHighInverse: e.pepper60,
            promoHighInverse: e.o2Purple,
            textNavigationBarPrimary: e.grey2,
            textNavigationBarSecondary: e.grey4,
            textNavigationSearchBarHint: e.grey4,
            textNavigationSearchBarText: e.grey2,
            textAppBar: e.grey5,
            textAppBarSelected: e.grey2,
            customTabsBackground: e.darkModeBlack,
            tagTextPromo: e.o2Purple30,
            tagTextActive: e.o2BluePrimary30,
            tagTextInactive: e.grey5,
            tagTextInfo: e.o2BluePrimary30,
            tagTextSuccess: e.o2Green40,
            tagTextWarning: e.o2Orange40,
            tagTextError: e.pepper40,
            tagBackgroundPromo: e.darkModeGrey6,
            tagBackgroundActive: e.darkModeGrey6,
            tagBackgroundInactive: e.darkModeGrey6,
            tagBackgroundInfo: e.darkModeGrey6,
            tagBackgroundSuccess: e.darkModeGrey6,
            tagBackgroundWarning: e.darkModeGrey6,
            tagBackgroundError: e.darkModeGrey6,
            tagTextPromoInverse: e.o2Purple30,
            tagTextActiveInverse: e.o2BluePrimary30,
            tagTextInactiveInverse: e.grey5,
            tagTextInfoInverse: e.o2BluePrimary30,
            tagTextSuccessInverse: e.o2Green40,
            tagTextWarningInverse: e.o2Orange40,
            tagTextErrorInverse: e.pepper40,
            tagBackgroundPromoInverse: e.darkModeGrey6,
            tagBackgroundActiveInverse: e.darkModeGrey6,
            tagBackgroundInactiveInverse: e.darkModeGrey6,
            tagBackgroundInfoInverse: e.darkModeGrey6,
            tagBackgroundSuccessInverse: e.darkModeGrey6,
            tagBackgroundWarningInverse: e.darkModeGrey6,
            tagBackgroundErrorInverse: e.darkModeGrey6,
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
