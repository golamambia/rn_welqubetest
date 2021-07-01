import React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/FontAwesome';
import BottonCommon from '../component/BottonCommon';

const Registration = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.backImage}>
                <ImageBackground source={require('../assets/images/registration.png')} style={styles.image}>
                    <View style={styles.logo}>
                        <Image source={require("../assets/images/logo.png")} />

                    </View>
                </ImageBackground>
            </View>
            <ImageBackground source={require('../assets/images/backimagelogin.png')} style={styles.image}>
                <View style={styles.main}>
                    <View style={styles.loginCon} >
                        <Text style={styles.loginLabel}>Register Yourself</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Full name"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                        />
                        <View style={styles.password_con}>
                            <Image style={styles.notshow} source={require("../assets/images/notshow.png")} />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.password_con}>
                            <Image style={styles.notshow} source={require("../assets/images/notshow.png")} />
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm password"
                                secureTextEntry={true}
                            />
                        </View>
                        <BottonCommon label="Register" />
                    </View>
                    <View style={styles.footer_two}><Text style={styles.donthavaccount}>Already have an account?</Text><Text onPress={() => navigation.navigate('Login')} style={styles.register}> Log in</Text></View>

                </View>
            </ImageBackground>
        </View>
    );
};

export default Registration;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    backImage: {
        flex: .4,
    },
    main: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },
    input: {
        height: 40,
        marginBottom: SIZES.padding2,
        borderWidth: 1,
        borderColor: COLORS.cilver,
        paddingHorizontal: SIZES.padding,
        fontSize: SIZES.h5
    },
    loginCon: {
        padding: SIZES.body4,
        marginHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.cilver,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.00,
        elevation: 4,
        // opacity:.90
    },
    loginLabel: {
        fontSize: SIZES.h2,
        paddingBottom: SIZES.padding2,
        color: COLORS.cyan,
        fontWeight: 'bold'
    },
    donthavaccount: {
        fontSize: SIZES.h5,
        color: COLORS.gray
    },
    register: {
        fontSize: SIZES.h5,
        color: COLORS.cyan,
        fontWeight: "bold"
    },

    footer_two: {
        flexDirection: "row",
        paddingBottom: SIZES.h5,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },

    logo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: SIZES.padding
    },
    notshow: {
        marginTop: SIZES.margin2,
        position: "absolute",
        right: 10,
    },
    password_con: {
        // flex: 1
    },
   

})