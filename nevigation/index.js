import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Login, Registration, WorkoutsPerWeek, WorkoutWeek, WorkoutTime, FavouriteType, Goal,
    MealsPerDay,
    DietFollow,
    StruggleTimes,
    Lifestyle,
    CurrentBodytype,
    AddLogs,
    BasicDetails,
    GenericLogs,
    Overview
} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from "../constants/theme";

const Stack = createStackNavigator();

const Index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator

            >
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Registration" component={Registration} />
                <Stack.Screen options={{ headerShown: false }} name="BasicDetails" component={BasicDetails} />
                <Stack.Screen options={{ headerShown: false }} name="WorkoutsPerWeek" component={WorkoutsPerWeek} />
                <Stack.Screen options={{ headerShown: false }} name="WorkoutWeek" component={WorkoutWeek} />
                <Stack.Screen options={{ headerShown: false }} name="WorkoutTime" component={WorkoutTime} />
                <Stack.Screen options={{ headerShown: false }} name="FavouriteType" component={FavouriteType} />
                <Stack.Screen options={{ headerShown: false }} name="Goal" component={Goal} />
                <Stack.Screen options={{ headerShown: false }} name="MealsPerDay" component={MealsPerDay} />
                <Stack.Screen options={{ headerShown: false }} name="DietFollow" component={DietFollow} />
                <Stack.Screen options={{ headerShown: false }} name="StruggleTimes" component={StruggleTimes} />
                <Stack.Screen options={{ headerShown: false }} name="Lifestyle" component={Lifestyle} />
                <Stack.Screen options={{ headerShown: false }} name="CurrentBodytype" component={CurrentBodytype} />
                <Stack.Screen options={{ headerShown: false }} name="AddLogs" component={AddLogs} />
                <Stack.Screen options={{ headerShown: false }} name="Overview" component={Overview} />
                <Stack.Screen
                    options={({ navigation, route }) => ({
                        headerTitle: 'Add logs manually',
                        headerTransparent: true,
                        headerTintColor: COLORS.cyan,
                        headerLeft: () => (
                            <AntDesign
                                style={styles.menuButtom}
                                color={COLORS.cyan}
                                onPress={() => navigation.goBack()}
                                name="arrowleft"
                                size={26}
                            />
                        ),
                    })}
                    name="GenericLogs" component={GenericLogs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    menuButtom: {
        left: SIZES.h6,
        width: 40
    },
})

export default Index;

