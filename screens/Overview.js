
import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from "react-native";
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import CommonLayout from "../component/CommonLayout";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Overview = ({ navigation }) => {
    return (
        <CommonLayout>
            <SafeAreaView style={{ flex: 1, padding: SIZES.padding }}>
                <View style={styles.header}>
                <View style={[styles.bar, { backgroundColor: COLORS.cyan }]}>
                    </View>
                    <View style={styles.bar}>
                    </View>
                    <View style={styles.bar}>
                    </View>
                    <View style={styles.bar}>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleTextOne}>Overview</Text>
                    <Text style={styles.titleTextTwo}>your current overview</Text>
                </View>
                <View style={styles.body}>
                <ScrollView contentContainerStyle={{padding: SIZES.padding}} style={styles.main} >
                    <View>
                        <View style={styles.row}>
                            <View style={{marginHorizontal: SIZES.margin2}}><Image source={require("../assets/images/34.png")} /></View>
                            <View style={{justifyContent:"center"}}><Text style={{color:COLORS.cyan, fontWeight: "bold"}}>------------</Text></View>
                            <View style={{marginHorizontal: SIZES.margin2}}><Image source={require("../assets/images/169.png")} /></View>
                        </View>
                        <View style={styles.row}>
                            <View style={{marginHorizontal: SIZES.margin2}}><Image source={require("../assets/images/30.png")} /></View>
                            <View style={{justifyContent:"center"}}><Text style={{color:COLORS.cyan, fontWeight: "bold"}}>------------</Text></View>
                            <View style={{marginHorizontal: SIZES.margin2}}><Image source={require("../assets/images/65.png")} /></View>
                        </View>
                        <View style={styles.row}>
                            <View style={{marginHorizontal: SIZES.margin2}}><Image source={require("../assets/images/22.png")} /></View>
                            <View style={{justifyContent:"center"}}><Text style={{color:COLORS.cyan, fontWeight: "bold"}}>------------</Text></View>
                            <View style={{marginHorizontal: SIZES.margin2}}><Image source={require("../assets/images/62.png")} /></View>
                        </View>
                    </View>
                    <View style={styles.ageInformation}>
                    <View style={{justifyContent: "center", alignItems: "center", marginTop: -24}}><Icon name="pin" color="paleturquoise" size={24} /></View>
                        <Text style={{textAlign: "center", fontSize: SIZES.h2, color: COLORS.cyan}}>Age information</Text>
                        <Text style={{ fontSize: SIZES.h5, color: COLORS.gray1, paddingBottom:SIZES.padding}}>What is it?</Text>
                        <Text style={{ fontSize: SIZES.h6, color: COLORS.gray1, paddingBottom:SIZES.padding}}>The time in years since your date of birth.</Text>
                        <Text style={{ fontSize: SIZES.h5, color: COLORS.gray1, paddingBottom:SIZES.padding}}>Why is it important?</Text>
                        <Text style={{ fontSize: SIZES.h6, color: COLORS.gray1, paddingBottom:SIZES.padding}} >Inputting your date of birth is essential as it will be 
                            used to compare your results with other of a similar 
                            age. Metabolic Age, Muscle Score and BMR Score 
                            are all calculated using comparative data of your 
                            age group. After the age of 18 men and women 
                            generally increase in body weight and fat mass 
                            until their 40’s or 50’s at which time total body 
                            weight decreases, through decreases in fat free 
                            mass, despite increasing body fat. </Text>
                        <View style={{flexDirection: "row", alignItems: "center", marginBottom: SIZES.margin2}}>
                            <Text style={{ fontSize: SIZES.h5, color: COLORS.gray1}}>Previous Reading:</Text>
                            <View style={styles.box}><Text style={{ fontSize: SIZES.h5, color: COLORS.gray1}}>33 yrs</Text></View>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{ fontSize: SIZES.h5, color: COLORS.gray1}}>Current Reading:</Text>
                            <View style={styles.box}><Text style={{ fontSize: SIZES.h5, color: COLORS.gray1}}>34 yrs</Text></View>
                        </View>
                    </View>
                </ScrollView >
                </View>
                <View style={styles.footer}>
                    <BottonCommon handleSubmit={() => navigation.navigate('WorkoutsPerWeek')} label="Next" />
                    
                </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        // paddingTop: SIZES.large,
        flex: 1,
        // backgroundColor: "red"
    },
    bar: {
        width: 65,
        height: 5,
        marginHorizontal: 6,
        backgroundColor: COLORS.cilver
    },
    title: {
        // paddingTop: SIZES.h2,
        flex: 2,
        justifyContent: "center",
        // backgroundColor: "green"
    },
    titleTextOne: {
        fontSize: SIZES.h2,
        color: COLORS.cyan,
        textAlign: "center"
    },
    titleTextTwo: {
        fontSize: SIZES.h5,
        color: COLORS.gray,
        textAlign: "center"
    },
    body: {
        flex: 8,
        overflow: "scroll"
    },
    main:{
        flex: 1,
    },
    rowTwo: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    footer: {
        flex: 1,
        justifyContent: "center",
    },
    row:{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: SIZES.margin2
    },
    ageInformation: {
        padding: SIZES.body4,
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
    },
    box:{
        width: 100,
        height: 40,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.margin2,
        borderColor: COLORS.gray
    }

})

export default Overview;