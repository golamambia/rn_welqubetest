import React from 'react';
import { ScrollView, Pressable, Image, View, Text, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive"
import OptionActive from "../component/OptionActive"

const WorkoutTime = ({ navigation }) => {
    return (
        <ImageBackground style={{ width: "100%", height: "100%", opacity: 1 }} source={require('../assets/images/backimagelogin.png')} >
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Header navigation={() => navigation.navigate('WorkoutsPerWeek')} />
                <ScrollView contentContainerStyle={{padding: SIZES.padding}} >
                    <View style={styles.title}>
                        <View><Text style={styles.titleTextOne}>How much time do you have to workout? </Text></View>
                        <View><Text style={styles.titleTextTwo}>Choose whatever suits you the best</Text></View>
                    </View>
                    <View  style={styles.body}>

                        <OptionInactive value="5-10 mins" />
                        <OptionInactive value="15-20 mins" />
                        <OptionInactive value="25-30 mins" />
                        <OptionActive value="30+ mins" />
                    </View>
                </ScrollView>
                <BottonCommon handleSubmit={() => navigation.navigate('WorkoutWeek')} label="Next" />
            </SafeAreaView>
        </ImageBackground>
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

export default WorkoutTime;