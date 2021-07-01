import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive"
import OptionActive from "../component/OptionActive"
import CommonLayout from "../component/CommonLayout"

const Goal = ({ navigation }) => {
    return (
        // <ImageBackground style={{ width: "100%", height: "100%", opacity: 1 }} source={require('../assets/images/backimagelogin.png')} >
       < CommonLayout>
        <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Header navigation={() => navigation.navigate('FavouriteType')} />
                <ScrollView contentContainerStyle={{padding: SIZES.padding}}>
                    <View style={styles.title}>
                        <View><Text style={styles.titleTextOne}>What's your goal?</Text></View>
                        <View><Text style={styles.titleTextTwo}>Choose whatever suits you the best</Text></View>
                    </View>
                    <View style={styles.body}>

                        <OptionInactive value="Be more active" />
                        <OptionInactive value="Lose weight" />
                        <OptionInactive value="Stay toned" />
                        <OptionInactive value="Build muscle" />
                        <OptionInactive value="Reduce stress" />
                        <OptionInactive value="Pre/Post natal fitness" />
                        <OptionActive value="Injury rehabilitation" />
                        <OptionInactive value="Sports specific training" />
                        <OptionInactive value="Doctor's recommendation" />
                    </View>
                </ScrollView  >
                <BottonCommon handleSubmit={() => navigation.navigate('MealsPerDay')} label="Next" />
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

export default Goal;