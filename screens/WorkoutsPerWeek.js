import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive"
import OptionActive from "../component/OptionActive"
import CommonLayout from "../component/CommonLayout"

const WorkoutsPerWeek = ({ navigation }) => {
    return (
        // <ImageBackground style={{ width: "100%", height: "100%", opacity: 1 }} source={require('../assets/images/backimagelogin.png')} >
       < CommonLayout>
        <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Header navigation={() => navigation.navigate('CurrentBodytype')} />
                <ScrollView contentContainerStyle={{padding: SIZES.padding}}>
                    <View style={styles.title}>
                        <View><Text style={styles.titleTextOne}>How many workouts per week do you want? </Text></View>
                        <View><Text style={styles.titleTextTwo}>Choose whatever suits you the best</Text></View>
                    </View>
                    <View  style={styles.body}>
                        <OptionInactive value="4-5" />
                        <OptionActive value="9-10" />
                        <OptionInactive value="2-3" />
                        <OptionInactive value="1-2" />
                    </View>
                </ScrollView  >
                <BottonCommon handleSubmit={() => navigation.navigate('WorkoutTime')} label="Next" />
            </SafeAreaView>
        {/* </ImageBackground> */}
        </CommonLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding2
    },
    title: {
        paddingTop: SIZES.h2
    },
    titleTextOne: {
        fontSize: SIZES.h1,
        color: COLORS.cyan,
    },
    titleTextTwo: {
        fontSize: SIZES.h5,
        color: COLORS.gray,
        paddingBottom: SIZES.h2
    },
    body: {
        padding: SIZES.body2,
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

})

export default WorkoutsPerWeek;