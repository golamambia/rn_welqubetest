import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
const CurrentBodytype = ({ navigation }) => {
    return (
        <CommonLayout>
            <SafeAreaView style={{ flex: 1, padding: SIZES.padding }}>
                <View style={styles.header}>
                    <View style={styles.bar}>
                    </View>
                    <View style={styles.bar}>
                    </View>
                    <View style={[styles.bar, { backgroundColor: COLORS.cyan }]}>
                    </View>

                </View>
                <View style={styles.title}>
                    <Text style={styles.titleTextOne}>What's your current bodytype?</Text>
                    <Text style={styles.titleTextTwo}>Choose whatever suits you the best</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.card}>
                        <Image source={require("../assets/images/slimavater.png")} />
                        <View style={styles.cardInner}>
                            <View style={styles.unCheckBox}></View>
                            <Text style={styles.cardText}>Slender(Ectomorph) </Text>
                        </View>
                    </View>
                    <View style={[styles.card, styles.active]}>
                        <Image width source={require("../assets/images/woman_big_avtar.png")} />
                        <View style={styles.cardInner}>
                            <View style={[styles.unCheckBox, { backgroundColor: COLORS.cyan }]}></View>
                            <Text style={styles.cardText}>Average(Mesomorph) </Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={require("../assets/images/slimavater.png")} />
                        <View style={styles.cardInner}>
                            <View style={styles.unCheckBox}></View>
                            <Text style={styles.cardText}>Curvy(Endomorph) </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <BottonCommon handleSubmit={() => navigation.navigate('WorkoutsPerWeek')} label="Get Started" />
                    <BottonCommon handleSubmit={() => navigation.navigate('Lifestyle')} label="Previous Step" textColor={COLORS.gray} bgColor={COLORS.white} />
                </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: SIZES.large,
        flex: 1
    },
    bar: {
        width: 80,
        height: 6,
        marginHorizontal: 6,
        backgroundColor: COLORS.cilver
    },
    title: {
        // paddingTop: SIZES.h2,
        flex: 2
    },
    titleTextOne: {
        fontSize: SIZES.h2,
        color: COLORS.cyan,
        textAlign: "center"
    },
    titleTextTwo: {
        fontSize: SIZES.h5,
        color: COLORS.gray,
        paddingBottom: SIZES.h2,
        textAlign: "center"
    },
    main: {
        flex: 4,
        flexDirection: "row",

    },

    rowTwo: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    footer: {
        flex: 2,
        justifyContent: "center",
    },
    card: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2.5,
        height: 150,
        margin: 6,
        backgroundColor: COLORS.white
    },
    cardInner: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    unCheckBox: { height: 12, width: 16, borderWidth: 1, borderColor: COLORS.gray, marginHorizontal: 2 },
    cardText: { fontSize: SIZES.base, color: COLORS.gray },
    active: { flex: 1.2, height: 200, alignSelf: "flex-end", borderColor: COLORS.cyan, borderWidth: 1 },

})

export default CurrentBodytype;