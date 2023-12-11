import * as React from "react";
import {
    Text,
    View,
    Button,
    SafeAreaView,
    Image,
    ScrollView,
    RefreshControl,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Menu({ navigation }) {
    return (

        <SafeAreaView>
            <ScrollView className="h-[90%]"
                refreshControl={
                    <RefreshControl
                        // refreshing={refreshing}
                        // onRefresh={onRefreshFunc}
                        colors={["blue"]}
                        tintColor="red"
                    />
                }
            >
                <View className="flex flex-row">
                    <View className="basis-1/3 items-center my-4">
                        <TouchableOpacity onPress={() => navigation.navigate("Fuel")}>
                            <View className="bg-white h-[100px] w-[100px] rounded-lg p-6 shadow-sm border border-gray-200 ">
                                <Image
                                    source={require("../public/fuel.png")}
                                    style={{
                                        width: 55,
                                        height: 55,
                                        resizeMode: "contain",
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                            <Text className="font-bold text-center text-xs text-black mt-1"> FUEL</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="basis-1/3 items-center my-4">
                        <TouchableOpacity onPress={() => navigation.navigate("Hourmeter")}>
                            <View className="bg-white h-[100px] w-[100px] rounded-lg p-6 shadow-sm border border-gray-200 ">
                                <Image
                                    source={require("../public/hourmeter.png")}
                                    style={{
                                        width: 55,
                                        height: 55,
                                        resizeMode: "contain",
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                            <Text className="font-bold text-xs text-black mt-1 text-center"> HOURMETER</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="basis-1/3 items-center my-4">
                        <TouchableOpacity onPress={() => navigation.navigate("Production")}>
                            <View className="bg-white h-[100px] w-[100px] rounded-lg p-6 shadow-sm border border-gray-200 ">
                                <Image
                                    source={require("../public/production.png")}
                                    style={{
                                        width: 55,
                                        height: 55,
                                        resizeMode: "contain",
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                            <Text className="font-bold text-xs text-black mt-1 text-center"> PRODUCTION</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex flex-row">
                    <View className="basis-1/3 items-center my-0">
                        <TouchableOpacity onPress={() => navigation.navigate("Hauling")}>
                            <View className="bg-white h-[100px] w-[100px] rounded-lg p-4 shadow-sm border border-gray-200 ">
                                <Image
                                    source={require("../public/hauling.png")}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        resizeMode: "contain",
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                            <Text className="font-bold text-xs text-black mt-1 text-center"> HAULING</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="basis-1/3 items-center my-0">
                        <TouchableOpacity onPress={() => navigation.navigate("Barging")}>
                            <View className="bg-white h-[100px] w-[100px] rounded-lg p-4 shadow-sm border border-gray-200 ">
                                <Image
                                    source={require("../public/barging.png")}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        resizeMode: "contain",
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                            <Text className="font-bold text-xs text-black mt-1 text-center"> BARGING</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="basis-1/3 items-center my-0">
                        <TouchableOpacity onPress={() => navigation.navigate("Preparation")}>
                            <View className="bg-white h-[100px] w-[100px] rounded-lg p-6 shadow-sm border border-gray-200 ">
                                <Image
                                    source={require("../public/preparation.png")}
                                    style={{
                                        width: 55,
                                        height: 55,
                                        resizeMode: "contain",
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                            <Text className="font-bold text-xs text-black mt-1 text-center"> PREPARATION</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex flex-row">
                    <View className="basis-1/3 items-center my-4">
                        <TouchableOpacity onPress={() => navigation.navigate("Stockore")}>
                            <View className="bg-white h-[100px] w-[100px] rounded-lg p-4 shadow-sm border border-gray-200 ">
                                <Image
                                    source={require("../public/stockore.png")}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        resizeMode: "contain",
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                            <Text className="font-bold text-xs text-black mt-1 text-center"> STOCK ORE</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}