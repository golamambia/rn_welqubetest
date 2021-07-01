import React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme'
import Squery from '../component/icons/square'
import Icon from 'react-native-vector-icons/FontAwesome';
import BottonCommon from '../component/BottonCommon'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.backImage}>
                <ImageBackground source={require('../assets/images/login.png')} style={styles.image}>
                    <View style={styles.logo}>
                        <Image source={require("../assets/images/logo.png")} />

                    </View>
                </ImageBackground>
            </View>
            <ImageBackground source={require('../assets/images/backimagelogin.png')} style={styles.image}>
                <View style={styles.main}>
                    <View style={styles.loginCon} >
                        <Text style={styles.loginLabel}>Log in</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail or Phone"
                        />
                        <View style={styles.password_con}>
                            <Image style={styles.notshow} source={require("../assets/images/notshow.png")} />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                        </View>
                        <BottonCommon handleSubmit={() => navigation.navigate('BasicDetails')} label="Log in" />
                        {/* <BottonCommon handleSubmit={() => navigation.navigate('AddLogs')} label="Log in" /> */}

                        <View style={styles.loginBottomLine}>
                            <View style={styles.keep_me_login_con}>
                                <View style={styles.check_box}></View>
                                <Text style={styles.keep_me_login}>Keep me logined in</Text></View>
                            <View><Text style={styles.forgot_password}>Forgot Password?</Text></View>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.footer_one}>
                            <Text style={styles.orloginwith}>or log in with</Text>
                            <View style={styles.icons_con}>
                                <Image style={styles.icon} source={require("../assets/images/facebook-icon.png")} />
                                <Image style={styles.icon} source={require("../assets/images/google-icon.png")} />
                            </View>
                        </View>

                        <View style={styles.footer_two}><Text style={styles.donthavaccount}>Don't have account?</Text><Text onPress={() => navigation.navigate('Registration')} style={styles.register}> Register</Text></View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    backImage: {
        flex: .7,
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
        //   borderWidth: 1,
        padding: SIZES.body4,
        marginHorizontal: SIZES.padding,
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
    loginLabel: {
        fontSize: SIZES.h2,
        paddingBottom: SIZES.padding2,
        color: COLORS.cyan,
        fontWeight: 'bold'
    },
    loginBottomLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: SIZES.padding
    },
    keep_me_login: {
        fontSize: SIZES.h5,
        color: COLORS.gray1
    },
    forgot_password: {
        fontSize: SIZES.h5,
        color: COLORS.cyan,
        textDecorationLine: "underline",
    },
    footer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    orloginwith: {
        fontSize: SIZES.h5,
        color: COLORS.gray
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
    footer_one: {
        paddingTop: SIZES.h5
    },
    footer_two: {
        flexDirection: "row",
        paddingBottom: SIZES.h5
    },
    icons_con: {
        flexDirection: "row",
        justifyContent: "center"
    },
    icon: {
        marginHorizontal: SIZES.base,
        marginTop: SIZES.base,
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
    check_box: {
        width: 12,
        height: 12,
        borderWidth: 1,
        borderColor: COLORS.gray1,
        marginRight: SIZES.margin
    },
    keep_me_login_con: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})