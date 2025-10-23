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
    getTuSkin: function() {
        return d;
    },
    palette: function() {
        return e;
    }
});
const _constants = require("./constants.js");
const _color = require("../utils/color.js");
const e = {
    primary: "#2B3447",
    primary10: "#EAEBED",
    primary15: "#D5D6DA",
    primary45: "#555D6C",
    primary65: "#202735",
    primary80: "#161A24",
    blue: "#4343FF",
    blue10: "#ECECFF",
    blue20: "#C7C7FF",
    blue30: "#A1A1FF",
    blue70: "#3232B9",
    orange: "#EFE384",
    orange20: "#FAF7DA",
    orange55: "#D5C77D",
    orange65: "#BBAF6F",
    orange70: "#958946",
    red: "#CB4D3A",
    red10: "#FAEDEB",
    red40: "#DB8275",
    red55: "#BB4736",
    red70: "#8E3629",
    red80: "#5B231A",
    green: "#00D19D",
    green10: "#E5FAF5",
    green40: "#A1DFCF",
    green75: "#007D5E",
    grey1: "#F2F4FF",
    grey2: "#D1D5E4",
    grey3: "#B0B6CA",
    grey4: "#8F97AF",
    grey5: "#6E7894",
    grey6: "#58617A",
    grey7: "#414B61",
    grey8: "#2B3447",
    grey9: "#031A34",
    white: "#FFFFFF",
    black: "#000000",
    darkModeBlack: "#161A24",
    darkModeGrey: "#202735",
    darkModeGrey6: "#2B3447"
}, d = ()=>({
        name: _constants.TU_SKIN,
        colors: {
            appBarBackground: e.white,
            background: e.white,
            backgroundContainer: e.white,
            backgroundContainerError: e.red10,
            backgroundContainerHover: (0, _color.applyAlpha)(e.grey9, 0.05),
            backgroundContainerPressed: (0, _color.applyAlpha)(e.grey9, 0.08),
            backgroundContainerBrand: e.primary,
            backgroundContainerBrandHover: (0, _color.applyAlpha)(e.grey9, 0.2),
            backgroundContainerBrandPressed: (0, _color.applyAlpha)(e.grey9, 0.4),
            backgroundContainerBrandOverInverse: e.primary80,
            backgroundContainerAlternative: e.grey1,
            backgroundBrand: e.primary,
            backgroundBrandSecondary: e.blue,
            backgroundOverlay: (0, _color.applyAlpha)(e.primary, 0.8),
            backgroundSkeleton: e.grey2,
            backgroundSkeletonInverse: e.primary65,
            navigationBarBackground: e.primary,
            backgroundAlternative: e.grey1,
            backgroundBrandTop: e.primary,
            backgroundBrandBottom: e.primary,
            skeletonWave: e.grey2,
            borderLow: e.grey1,
            border: e.grey2,
            borderHigh: e.grey5,
            borderSelected: e.blue,
            coverBackgroundHover: (0, _color.applyAlpha)(e.grey9, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.grey9, 0.35),
            buttonDangerBackground: e.red,
            buttonDangerBackgroundPressed: e.red55,
            buttonDangerBackgroundHover: e.red55,
            buttonLinkDangerBackgroundPressed: e.red10,
            buttonLinkDangerBackgroundInverse: e.white,
            buttonLinkDangerBackgroundInversePressed: e.red10,
            buttonLinkBackgroundPressed: e.blue10,
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonPrimaryBackground: e.primary,
            buttonPrimaryBackgroundInverse: e.white,
            buttonPrimaryBackgroundPressed: e.primary45,
            buttonPrimaryBackgroundHover: e.primary45,
            buttonPrimaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.8),
            buttonSecondaryBorder: e.blue,
            buttonSecondaryBorderPressed: e.blue70,
            buttonSecondaryBackgroundHover: e.blue10,
            buttonSecondaryBackgroundPressed: e.blue10,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.white,
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.1),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.1),
            textButtonPrimary: e.white,
            textButtonPrimaryInverse: e.primary,
            textButtonPrimaryInversePressed: e.primary,
            textButtonSecondary: e.blue,
            textButtonSecondaryPressed: e.blue70,
            textButtonSecondaryInverse: e.white,
            textButtonSecondaryInversePressed: e.white,
            textLink: e.blue,
            textLinkInverse: e.white,
            textLinkDanger: e.red,
            textLinkSnackbar: e.white,
            textActivated: e.primary,
            textBrand: e.blue,
            inputBorder: e.grey5,
            inputBorderInverse: e.white,
            completedStep: e.primary,
            completedStepInverse: e.primary80,
            control: e.grey5,
            controlActivated: e.primary,
            controlInverse: e.white,
            controlActivatedInverse: e.white,
            controlError: e.red,
            barTrack: e.grey2,
            barTrackInverse: (0, _color.applyAlpha)(e.white, 0.36),
            loadingBar: e.green40,
            loadingBarBackground: e.green,
            toggleAndroidInactive: e.grey2,
            toggleAndroidBackgroundActive: e.primary15,
            iosControlKnob: e.white,
            controlKnobInverse: e.primary,
            divider: e.grey2,
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.2),
            navigationBarDivider: e.primary,
            badge: e.blue,
            feedbackErrorBackground: e.red,
            feedbackInfoBackground: e.primary,
            brand: e.blue,
            brandHigh: e.blue70,
            inverse: e.white,
            neutralHigh: e.grey9,
            neutralMedium: e.grey5,
            neutralMediumInverse: e.grey5,
            neutralLow: e.grey1,
            neutralLowAlternative: e.grey2,
            textPrimary: e.grey9,
            textPrimaryInverse: e.white,
            textSecondary: e.grey6,
            textSecondaryInverse: e.grey3,
            error: e.red,
            textError: e.red,
            textErrorInverse: e.white,
            success: e.green,
            warning: e.orange,
            promo: e.blue,
            highlight: e.red40,
            successLow: e.green10,
            warningLow: e.orange20,
            errorLow: e.red10,
            promoLow: e.blue10,
            brandLow: e.blue10,
            successHigh: e.green75,
            warningHigh: e.orange70,
            errorHigh: e.red70,
            promoHigh: e.blue,
            successHighInverse: e.green75,
            warningHighInverse: e.orange70,
            errorHighInverse: e.red70,
            promoHighInverse: e.blue,
            textNavigationBarPrimary: e.white,
            textNavigationBarSecondary: e.grey1,
            textNavigationSearchBarHint: e.grey1,
            textNavigationSearchBarText: e.white,
            textAppBar: e.grey6,
            textAppBarSelected: e.primary,
            customTabsBackground: e.white,
            tagTextPromo: e.blue,
            tagTextActive: e.blue,
            tagTextInactive: e.grey5,
            tagTextInfo: e.blue,
            tagTextSuccess: e.green75,
            tagTextWarning: e.orange70,
            tagTextError: e.red70,
            tagBackgroundPromo: e.blue10,
            tagBackgroundActive: e.blue10,
            tagBackgroundInactive: e.grey1,
            tagBackgroundInfo: e.blue10,
            tagBackgroundSuccess: e.green10,
            tagBackgroundWarning: e.orange20,
            tagBackgroundError: e.red10,
            tagTextPromoInverse: e.blue,
            tagTextActiveInverse: e.blue,
            tagTextInactiveInverse: e.grey5,
            tagTextInfoInverse: e.blue,
            tagTextSuccessInverse: e.green75,
            tagTextWarningInverse: e.orange70,
            tagTextErrorInverse: e.red70,
            tagBackgroundPromoInverse: e.blue10,
            tagBackgroundActiveInverse: e.blue10,
            tagBackgroundInactiveInverse: e.grey1,
            tagBackgroundInfoInverse: e.blue10,
            tagBackgroundSuccessInverse: e.green10,
            tagBackgroundWarningInverse: e.orange20,
            tagBackgroundErrorInverse: e.red10,
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
            borderSelected: e.blue30,
            coverBackgroundHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.red,
            buttonDangerBackgroundPressed: e.red80,
            buttonDangerBackgroundHover: e.red80,
            buttonLinkDangerBackgroundPressed: e.red10,
            buttonLinkDangerBackgroundInverse: (0, _color.applyAlpha)(e.white, 0),
            buttonLinkDangerBackgroundInversePressed: e.red10,
            buttonLinkBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonPrimaryBackground: e.grey2,
            buttonPrimaryBackgroundInverse: e.grey2,
            buttonPrimaryBackgroundPressed: e.grey3,
            buttonPrimaryBackgroundHover: e.grey3,
            buttonPrimaryBackgroundInversePressed: e.grey3,
            buttonSecondaryBackgroundPressed: (0, _color.applyAlpha)(e.grey2, 0.15),
            buttonSecondaryBorder: e.grey2,
            buttonSecondaryBackgroundHover: (0, _color.applyAlpha)(e.grey2, 0.15),
            buttonSecondaryBorderPressed: e.grey2,
            buttonSecondaryBorderInverse: e.grey2,
            buttonSecondaryBorderInversePressed: e.grey2,
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.grey2, 0.15),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.grey2, 0.15),
            textButtonPrimary: e.primary,
            textButtonPrimaryInverse: e.primary,
            textButtonPrimaryInversePressed: e.primary,
            textButtonSecondary: e.grey2,
            textButtonSecondaryPressed: e.grey2,
            textButtonSecondaryInverse: e.grey2,
            textButtonSecondaryInversePressed: e.grey2,
            textLink: e.blue30,
            textLinkInverse: e.blue30,
            textLinkDanger: e.red,
            textLinkSnackbar: e.blue30,
            textActivated: e.blue30,
            textBrand: e.blue30,
            inputBorder: e.grey5,
            inputBorderInverse: e.grey5,
            completedStep: e.grey2,
            completedStepInverse: e.grey2,
            control: e.darkModeGrey6,
            controlActivated: e.blue30,
            controlInverse: e.darkModeGrey6,
            controlActivatedInverse: e.blue30,
            controlError: e.red,
            barTrack: e.darkModeGrey6,
            barTrackInverse: e.darkModeGrey6,
            loadingBar: e.green40,
            loadingBarBackground: e.green,
            toggleAndroidInactive: e.grey4,
            toggleAndroidBackgroundActive: e.blue20,
            iosControlKnob: e.grey2,
            controlKnobInverse: e.grey2,
            divider: (0, _color.applyAlpha)(e.white, 0.05),
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.05),
            navigationBarDivider: e.darkModeBlack,
            badge: e.blue30,
            feedbackErrorBackground: e.red,
            feedbackInfoBackground: e.darkModeGrey,
            brand: e.blue30,
            brandHigh: (0, _color.applyAlpha)(e.white, 0.05),
            inverse: e.grey2,
            neutralHigh: e.grey2,
            neutralMedium: e.grey5,
            neutralMediumInverse: e.grey5,
            neutralLow: e.darkModeGrey6,
            neutralLowAlternative: e.darkModeGrey6,
            textPrimary: e.grey2,
            textPrimaryInverse: e.grey2,
            textSecondary: e.grey3,
            textSecondaryInverse: e.grey3,
            error: e.red,
            textError: e.red,
            textErrorInverse: e.red,
            success: e.green,
            warning: e.orange,
            promo: e.blue,
            highlight: e.red40,
            successLow: e.darkModeGrey6,
            warningLow: e.darkModeGrey6,
            errorLow: e.darkModeGrey6,
            promoLow: e.darkModeGrey6,
            brandLow: e.darkModeGrey6,
            successHigh: e.green40,
            warningHigh: e.orange55,
            errorHigh: e.red40,
            promoHigh: e.blue30,
            successHighInverse: e.green75,
            warningHighInverse: e.orange70,
            errorHighInverse: e.red70,
            promoHighInverse: e.blue70,
            textNavigationBarPrimary: e.grey2,
            textNavigationBarSecondary: e.grey4,
            textNavigationSearchBarHint: e.grey4,
            textNavigationSearchBarText: e.grey2,
            textAppBar: e.grey5,
            textAppBarSelected: e.grey2,
            customTabsBackground: e.darkModeBlack,
            tagTextPromo: e.blue30,
            tagTextActive: e.blue30,
            tagTextInactive: e.grey5,
            tagTextInfo: e.blue30,
            tagTextSuccess: e.green40,
            tagTextWarning: e.orange55,
            tagTextError: e.red40,
            tagBackgroundPromo: e.darkModeGrey6,
            tagBackgroundActive: e.darkModeGrey6,
            tagBackgroundInactive: e.darkModeGrey6,
            tagBackgroundInfo: e.darkModeGrey6,
            tagBackgroundSuccess: e.darkModeGrey6,
            tagBackgroundWarning: e.darkModeGrey6,
            tagBackgroundError: e.darkModeGrey6,
            tagTextPromoInverse: e.blue30,
            tagTextActiveInverse: e.blue30,
            tagTextInactiveInverse: e.grey5,
            tagTextInfoInverse: e.blue30,
            tagTextSuccessInverse: e.green40,
            tagTextWarningInverse: e.orange55,
            tagTextErrorInverse: e.red40,
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
            button: "999px",
            checkbox: "2px",
            container: "16px",
            indicator: "999px",
            input: "12px",
            legacyDisplay: "16px",
            popup: "8px",
            sheet: "16px",
            mediaSmall: "8px"
        },
        textPresets: {
            button: {
                weight: "medium"
            },
            cardTitle: {
                weight: "medium"
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
                weight: "medium"
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
                weight: "medium"
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
                weight: "medium"
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
                weight: "medium"
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
                weight: "medium"
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
                weight: "medium"
            },
            title1: {
                weight: "medium"
            },
            title2: {
                weight: "medium"
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
                weight: "medium"
            }
        },
        themeVariants: {
            successFeedback: "inverse",
            brandLoadingScreen: "inverse"
        }
    });
