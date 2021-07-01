import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Header from "../component/Header";

const AddLogs = ({navigation}) => {
    return (
        <CommonLayout>
        <SafeAreaView style={{flex: 1, padding: SIZES.padding,}}>
            <Header navigation={() => navigation.navigate('DietFollow')} />
            <View style={styles.main}>
            <View style={styles.cercle}>
                    <View style={[styles.cercleInner, {backgroundColor: COLORS.cyan}]}>
                        <Text style={[styles.text, {color: COLORS.white}]}>Add logs</Text>
                    </View>
                </View>
                <View><Text>|</Text></View>
                <View style={styles.cercle}>
                    <View style={styles.cercleInner}>
                        <Text style={styles.text}>Connect to</Text>
                        <Text style={[styles.text, {fontWeight: "bold"}]}>Inbody 570</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.footer}> 
                <BottonCommon handleSubmit={() => navigation.navigate('GenericLogs')} label="Next" />
            </View>
        </SafeAreaView>
        </CommonLayout>
    );
};

const styles = StyleSheet.create({
    main:{
        flex:4,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    footer:{
        flex:1,
        justifyContent: "center"
    },
    cercle: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
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
        width: 140,
        height: 140,
        borderRadius: 140 / 2,
        backgroundColor: "aliceblue",
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.padding
    },
    text: {
        color: COLORS.cyan,
        fontSize: SIZES.h3,
        textAlign: "center"
    },
})

export default AddLogs;