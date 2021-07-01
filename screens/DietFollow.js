
import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive"
import OptionActive from "../component/OptionActive"
import CommonLayout from "../component/CommonLayout"

const DietFollow = ({ navigation }) => {
    return (
        < CommonLayout>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Header navigation={() => navigation.navigate('StruggleTimes')} leftLeble="Skip" leftAction={() => navigation.navigate('DietFollow')} />
                <ScrollView contentContainerStyle={{padding: SIZES.padding}}>
                    <View style={styles.title}>
                        <View><Text style={styles.titleTextOne}>What type of diet do you follow?</Text></View>
                        <View><Text style={styles.titleTextTwo}>Choose whatever suits you the best</Text></View>
                    </View>
                    <View style={styles.body}>
                        <OptionInactive value="Standard" />
                        <OptionInactive value="Pescetarian" />
                        <OptionInactive value="Vegetarian" />
                        <OptionInactive value="Vegan" />
                        <OptionActive value="High protein diet" />
                        <OptionInactive value="Keto" />
                        <OptionInactive value="Paleo" />
                        <OptionInactive value="Low carbs" />
                        <OptionInactive value="Ultra low fat diet" />
                    </View>
                </ScrollView  >
                <View style={{marginTop: SIZES.body3}}>
                    <BottonCommon handleSubmit={() => navigation.navigate('AddLogs')} label="Next" />
                </View>
            </SafeAreaView>
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

export default DietFollow;