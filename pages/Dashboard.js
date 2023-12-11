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

let Rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
});

let Numbering = new Intl.NumberFormat("id-ID");

export default function Dashboard({ navigation }) {
    return (

        <SafeAreaView className="bg-white h-full">
            <View className="flex flex-row items-center justify-center py-2 mb-2 px-5">
                <Text className="grow  text-[#006B7F]">
                    <Text className="text-xl font-bold">
                        SMART MINING SYSTEM
                    </Text>{"\n"}
                    <Text className="truncate text-black font-medium ">
                        Hello, Fernando
                    </Text>
                </Text>

                <View className="justify-end flex flex-row">
                    <Image
                        source={require("../public/avatar.png")}
                        style={{
                            width: 45,
                            height: 45,
                            resizeMode: "contain",
                            borderRadius: 10,
                        }}
                    />
                </View>
            </View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        // refreshing={refreshing}
                        // onRefresh={onRefreshFunc}
                        colors={["blue"]}
                        tintColor="red"
                    />
                }
            >
                {/* Card1 */}
                <View className="bg-[#006B7F] h-32 rounded-lg flex flex-row p-4 mx-4 mb-2 shadow-md">
                    <View className="grow text-center items-start justify-center flex flex-col">
                        <View className="grow flex flex-row items-center">
                            <View className="basis-3/4 text-center items-start">
                                <Text className="font-bold text-3xl text-white">Fuel Used</Text>
                                <Text className="font-bold text-3xl text-white mt-5">
                                    623 Liter
                                </Text>
                            </View>
                            <View className="basis-1/4 items-end">
                                <Ionicons
                                    name="water-outline"
                                    size={80}
                                    color="white"
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View className="flex flex-row mb-2 space-x-2 items-center justify-center px-4 shadow-md">
                    <View className="bg-[#006B7F] h-16 rounded-lg flex flex-row space-x-3 basis-full px-4 shadow">
                        <View className="justify-center">
                            <Text className="font-bold text-left text-white">Production</Text>
                            <Text className="font-bold text-left text-white">1.325 M/T</Text>
                        </View>
                        <View className="grow text-center items-end justify-center">
                            <Ionicons
                                name="analytics-outline"
                                size={40}
                                color="white"
                            />
                        </View>
                    </View>
                </View>

                <View className="flex flex-row mb-2 space-x-2 items-center justify-center px-4 shadow-md">
                    <View className="bg-[#006B7F] h-16 rounded-lg flex flex-row space-x-3 basis-full px-4 shadow">
                        <View className="justify-center">
                            <Text className="font-bold text-left text-white">Ritase</Text>
                            <Text className="font-bold text-left text-white">88 Rit</Text>
                        </View>
                        <View className="grow text-center items-end justify-center">
                            <Ionicons
                                name="sync-circle-outline"
                                size={40}
                                color="white"
                            />
                        </View>
                    </View>
                </View>

                <View className="flex flex-row mb-2 space-x-2 items-center justify-center px-5">

                    <View className="bg-gray-800 h-20 rounded-lg flex flex-row space-x-3 basis-1/2 px-4 shadow-md">
                        <View className="basis-full justify-center">
                            <Text className="font-bold text-center text-lg text-white">Dump Truck</Text>
                            <Text className="font-bold text-center text-white">321 Units</Text>
                        </View>
                    </View>


                    <View className="bg-gray-800 h-20 rounded-lg flex flex-row space-x-3 basis-1/2 px-4 shadow-md">
                        <View className="basis-full justify-center">
                            <Text className="font-bold text-center text-lg text-white">Excavator</Text>
                            <Text className="font-bold text-center text-white">321 Units</Text>
                        </View>
                    </View>

                </View>
                {/* Card2 */}
                {/* Card3 */}
                <View className="flex flex-row mb-2 space-x-2 items-center justify-center px-5">
                    <View className="bg-gray-800 h-28 rounded-lg flex flex-row space-x-3 basis-1/2 px-4 shadow-md">
                        <View className="justify-center">
                            <Text className="font-bold text-left text-white">Hauling</Text>
                            <Text className="font-bold text-left text-white">321 Rit</Text>
                            <Text className="font-bold text-left text-white">1.562 M/T</Text>
                        </View>
                        <View className="grow text-center items-end justify-center">
                            <Ionicons
                                name="bar-chart-sharp"
                                size={40}
                                color="white"
                            />
                        </View>
                    </View>

                    <View className="bg-gray-800 h-28 rounded-lg flex flex-row space-x-3 basis-1/2 px-4 shadow-md">
                        <View className="justify-center">
                            <Text className="font-bold text-left text-white">Barging</Text>
                            <Text className="font-bold text-left text-white">63 Rit</Text>
                            <Text className="font-bold text-left text-white">632 M/T</Text>
                        </View>
                        <View className="grow text-center items-end justify-center">
                            <Ionicons
                                name="contrast-sharp"
                                size={40}
                                color="white"
                            />
                        </View>
                    </View>

                </View>

                {/* <View className="flex flex-row space-x-2 items-center justify-center px-4">
                    <View className=" h-[50px] rounded-t-lg flex flex-row space-x-3 basis-full px-4 shadow border border-gray-200">
                        <View className="justify-center ">
                            <Text className="font-medium text-xl text-left text-black ">Transaction History</Text>
                        </View>
                        <View className="grow text-center items-end justify-center">
                            <Ionicons
                                name="chevron-forward-sharp"
                                size={30}
                                color="black"
                            />
                        </View>
                    </View>
                </View>

                <View className="flex flex-row items-start justify-center rounded-b-lg border border-gray-200 h-[78px] mx-4">
                    <View className="basis-1/6 mt-3 mr-1 items-center">
                        <Ionicons
                            name="timer-sharp"
                            size={50}
                            color="#D13D3D"
                        />
                    </View>
                    <View className="basis-2/4 mt-1 items-start">
                        <Text className="text-lg">Celana Jogger</Text>
                        <Text className="text-xs">OHAYO</Text>
                        <Text className="text-xs">10 Pcs</Text>
                        <Text className="text-xs">06 Dec 2023, 02:04</Text>
                    </View>
                    <View className="basis-1/4 mt-8 items-center">
                        <Text className="text-xs font-bold text-red-700">Rp55.120.500</Text>
                    </View>
                </View>

                <View className="flex flex-row items-start justify-center rounded-b-lg border border-gray-200 h-[78px] mx-4">
                    <View className="basis-1/6 mt-3 mr-1 items-center">
                        <Ionicons
                            name="timer-sharp"
                            size={50}
                            color="#D13D3D"
                        />
                    </View>
                    <View className="basis-2/4 mt-1 items-start">
                        <Text className="text-lg">Jacket Winter</Text>
                        <Text className="text-xs">OHAYO</Text>
                        <Text className="text-xs">21 Pcs</Text>
                        <Text className="text-xs">06 Dec 2023, 02:04</Text>
                    </View>
                    <View className="basis-1/4 mt-8 items-center">
                        <Text className="text-xs font-bold text-red-700">Rp55.120.500</Text>
                    </View>
                </View>
                <View className="flex flex-row items-start justify-center rounded-b-lg border border-gray-200 h-[78px] mx-4">
                    <View className="basis-1/6 mt-3 mr-1 items-center">
                        <Ionicons
                            name="timer-sharp"
                            size={50}
                            color="#D13D3D"
                        />
                    </View>
                    <View className="basis-2/4 mt-1 items-start">
                        <Text className="text-lg">Celana Jogger</Text>
                        <Text className="text-xs">OHAYO</Text>
                        <Text className="text-xs">10 Pcs</Text>
                        <Text className="text-xs">06 Dec 2023, 02:04</Text>
                    </View>
                    <View className="basis-1/4 mt-8 items-center">
                        <Text className="text-xs font-bold text-red-700">Rp55.120.500</Text>
                    </View>
                </View> */}



                {/* Card3 */}
                {/* <Text>{JSON.stringify(data)}</Text> */}
            </ScrollView>
        </SafeAreaView>
    );
}