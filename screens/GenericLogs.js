import React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Icon from 'react-native-vector-icons/AntDesign';
const Row = ({ title }) => (
    <View style={styles.row}>
        <View><Text style={styles.textRow}>{title}</Text></View>
        <View><Icon name="pluscircle" color={COLORS.cyan} size={24} /></View>
    </View>
)
const GenericLogs = ({navigation}) => {
    return (
        <CommonLayout>
            <SafeAreaView style={{ marginTop: 90, padding: SIZES.padding, flex: 1 }}>
                <View style={styles.body}>
                    <View style={styles.headerCon}><Text style={styles.headerText}>Your generic logs</Text></View>
                    <ScrollView style={styles.main} >
                        <Row title="Click here to add body fat" />
                        <Row title="Click here to add muscle mass" />
                        <Row title="Click here to add hip" />
                        <Row title="Click here to add waist" />
                        <Row title="Click here to add arm-right(flexed)" />
                        <Row title="Click here to add arm-left(unflexed)" />
                        <Row title="Click here to add arm-right(flexed)" />
                        <Row title="Click here to add arm-left(unflexed)" />
                        <Row title="Click here to add chest" />
                        <Row title="Click here to add thigh(right)" />
                        <Row title="Click here to add thigh(left)" />
                        <Row title="Click here to add calf(right)" />
                        <Row title="Click here to add calf(left)" />
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <BottonCommon handleSubmit={() => navigation.navigate('Overview')} label="Save" />
                </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 10.5,
    },
    main: {
        //   borderWidth: 1,
        padding: SIZES.body4,
        // marginHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.cilver,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4,
        // opacity: .90
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: SIZES.padding
    },
    headerText: {
        fontSize: SIZES.h4,
        color: COLORS.cyan
    },
    textRow: {
        fontSize: SIZES.h4,
        color: COLORS.gray1
    },
    footer: {
        flex: 1.5,
        justifyContent: "center"
    },
    headerCon: {
        paddingBottom: SIZES.padding
    }
})

export default GenericLogs;