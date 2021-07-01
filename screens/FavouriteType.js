import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import BottonCommon from '../component/BottonCommon';
import Header from "../component/Header";
import OptionInactive from "../component/OptionInactive"
import OptionActive from "../component/OptionActive"
import CommonLayout from "../component/CommonLayout"

const InActiveButton = ({label}) =>(
    <View style={styles.activeButton}><Text style={styles.activeText}>{label}</Text></View>
)

const FavouriteType = ({ navigation }) => {
    return (
        // <ImageBackground style={{ width: "100%", height: "100%", opacity: 1 }} source={require('../assets/images/backimagelogin.png')} >
       < CommonLayout>
        <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Header navigation={() => navigation.navigate('WorkoutWeek')} />
                <ScrollView contentContainerStyle={{padding: SIZES.padding}}>
                    <View style={styles.title}>
                        <View><Text style={styles.titleTextOne}>Select all your favourite type of classes: </Text></View>
                        <View><Text style={styles.titleTextTwo}>Choose whatever suits you the best</Text></View>
                    </View>
                    <View style={styles.body}>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <InActiveButton label="Cardio" />
                            <InActiveButton label="Strength" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <InActiveButton label="HIIT" />
                            <InActiveButton label="Toning" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <InActiveButton label="Dance" />
                            <InActiveButton label="Kickboxing" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <InActiveButton label="Barre" />
                            <InActiveButton label="Pilates" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <InActiveButton label="Meditation" />
                            <InActiveButton label="Stretch" />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <InActiveButton label="Yoga" />
                            <InActiveButton label="Spinning" />
                        </View>
                        <OptionActive value="Treadmill" />
                    </View>
                </ScrollView  >
                <BottonCommon handleSubmit={() => navigation.navigate('Goal')} label="Next" />
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
        marginBottom: SIZES.margin2,
    },


    activeButton: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.cyan,
        borderRadius: 6,
        alignItems: "center",
        marginTop: SIZES.margin2,
        flex: 1,
        marginHorizontal: 4
    },
    activeText: {
        fontSize: SIZES.h4,
        paddingVertical: 8,
        color: COLORS.gray
    },

})

export default FavouriteType;