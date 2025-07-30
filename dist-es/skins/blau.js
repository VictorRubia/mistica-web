import { BLAU_SKIN as a } from "./constants.js";
import { applyAlpha as r } from "../utils/color.js";
const e = {
    blauBluePrimary: "#00B6F1",
    blauBluePrimary10: "#F7FDFF",
    blauBluePrimary20: "#E5F6FD",
    blauBluePrimary30: "#B3E9FB",
    blauBlueSecondary: "#0072BC",
    blauBlueSecondary10: "#E5F1F9",
    blauBlueSecondary20: "#B2D4EC",
    blauBlueSecondary30: "#80B7DF",
    blauBlueSecondary60: "#005A99",
    blauPurple: "#7814B3",
    blauPurple10: "#F1E7F7",
    blauPurple30: "#BB89D9",
    blauYellow: "#FFA922",
    blauYellow10: "#FFF6E9",
    blauYellow40: "#FFC364",
    blauYellow60: "#F09500",
    blauYellow65: "#D28200",
    blauYellow70: "#996614",
    blauGreen: "#30D300",
    blauGreen10: "#EAFBE5",
    blauGreen30: "#97E980",
    blauGreen70: "#1D7F00",
    blauRed: "#D12937",
    blauRed10: "#FEECE8",
    blauRed20: "#FCC7B9",
    blauRed30: "#FA9E87",
    blauRed40: "#F97C5D",
    blauRed70: "#BC3310",
    grey1: "#F6F6F6",
    grey2: "#F2F2F2",
    grey3: "#DDDDDD",
    grey4: "#8A8C90",
    grey5: "#666666",
    grey6: "#000000",
    white: "#FFFFFF",
    darkModeBlack: "#191919",
    darkModeGrey: "#242424",
    darkModeGrey5: "#6D7D88",
    darkModeGrey6: "#313235"
}, d = ()=>({
        name: a,
        colors: {
            background: e.white,
            backgroundAlternative: e.blauBluePrimary20,
            backgroundBrand: e.blauBluePrimary,
            backgroundBrandSecondary: e.blauBluePrimary,
            backgroundContainer: e.white,
            backgroundContainerError: e.blauRed10,
            backgroundContainerHover: r(e.blauBlueSecondary, 0.05),
            backgroundContainerPressed: r(e.blauBlueSecondary, 0.08),
            backgroundContainerBrand: e.blauBlueSecondary,
            backgroundContainerBrandHover: r(e.darkModeBlack, 0.2),
            backgroundContainerBrandPressed: r(e.darkModeBlack, 0.4),
            backgroundContainerBrandOverInverse: e.blauBlueSecondary60,
            backgroundContainerAlternative: e.blauBluePrimary20,
            backgroundOverlay: r(e.blauBlueSecondary, 0.75),
            backgroundSkeleton: e.grey3,
            backgroundSkeletonInverse: e.blauBlueSecondary,
            backgroundBrandTop: e.blauBluePrimary,
            backgroundBrandBottom: e.blauBluePrimary,
            appBarBackground: e.white,
            navigationBarBackground: e.blauBluePrimary,
            skeletonWave: e.grey2,
            borderLow: e.grey1,
            border: e.grey3,
            borderHigh: e.grey5,
            borderSelected: e.blauBlueSecondary60,
            completedStep: e.blauBlueSecondary,
            completedStepInverse: e.blauBlueSecondary60,
            coverBackgroundHover: r(e.darkModeBlack, 0.25),
            coverBackgroundPressed: r(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.blauRed,
            buttonDangerBackgroundPressed: e.blauRed70,
            buttonDangerBackgroundHover: e.blauRed70,
            buttonLinkDangerBackgroundPressed: e.blauRed10,
            buttonLinkDangerBackgroundInverse: e.white,
            buttonLinkDangerBackgroundInversePressed: e.blauRed10,
            buttonLinkBackgroundPressed: e.blauPurple10,
            buttonLinkBackgroundInversePressed: r(e.white, 0.15),
            buttonPrimaryBackground: e.blauBlueSecondary,
            buttonPrimaryBackgroundInverse: e.white,
            buttonPrimaryBackgroundPressed: e.blauBlueSecondary60,
            buttonPrimaryBackgroundHover: e.blauBlueSecondary60,
            buttonPrimaryBackgroundInversePressed: e.blauBluePrimary30,
            buttonSecondaryBorder: e.blauBlueSecondary,
            buttonSecondaryBorderPressed: e.blauBlueSecondary60,
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBackgroundHover: e.blauBlueSecondary10,
            buttonSecondaryBackgroundPressed: e.blauBlueSecondary10,
            buttonSecondaryBorderInversePressed: e.white,
            buttonSecondaryBackgroundInverseHover: r(e.white, 0.2),
            buttonSecondaryBackgroundInversePressed: r(e.white, 0.2),
            textButtonPrimary: e.white,
            textButtonPrimaryInverse: e.blauBlueSecondary,
            textButtonPrimaryInversePressed: e.blauBlueSecondary60,
            textButtonSecondary: e.blauBlueSecondary,
            textButtonSecondaryPressed: e.blauBlueSecondary60,
            textButtonSecondaryInverse: e.white,
            textButtonSecondaryInversePressed: e.white,
            textLink: e.blauPurple,
            textLinkInverse: e.white,
            textLinkDanger: e.blauRed,
            textLinkSnackbar: e.blauPurple30,
            textActivated: e.blauBlueSecondary,
            textBrand: e.blauBlueSecondary,
            inputBorder: e.grey4,
            inputBorderInverse: e.white,
            control: e.grey4,
            controlActivated: e.blauBlueSecondary,
            controlInverse: e.blauBluePrimary30,
            controlActivatedInverse: e.white,
            controlError: e.blauRed,
            barTrack: e.grey3,
            barTrackInverse: r(e.grey6, 0.2),
            loadingBar: e.blauBlueSecondary,
            loadingBarBackground: e.blauBlueSecondary20,
            toggleAndroidInactive: e.grey2,
            toggleAndroidBackgroundActive: e.blauBlueSecondary30,
            iosControlKnob: e.white,
            controlKnobInverse: e.blauBlueSecondary,
            divider: e.grey3,
            dividerInverse: r(e.white, 0.2),
            navigationBarDivider: e.blauBluePrimary,
            badge: e.blauRed,
            feedbackErrorBackground: e.blauRed,
            feedbackInfoBackground: e.grey6,
            brand: e.blauBluePrimary,
            brandHigh: e.blauBlueSecondary60,
            inverse: e.white,
            neutralHigh: e.grey6,
            neutralMedium: e.grey5,
            neutralMediumInverse: e.grey5,
            neutralLow: e.grey1,
            neutralLowAlternative: e.grey2,
            textPrimary: e.grey6,
            textPrimaryInverse: e.white,
            textSecondary: e.grey5,
            textSecondaryInverse: e.blauBluePrimary20,
            error: e.blauRed,
            textError: e.blauRed,
            textErrorInverse: e.white,
            success: e.blauGreen70,
            warning: e.blauYellow65,
            promo: e.blauPurple,
            highlight: e.blauBluePrimary,
            successLow: e.blauGreen10,
            warningLow: e.blauYellow10,
            errorLow: e.blauRed10,
            promoLow: e.blauPurple10,
            brandLow: e.blauBluePrimary20,
            successHigh: e.blauGreen70,
            warningHigh: e.blauYellow70,
            errorHigh: e.blauRed70,
            promoHigh: e.blauPurple,
            successHighInverse: e.blauGreen70,
            warningHighInverse: e.blauYellow70,
            errorHighInverse: e.blauRed70,
            promoHighInverse: e.blauPurple,
            textNavigationBarPrimary: e.grey6,
            textNavigationBarSecondary: e.grey6,
            textNavigationSearchBarHint: e.grey6,
            textNavigationSearchBarText: e.grey6,
            textAppBar: e.grey5,
            textAppBarSelected: e.blauBlueSecondary60,
            customTabsBackground: e.blauBluePrimary,
            tagTextPromo: e.blauPurple,
            tagTextActive: e.blauBlueSecondary,
            tagTextInactive: e.grey5,
            tagTextInfo: e.blauBlueSecondary,
            tagTextSuccess: e.blauGreen70,
            tagTextWarning: e.blauYellow70,
            tagTextError: e.blauRed70,
            tagBackgroundPromo: e.blauPurple10,
            tagBackgroundActive: e.blauBluePrimary20,
            tagBackgroundInactive: e.grey1,
            tagBackgroundInfo: e.blauBluePrimary20,
            tagBackgroundSuccess: e.blauGreen10,
            tagBackgroundWarning: e.blauYellow10,
            tagBackgroundError: e.blauRed10,
            tagTextPromoInverse: e.blauPurple,
            tagTextActiveInverse: e.blauBlueSecondary,
            tagTextInactiveInverse: e.grey5,
            tagTextInfoInverse: e.blauBlueSecondary,
            tagTextSuccessInverse: e.blauGreen70,
            tagTextWarningInverse: e.blauYellow70,
            tagTextErrorInverse: e.blauRed70,
            tagBackgroundPromoInverse: e.blauPurple10,
            tagBackgroundActiveInverse: e.blauBluePrimary20,
            tagBackgroundInactiveInverse: e.grey1,
            tagBackgroundInfoInverse: e.blauBluePrimary20,
            tagBackgroundSuccessInverse: e.blauGreen10,
            tagBackgroundWarningInverse: e.blauYellow10,
            tagBackgroundErrorInverse: e.blauRed10,
            cardContentOverlay: `linear-gradient(180deg, ${r(e.grey6, 0)} 0%, ${r(e.grey6, 0.4)} 30%, ${r(e.grey6, 0.7)} 100%)`
        },
        darkModeColors: {
            background: e.darkModeBlack,
            backgroundAlternative: e.darkModeBlack,
            backgroundBrand: e.darkModeBlack,
            backgroundBrandSecondary: e.darkModeBlack,
            backgroundContainer: e.darkModeGrey,
            backgroundContainerError: e.darkModeGrey,
            backgroundContainerHover: r(e.white, 0.05),
            backgroundContainerPressed: r(e.white, 0.08),
            backgroundContainerBrand: e.darkModeGrey,
            backgroundContainerBrandHover: r(e.white, 0.03),
            backgroundContainerBrandPressed: r(e.white, 0.05),
            backgroundContainerBrandOverInverse: e.darkModeGrey,
            backgroundContainerAlternative: e.darkModeGrey,
            backgroundOverlay: r(e.darkModeGrey, 0.8),
            backgroundSkeleton: e.darkModeGrey,
            backgroundSkeletonInverse: e.darkModeGrey,
            backgroundBrandTop: e.darkModeBlack,
            backgroundBrandBottom: e.darkModeBlack,
            appBarBackground: e.darkModeGrey,
            navigationBarBackground: e.darkModeBlack,
            skeletonWave: e.grey5,
            borderLow: e.darkModeBlack,
            border: e.darkModeGrey,
            borderHigh: e.grey5,
            borderSelected: e.blauBlueSecondary60,
            completedStep: e.blauBlueSecondary,
            completedStepInverse: e.blauBlueSecondary,
            coverBackgroundHover: r(e.darkModeBlack, 0.25),
            coverBackgroundPressed: r(e.darkModeBlack, 0.35),
            buttonDangerBackground: e.blauRed,
            buttonDangerBackgroundPressed: e.blauRed70,
            buttonDangerBackgroundHover: e.blauRed70,
            buttonLinkDangerBackgroundPressed: r(e.blauRed, 0.3),
            buttonLinkDangerBackgroundInverse: r(e.white, 0),
            buttonLinkDangerBackgroundInversePressed: r(e.blauPurple, 0.3),
            buttonLinkBackgroundPressed: r(e.blauPurple, 0.3),
            buttonLinkBackgroundInversePressed: r(e.blauPurple, 0.3),
            buttonPrimaryBackground: e.blauBlueSecondary,
            buttonPrimaryBackgroundInverse: e.blauBlueSecondary,
            buttonPrimaryBackgroundPressed: e.blauBlueSecondary60,
            buttonPrimaryBackgroundHover: e.blauBlueSecondary60,
            buttonPrimaryBackgroundInversePressed: e.blauBlueSecondary60,
            buttonSecondaryBorder: e.white,
            buttonSecondaryBorderPressed: e.white,
            buttonSecondaryBackgroundHover: r(e.white, 0.15),
            buttonSecondaryBackgroundPressed: r(e.white, 0.15),
            buttonSecondaryBorderInverse: e.white,
            buttonSecondaryBorderInversePressed: e.white,
            buttonSecondaryBackgroundInverseHover: r(e.white, 0.15),
            buttonSecondaryBackgroundInversePressed: r(e.white, 0.15),
            textButtonPrimary: e.grey2,
            textButtonPrimaryInverse: e.grey2,
            textButtonPrimaryInversePressed: e.grey2,
            textButtonSecondary: e.grey2,
            textButtonSecondaryPressed: e.grey2,
            textButtonSecondaryInverse: e.grey2,
            textButtonSecondaryInversePressed: e.grey2,
            textLink: e.blauPurple30,
            textLinkInverse: e.blauPurple30,
            textLinkDanger: e.blauRed40,
            textLinkSnackbar: e.blauPurple30,
            textActivated: e.blauBluePrimary,
            textBrand: e.blauBluePrimary,
            inputBorder: e.darkModeGrey5,
            inputBorderInverse: e.darkModeGrey5,
            control: e.grey4,
            controlActivated: e.blauBlueSecondary,
            controlInverse: e.grey4,
            controlActivatedInverse: e.blauBlueSecondary,
            controlError: e.blauRed,
            barTrack: e.grey5,
            barTrackInverse: e.grey5,
            loadingBar: e.blauBluePrimary,
            loadingBarBackground: e.grey5,
            toggleAndroidInactive: e.grey3,
            toggleAndroidBackgroundActive: e.blauBluePrimary30,
            iosControlKnob: e.grey2,
            controlKnobInverse: e.grey2,
            divider: r(e.white, 0.09),
            dividerInverse: r(e.white, 0.05),
            navigationBarDivider: e.darkModeBlack,
            badge: e.blauRed,
            feedbackErrorBackground: e.blauRed,
            feedbackInfoBackground: e.darkModeGrey,
            brand: e.blauBluePrimary,
            brandHigh: r(e.white, 0.05),
            inverse: e.grey2,
            neutralHigh: e.grey2,
            neutralMedium: e.grey4,
            neutralMediumInverse: e.grey4,
            neutralLow: e.darkModeGrey6,
            neutralLowAlternative: e.darkModeGrey6,
            textPrimary: e.grey2,
            textPrimaryInverse: e.grey2,
            textSecondary: e.grey4,
            textSecondaryInverse: e.grey4,
            error: e.blauRed,
            textError: e.blauRed40,
            textErrorInverse: e.blauRed40,
            success: e.blauGreen,
            warning: e.blauYellow,
            promo: e.blauPurple,
            highlight: e.blauBluePrimary,
            successLow: e.darkModeGrey6,
            warningLow: e.darkModeGrey6,
            errorLow: e.darkModeGrey6,
            promoLow: e.darkModeGrey6,
            brandLow: e.darkModeGrey6,
            successHigh: e.blauGreen30,
            warningHigh: e.blauYellow40,
            errorHigh: e.blauRed40,
            promoHigh: e.blauPurple30,
            successHighInverse: e.blauGreen70,
            warningHighInverse: e.blauYellow70,
            errorHighInverse: e.blauRed70,
            promoHighInverse: e.blauPurple,
            textNavigationBarPrimary: e.grey2,
            textNavigationBarSecondary: e.grey4,
            textNavigationSearchBarHint: e.grey4,
            textNavigationSearchBarText: e.grey2,
            textAppBar: e.grey5,
            textAppBarSelected: e.grey2,
            customTabsBackground: e.darkModeBlack,
            tagTextPromo: e.blauPurple30,
            tagTextActive: e.blauBluePrimary,
            tagTextInactive: e.grey4,
            tagTextInfo: e.blauBluePrimary,
            tagTextSuccess: e.blauGreen30,
            tagTextWarning: e.blauYellow40,
            tagTextError: e.blauRed40,
            tagBackgroundPromo: e.darkModeGrey6,
            tagBackgroundActive: e.darkModeGrey6,
            tagBackgroundInactive: e.darkModeGrey6,
            tagBackgroundInfo: e.darkModeGrey6,
            tagBackgroundSuccess: e.darkModeGrey6,
            tagBackgroundWarning: e.darkModeGrey6,
            tagBackgroundError: e.darkModeGrey6,
            tagTextPromoInverse: e.blauPurple30,
            tagTextActiveInverse: e.blauBluePrimary,
            tagTextInactiveInverse: e.grey4,
            tagTextInfoInverse: e.blauBluePrimary,
            tagTextSuccessInverse: e.blauGreen30,
            tagTextWarningInverse: e.blauYellow40,
            tagTextErrorInverse: e.blauRed40,
            tagBackgroundPromoInverse: e.darkModeGrey6,
            tagBackgroundActiveInverse: e.darkModeGrey6,
            tagBackgroundInactiveInverse: e.darkModeGrey6,
            tagBackgroundInfoInverse: e.darkModeGrey6,
            tagBackgroundSuccessInverse: e.darkModeGrey6,
            tagBackgroundWarningInverse: e.darkModeGrey6,
            tagBackgroundErrorInverse: e.darkModeGrey6,
            cardContentOverlay: `linear-gradient(180deg, ${r(e.grey6, 0)} 0%, ${r(e.grey6, 0.4)} 30%, ${r(e.grey6, 0.7)} 100%)`
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
            successFeedback: "default",
            brandLoadingScreen: "default"
        }
    });
export { d as getBlauSkin, e as palette };
