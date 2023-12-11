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
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Setting({ navigation }) {
    return (

        <SafeAreaView>

            <ScrollView className="h-[90%]"
                refreshControl={
                    <RefreshControl
                        colors={["blue"]}
                        tintColor="red"
                    />
                }
            >

                <View className="flex flex-row m-4 mt-8 h-[200px]">
                    <View className="basis-full h-14 mr-1 rounded-lg shadow-md items-center">
                        <Image
                            source={require("../public/avatar_default.png")}
                            style={{
                                width: 125,
                                height: 125,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="font-bold text-2xl text-left mt-2">
                            Fernando
                        </Text>
                        <Text className="font-bold text-lg text-[#006B7F] text-left">
                            BSIT813781
                        </Text>
                    </View>
                </View>

                <View className="flex flex-row h-[52px] rounded-2xl  mx-4 items-center justify-center shadow-xl">
                    <View className="basis-1/8 items-start ml-4">
                        <Ionicons
                            name="reload-circle-outline"
                            size={30}
                            color="black"
                        />
                    </View>
                    <View className="grow items-start">
                        <Text className="font-bold text-2xl ml-2">
                            Sync Data
                        </Text>
                    </View>
                </View>
                <View className="flex flex-row h-[52px] rounded-2xl -mt-2 mx-4 items-center justify-center shadow-xl">
                    <View className="basis-1/8 items-start ml-4">
                        <Ionicons
                            name="log-out-outline"
                            size={30}
                            color="black"
                        />
                    </View>
                    <View className="grow items-start">
                        <Text className="font-bold text-2xl ml-2">
                            Log Out
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}