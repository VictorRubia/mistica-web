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
    getO2NewSkin: function() {
        return a;
    },
    palette: function() {
        return e;
    }
});
const _constants = require("./constants.js");
const _color = require("../utils/color.js");
const e = {
    beyondBlue: "#0050FF",
    beyondBlue10: "#E5EDFF",
    beyondBlue15: "#CCDCFF",
    beyondBlue30: "#80A7FF",
    beyondBlue40: "#4D84FF",
    beyondBlue45: "#0A73EB",
    beyondBlue55: "#0044D9",
    beyondBlue70: "#0038B2",
    beyondBlue90: "#001033",
    darkBlue: "#00008C",
    o2BlueLight: "#82DCFA",
    o2BlueLight30: "#C0EEFD",
    o2BlueLight35: "#B4EAFC",
    o2Green: "#00DC7D",
    o2Green10: "#E5FBF2",
    o2Green40: "#4CE7A4",
    o2Green80: "#006338",
    o2Yellow: "#FADC00",
    o2Orange: "#FFA55A",
    o2Orange10: "#FFF6EE",
    o2Orange40: "#FFC08B",
    o2Orange60: "#F06C00",
    o2Orange75: "#996336",
    o2Pink: "#FA96FF",
    o2Pink15: "#FEEAFF",
    o2Pink30: "#FDCAFF",
    o2Pink80: "#704373",
    o2Red: "#FF5A5A",
    o2Red10: "#FFEEEE",
    o2Red20: "#FFCDCD",
    o2Red40: "#FF8B8B",
    o2Red45: "#FF7B7B",
    o2Red60: "#CC4848",
    o2Red65: "#BF4444",
    grey20: "#F3F3F5",
    grey30: "#D9D9DD",
    grey40: "#B4B4BE",
    grey45: "#8A8A98",
    grey60: "#6E6E77",
    grey80: "#3C3C46",
    black: "#00001E",
    white: "#FFFFFF",
    darkModeBlack: "#00001C",
    darkModeGrey: "#08132B",
    darkModeGrey6: "#14213D",
    darkModeBeyondBlue: "#1A62FF"
}, a = ()=>({
        name: _constants.O2_NEW_SKIN,
        colors: {
            background: e.white,
            backgroundAlternative: e.grey20,
            backgroundBrand: `linear-gradient(180deg, ${e.darkBlue} 0%, ${e.beyondBlue} 64%, ${e.beyondBlue45} 100%)`,
            backgroundBrandSecondary: e.beyondBlue,
            backgroundContainer: e.white,
            backgroundContainerError: e.o2Red10,
            backgroundContainerHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.05),
            backgroundContainerPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.08),
            backgroundContainerBrand: `linear-gradient(180deg, ${e.darkBlue} 0%, ${e.beyondBlue} 64%, ${e.beyondBlue45} 100%)`,
            backgroundContainerBrandHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.2),
            backgroundContainerBrandPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.4),
            backgroundContainerBrandOverInverse: e.beyondBlue70,
            backgroundContainerAlternative: e.grey20,
            backgroundOverlay: (0, _color.applyAlpha)(e.black, 0.6),
            backgroundSkeleton: e.grey30,
            backgroundSkeletonInverse: e.beyondBlue70,
            backgroundBrandTop: e.darkBlue,
            backgroundBrandBottom: e.beyondBlue45,
            appBarBackground: e.white,
            navigationBarBackground: e.darkBlue,
            skeletonWave: e.grey30,
            borderLow: e.grey20,
            border: e.grey30,
            borderHigh: e.grey80,
            borderSelected: e.beyondBlue,
            coverBackgroundHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.o2Red60,
            buttonDangerBackgroundPressed: e.o2Red65,
            buttonDangerBackgroundHover: e.o2Red65,
            buttonLinkDangerBackgroundPressed: e.o2Red10,
            buttonLinkDangerBackgroundInverse: e.white,
            buttonLinkDangerBackgroundInversePressed: e.o2Red10,
            buttonLinkBackgroundPressed: e.beyondBlue10,
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonPrimaryBackground: e.beyondBlue,
            buttonPrimaryBackgroundInverse: e.white,
            buttonPrimaryBackgroundPressed: e.beyondBlue70,
            buttonPrimaryBackgroundHover: e.beyondBlue70,
            buttonPrimaryBackgroundInversePressed: e.beyondBlue30,
            buttonSecondaryBorder: e.beyondBlue,
            buttonSecondaryBorderPressed: e.beyondBlue70,
            buttonSecondaryBackgroundHover: e.beyondBlue10,
            buttonSecondaryBackgroundPressed: e.beyondBlue10,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.beyondBlue30,
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.15),
            textButtonPrimary: e.white,
            textButtonPrimaryInverse: e.beyondBlue,
            textButtonPrimaryInversePressed: e.beyondBlue70,
            textButtonSecondary: e.beyondBlue,
            textButtonSecondaryPressed: e.beyondBlue70,
            textButtonSecondaryInverse: e.white,
            textButtonSecondaryInversePressed: e.white,
            textLink: e.beyondBlue,
            textLinkInverse: e.white,
            textLinkDanger: e.o2Red65,
            textLinkSnackbar: e.beyondBlue30,
            textActivated: e.beyondBlue,
            textBrand: e.beyondBlue,
            inputBorder: e.grey45,
            inputBorderInverse: e.white,
            completedStep: e.beyondBlue,
            completedStepInverse: e.beyondBlue70,
            control: e.grey45,
            controlActivated: e.beyondBlue,
            controlInverse: e.white,
            controlActivatedInverse: e.white,
            controlError: e.o2Red60,
            barTrack: e.grey30,
            barTrackInverse: (0, _color.applyAlpha)(e.white, 0.3),
            loadingBar: e.beyondBlue,
            loadingBarBackground: e.grey20,
            toggleAndroidInactive: e.grey30,
            toggleAndroidBackgroundActive: e.beyondBlue15,
            iosControlKnob: e.white,
            controlKnobInverse: e.beyondBlue,
            divider: e.grey30,
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.2),
            navigationBarDivider: e.darkBlue,
            badge: e.o2Red65,
            feedbackErrorBackground: e.o2Red60,
            feedbackInfoBackground: e.black,
            brand: e.beyondBlue,
            brandHigh: e.beyondBlue70,
            inverse: e.white,
            neutralHigh: e.black,
            neutralMedium: e.grey60,
            neutralMediumInverse: e.grey60,
            neutralLow: e.grey20,
            neutralLowAlternative: e.grey30,
            textPrimary: e.black,
            textPrimaryInverse: e.white,
            textSecondary: e.grey60,
            textSecondaryInverse: e.beyondBlue10,
            success: e.o2Green,
            warning: e.o2Orange60,
            error: e.o2Red65,
            textError: e.o2Red65,
            textErrorInverse: e.white,
            promo: e.o2Pink,
            highlight: e.o2Pink80,
            successLow: e.o2Green10,
            warningLow: e.o2Orange10,
            errorLow: e.o2Red10,
            promoLow: e.o2Pink15,
            brandLow: e.beyondBlue10,
            successHigh: e.o2Green80,
            warningHigh: e.o2Orange75,
            errorHigh: e.o2Red65,
            promoHigh: e.o2Pink80,
            successHighInverse: e.o2Green80,
            warningHighInverse: e.o2Orange75,
            errorHighInverse: e.o2Red65,
            promoHighInverse: e.o2Pink80,
            textNavigationBarPrimary: e.white,
            textNavigationBarSecondary: e.beyondBlue30,
            textNavigationSearchBarHint: e.beyondBlue30,
            textNavigationSearchBarText: e.white,
            textAppBar: e.grey60,
            textAppBarSelected: e.beyondBlue,
            customTabsBackground: e.beyondBlue,
            tagTextPromo: e.o2Pink80,
            tagTextActive: e.beyondBlue,
            tagTextInactive: e.grey60,
            tagTextInfo: e.beyondBlue,
            tagTextSuccess: e.o2Green80,
            tagTextWarning: e.o2Orange75,
            tagTextError: e.o2Red65,
            tagBackgroundPromo: e.o2Pink15,
            tagBackgroundActive: e.beyondBlue10,
            tagBackgroundInactive: e.grey20,
            tagBackgroundInfo: e.beyondBlue10,
            tagBackgroundSuccess: e.o2Green10,
            tagBackgroundWarning: e.o2Orange10,
            tagBackgroundError: e.o2Red10,
            tagTextPromoInverse: e.o2Pink80,
            tagTextActiveInverse: e.beyondBlue,
            tagTextInactiveInverse: e.grey60,
            tagTextInfoInverse: e.beyondBlue,
            tagTextSuccessInverse: e.o2Green80,
            tagTextWarningInverse: e.o2Orange75,
            tagTextErrorInverse: e.o2Red65,
            tagBackgroundPromoInverse: e.o2Pink15,
            tagBackgroundActiveInverse: e.beyondBlue10,
            tagBackgroundInactiveInverse: e.grey20,
            tagBackgroundInfoInverse: e.beyondBlue10,
            tagBackgroundSuccessInverse: e.o2Green10,
            tagBackgroundWarningInverse: e.o2Orange10,
            tagBackgroundErrorInverse: e.o2Red10,
            cardContentOverlay: `linear-gradient(180deg, ${(0, _color.applyAlpha)(e.beyondBlue, 0)} 0%, ${(0, _color.applyAlpha)(e.beyondBlue, 0.4)} 30%, ${(0, _color.applyAlpha)(e.beyondBlue, 1)} 100%)`
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
            skeletonWave: e.grey80,
            borderLow: e.darkModeBlack,
            border: e.darkModeGrey,
            borderHigh: e.grey45,
            borderSelected: e.beyondBlue30,
            coverBackgroundHover: (0, _color.applyAlpha)(e.darkModeBlack, 0.25),
            coverBackgroundPressed: (0, _color.applyAlpha)(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.o2Red60,
            buttonDangerBackgroundPressed: e.o2Red65,
            buttonDangerBackgroundHover: e.o2Red65,
            buttonLinkDangerBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkDangerBackgroundInverse: (0, _color.applyAlpha)(e.white, 0),
            buttonLinkDangerBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonLinkBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.08),
            buttonPrimaryBackground: e.darkModeBeyondBlue,
            buttonPrimaryBackgroundInverse: e.darkModeBeyondBlue,
            buttonPrimaryBackgroundPressed: e.beyondBlue55,
            buttonPrimaryBackgroundHover: e.beyondBlue55,
            buttonPrimaryBackgroundInversePressed: e.beyondBlue55,
            buttonSecondaryBackgroundPressed: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBorder: e.white,
            buttonSecondaryBorderPressed: e.white,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.white,
            buttonSecondaryBackgroundHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInverseHover: (0, _color.applyAlpha)(e.white, 0.15),
            buttonSecondaryBackgroundInversePressed: (0, _color.applyAlpha)(e.white, 0.15),
            textButtonPrimary: e.white,
            textButtonPrimaryInverse: e.white,
            textButtonPrimaryInversePressed: e.white,
            textButtonSecondary: e.grey30,
            textButtonSecondaryPressed: e.grey30,
            textButtonSecondaryInverse: e.grey30,
            textButtonSecondaryInversePressed: e.grey30,
            textLink: e.beyondBlue40,
            textLinkInverse: e.beyondBlue40,
            textLinkDanger: e.o2Red45,
            textLinkSnackbar: e.beyondBlue30,
            textActivated: e.beyondBlue30,
            textBrand: e.beyondBlue30,
            inputBorder: e.grey45,
            inputBorderInverse: e.grey45,
            completedStep: e.darkModeBeyondBlue,
            completedStepInverse: e.darkModeBeyondBlue,
            control: e.grey45,
            controlActivated: e.darkModeBeyondBlue,
            controlInverse: e.grey45,
            controlActivatedInverse: e.darkModeBeyondBlue,
            controlError: e.o2Red45,
            barTrack: e.darkModeGrey6,
            barTrackInverse: e.darkModeGrey6,
            loadingBar: e.darkModeBeyondBlue,
            loadingBarBackground: e.darkModeGrey6,
            toggleAndroidInactive: e.grey20,
            toggleAndroidBackgroundActive: e.beyondBlue15,
            iosControlKnob: e.grey30,
            controlKnobInverse: e.grey30,
            badge: e.o2Red65,
            feedbackErrorBackground: e.o2Red60,
            feedbackInfoBackground: e.darkModeGrey6,
            divider: (0, _color.applyAlpha)(e.white, 0.1),
            dividerInverse: (0, _color.applyAlpha)(e.white, 0.1),
            navigationBarDivider: e.darkModeBlack,
            brand: e.beyondBlue30,
            brandHigh: (0, _color.applyAlpha)(e.white, 0.05),
            inverse: e.grey30,
            neutralHigh: e.grey30,
            neutralMedium: e.grey60,
            neutralMediumInverse: e.grey60,
            neutralLow: e.darkModeGrey6,
            neutralLowAlternative: e.darkModeGrey6,
            textPrimary: e.grey30,
            textPrimaryInverse: e.grey30,
            textSecondary: e.grey45,
            textSecondaryInverse: e.grey45,
            success: e.o2Green,
            warning: e.o2Orange,
            error: e.o2Red45,
            textError: e.o2Red45,
            textErrorInverse: e.o2Red45,
            promo: e.o2Pink,
            highlight: e.o2Pink,
            successLow: e.darkModeGrey6,
            warningLow: e.darkModeGrey6,
            errorLow: e.darkModeGrey6,
            promoLow: e.darkModeGrey6,
            brandLow: e.darkModeGrey6,
            successHigh: e.o2Green40,
            warningHigh: e.o2Orange40,
            errorHigh: e.o2Red40,
            promoHigh: e.o2Pink30,
            successHighInverse: e.o2Green80,
            warningHighInverse: e.o2Orange75,
            errorHighInverse: e.o2Red65,
            promoHighInverse: e.o2Pink,
            textNavigationBarPrimary: e.grey30,
            textNavigationBarSecondary: e.grey45,
            textNavigationSearchBarHint: e.grey45,
            textNavigationSearchBarText: e.grey30,
            textAppBar: e.grey45,
            textAppBarSelected: e.beyondBlue40,
            customTabsBackground: e.darkModeBlack,
            tagTextPromo: e.o2Pink,
            tagTextActive: e.beyondBlue30,
            tagTextInactive: e.grey40,
            tagTextInfo: e.beyondBlue30,
            tagTextSuccess: e.o2Green,
            tagTextWarning: e.o2Orange,
            tagTextError: e.o2Red45,
            tagBackgroundPromo: e.darkModeGrey6,
            tagBackgroundActive: e.darkModeGrey6,
            tagBackgroundInactive: e.darkModeGrey6,
            tagBackgroundInfo: e.darkModeGrey6,
            tagBackgroundSuccess: e.darkModeGrey6,
            tagBackgroundWarning: e.darkModeGrey6,
            tagBackgroundError: e.darkModeGrey6,
            tagTextPromoInverse: e.o2Pink,
            tagTextActiveInverse: e.beyondBlue30,
            tagTextInactiveInverse: e.grey40,
            tagTextInfoInverse: e.beyondBlue30,
            tagTextSuccessInverse: e.o2Green,
            tagTextWarningInverse: e.o2Orange,
            tagTextErrorInverse: e.o2Red45,
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
            successFeedback: "inverse",
            brandLoadingScreen: "inverse"
        }
    });
