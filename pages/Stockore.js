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
    TextInput,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";



export default function Stockore({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

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
                <View className="flex flex-row m-4 mt-4">
                    <View className="basis-full flex flex-row bg-[#006B7F] h-14 mr-1 rounded-lg shadow-md">
                        <View className="basis-1/2 p-4">
                            <Text className="font-bold text-xl text-white text-left">
                                Stock
                            </Text>
                        </View>
                        <View className="basis-1/2 p-4">
                            <Text className="font-bold text-xl text-white text-right">
                                2.652 M/T
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="-mt-4">
                    <TextInput
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Search Material Ore.."
                        style={{
                            borderWidth: 1,
                            padding: 15,
                            borderRadius: 12,
                            borderColor: "#8EA4BB",
                            margin: 15,
                            backgroundColor: "white",
                            shadowOpacity: 0.1,
                        }}
                    />
                </View>

                <View className="flex flex-row h-[100px] bg-white mx-4 rounded-xl border border-gray-300 shadow-sm mb-4">
                    <View className="basis-1/4 p-4 -mt-2">
                        <Image
                            source={require("../public/stockore.png")}
                            style={{
                                width: 65,
                                height: 65,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="text-center font-bold">
                            DOME-1
                        </Text>
                    </View>
                    <View className="grow flex flex-row items-center">
                        <Text className="text-left text-xs basis-1/3 p-3 font-bold">
                            PT BIS - PRODUCTION {"\n"}
                            <Text className="text-xs font-normal">
                                PIT-2 (Ululere)
                            </Text>
                        </Text>
                        <Text className="text-right text-sm basis-1/4 p-3 font-bold">
                            2.778,36
                        </Text>
                    </View>
                    <View className="basis-1/6 items-center rounded-tr-xl mt-3">
                        <View className="">
                            <Ionicons
                                name="create-outline"
                                size={35}
                                color="black"
                            />
                        </View>
                        <View className="">
                            <Ionicons
                                name="close-circle-outline"
                                size={35}
                                color="black"
                            />
                        </View>
                    </View>
                </View>

                <View className="flex flex-row h-[100px] bg-white mx-4 rounded-xl border border-gray-300 shadow-sm mb-4">
                    <View className="basis-1/4 p-4 -mt-2">
                        <Image
                            source={require("../public/stockore.png")}
                            style={{
                                width: 65,
                                height: 65,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="text-center font-bold">
                            DOME-1
                        </Text>
                    </View>
                    <View className="grow flex flex-row items-center">
                        <Text className="text-left text-xs basis-1/3 p-3 font-bold">
                            PT BIS - PRODUCTION {"\n"}
                            <Text className="text-xs font-normal">
                                PIT-2 (Ululere)
                            </Text>
                        </Text>
                        <Text className="text-right text-sm basis-1/4 p-3 font-bold">
                            2.778,36
                        </Text>
                    </View>
                    <View className="basis-1/6 items-center rounded-tr-xl mt-3">
                        <View className="">
                            <Ionicons
                                name="create-outline"
                                size={35}
                                color="black"
                            />
                        </View>
                        <View className="">
                            <Ionicons
                                name="close-circle-outline"
                                size={35}
                                color="black"
                            />
                        </View>
                    </View>
                </View>

                <View className="flex flex-row h-[100px] bg-white mx-4 rounded-xl border border-gray-300 shadow-sm mb-4">
                    <View className="basis-1/4 p-4 -mt-2">
                        <Image
                            source={require("../public/stockore.png")}
                            style={{
                                width: 65,
                                height: 65,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="text-center font-bold">
                            DOME-1
                        </Text>
                    </View>
                    <View className="grow flex flex-row items-center">
                        <Text className="text-left text-xs basis-1/3 p-3 font-bold">
                            PT BIS - PRODUCTION {"\n"}
                            <Text className="text-xs font-normal">
                                PIT-2 (Ululere)
                            </Text>
                        </Text>
                        <Text className="text-right text-sm basis-1/4 p-3 font-bold">
                            2.778,36
                        </Text>
                    </View>
                    <View className="basis-1/6 items-center rounded-tr-xl mt-3">
                        <View className="">
                            <Ionicons
                                name="create-outline"
                                size={35}
                                color="black"
                            />
                        </View>
                        <View className="">
                            <Ionicons
                                name="close-circle-outline"
                                size={35}
                                color="black"
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>

            <View className="h-[55px] rounded-2xl mb bg-[#006B7F] mx-4 items-center justify-center">
                <Text className="font-bold text-xl text-white">Add Cargo</Text>
            </View>
        </SafeAreaView >
    );
}