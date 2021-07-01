import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
const Lifestyle = ({navigation}) => {
    return (
        <CommonLayout>
            <SafeAreaView style={{ flex: 1, padding: SIZES.padding }}>
                <View style={styles.header}>
                    <View style={styles.bar}>
                    </View>
                    <View style={[styles.bar, { backgroundColor: COLORS.cyan }]}>
                    </View>
                    <View style={styles.bar}>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleTextOne}>How active is your lifestyle?</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.rowOne}>
                    <View style={styles.cercle}>
                        <View style={styles.cercleInner}>
                            <Text style={styles.text}>No Activity</Text>
                        </View>
                    </View>
                    <View style={styles.cercle}>
                        <View style={styles.cercleInner}>
                            <Text style={styles.text}>Low Activity</Text>
                        </View>
                    </View>
                    <View style={styles.cercle}>
                        <View style={[styles.cercleInner, {backgroundColor: COLORS.cyan}]}>
                            <Text style={[styles.text, {color: COLORS.white}]}>Average Activity</Text>
                        </View>
                    </View>
                    
                    </View>
                    <View style={styles.rowTwo}>
                    <View style={styles.cercle}>
                        <View style={styles.cercleInner}>
                            <Text style={styles.text}>High Activity</Text>
                        </View>
                    </View>
                    <View style={styles.cercle}>
                        <View style={styles.cercleInner}>
                            <Text style={styles.text}>Excessive Activity</Text>
                        </View>
                    </View>        
                    </View>
                </View>
                <View style={styles.footer}>
                    <BottonCommon handleSubmit={() => navigation.navigate('CurrentBodytype')} label="Next Stap" />
                    <BottonCommon handleSubmit={() => navigation.navigate('Login')} label="Previous Step" textColor={COLORS.gray} bgColor={COLORS.white} />
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
        flex: 1
    },
    titleTextOne: {
        fontSize: SIZES.h2,
        color: COLORS.cyan,
        textAlign: "center"
    },
    cercle: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cercleInner: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "aliceblue",
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.padding
    },
    text: {
        color: COLORS.cyan,
        fontSize: SIZES.h4,
        textAlign: "center"
    },
    main:{
        flex: 4,
    },
    rowOne: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: SIZES.margin2
    },
    rowTwo:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: SIZES.margin2
    },
    footer:{
        flex: 2,
        justifyContent: "center",
        // alignItems: "center"
    }
})

export default Lifestyle;