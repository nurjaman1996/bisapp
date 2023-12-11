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
    TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";


export default function Preparation({ navigation }) {
    const [text, onChangeText] = React.useState('');

    const [showStart, setShowStart] = React.useState('');
    const [dateStart, setDateStart] = React.useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowStart(!showStart);
        setDateStart(currentDate);
    };

    const onChange2 = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowEnd(!showEnd);
        setDateEnd(currentDate);
    };

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
                <View className="flex flex-row m-4 mt-4 -mb-0">
                    <View className="grow  bg-[#006B7F] h-16 mr-1 rounded-lg p-1 shadow-md">
                        <Text className="font-bold text-lg text-white text-center mt-1">TOTAL SAMPLE</Text>
                        <Text className="font-bold text-lg text-white text-center -mt-0">
                            56 INC
                        </Text>
                    </View>
                    <View className="basis-1/2 bg-[#006B7F] h-16 ml-1 rounded-lg p-1 shadow-md">
                        <Text className="font-bold text-lg text-white text-center  mt-1">SOURCE</Text>
                        <Text className="font-bold text-lg text-white text-center -mt-0">
                            5 Location
                        </Text>
                    </View>
                </View>

                <View className="grow justify-start items-start px-2 ml-2 mr-2 mt-2 -mb-1">
                    <TouchableOpacity style={styles.input3}
                        className="w-full"
                        onPress={() => setShowStart(!showStart)}
                    >
                        <Text className="pt-[3.5%] text-white text-center font-bold" >
                            {dayjs(dateStart).format("YYYY-MM-DD")}
                        </Text>
                    </TouchableOpacity>
                </View>

                {showStart && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={dateStart}
                        mode={"date"}
                        is24Hour={true}
                        onChange={onChange}
                        display={"inline"}
                    />
                )}

                <View>
                    <TextInput
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Search Prep Transaction.."
                        style={{
                            borderWidth: 1,
                            padding: 12,
                            borderRadius: 10,
                            borderColor: "#8EA4BB",
                            margin: 15,
                            backgroundColor: "white",
                            shadowOpacity: 0.1,
                        }}
                    />
                </View>

                <View className="flex flex-row h-[100px] bg-white mx-4 rounded-xl border border-gray-300 shadow-sm mb-4">
                    <View className="basis-1/4 pt-5 items-center pl-6 -mt-2 -ml-2 mr-1">
                        <Image
                            source={require("../public/hauling.png")}
                            style={{
                                width: 55,
                                height: 55,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="text-center font-bold text-[#006B7F]">PROGRESS</Text>
                    </View>
                    <View className="grow flex flex-row items-center">
                        <Text className="text-left text-base grow p-3 font-bold">
                            PIT-2/SM-01/18.10.22 {"\n"}
                            <Text className="text-xs font-normal text-[#006B7F]">
                                PREP_137
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                2022-08-28
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                PIT-2 (Ululere)
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                DOME-5
                            </Text>
                        </Text>
                    </View>
                    <View className="basis-1/6 items-center rounded-tr-xl mt-3 -ml-1">
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
                    <View className="basis-1/4 pt-5 items-center pl-6 -mt-2 -ml-2 mr-1">
                        <Image
                            source={require("../public/hauling.png")}
                            style={{
                                width: 55,
                                height: 55,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="text-center font-bold text-[#006B7F]">PROGRESS</Text>
                    </View>
                    <View className="grow flex flex-row items-center">
                        <Text className="text-left text-base grow p-3 font-bold">
                            PIT-2/SM-01/18.10.22 {"\n"}
                            <Text className="text-xs font-normal text-[#006B7F]">
                                PREP_137
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                2022-08-28
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                PIT-2 (Ululere)
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                DOME-5
                            </Text>
                        </Text>
                    </View>
                    <View className="basis-1/6 items-center rounded-tr-xl mt-3 -ml-1">
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
                    <View className="basis-1/4 pt-5 items-center pl-6 -mt-2 -ml-2 mr-1">
                        <Image
                            source={require("../public/hauling.png")}
                            style={{
                                width: 55,
                                height: 55,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="text-center font-bold text-[#006B7F]">PROGRESS</Text>
                    </View>
                    <View className="grow flex flex-row items-center">
                        <Text className="text-left text-base grow p-3 font-bold">
                            PIT-2/SM-01/18.10.22 {"\n"}
                            <Text className="text-xs font-normal text-[#006B7F]">
                                PREP_137
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                2022-08-28
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                PIT-2 (Ululere)
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                DOME-5
                            </Text>
                        </Text>
                    </View>
                    <View className="basis-1/6 items-center rounded-tr-xl mt-3 -ml-1">
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
                    <View className="basis-1/4 pt-5 items-center pl-6 -mt-2 -ml-2 mr-1">
                        <Image
                            source={require("../public/hauling.png")}
                            style={{
                                width: 55,
                                height: 55,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="text-center font-bold text-[#006B7F]">PROGRESS</Text>
                    </View>
                    <View className="grow flex flex-row items-center">
                        <Text className="text-left text-base grow p-3 font-bold">
                            PIT-2/SM-01/18.10.22 {"\n"}
                            <Text className="text-xs font-normal text-[#006B7F]">
                                PREP_137
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                2022-08-28
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                PIT-2 (Ululere)
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                DOME-5
                            </Text>
                        </Text>
                    </View>
                    <View className="basis-1/6 items-center rounded-tr-xl mt-3 -ml-1">
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
                    <View className="basis-1/4 pt-5 items-center pl-6 -mt-2 -ml-2 mr-1">
                        <Image
                            source={require("../public/hauling.png")}
                            style={{
                                width: 55,
                                height: 55,
                                resizeMode: "contain",
                                borderRadius: 10,
                            }}
                        />
                        <Text className="text-center font-bold text-[#006B7F]">PROGRESS</Text>
                    </View>
                    <View className="grow flex flex-row items-center">
                        <Text className="text-left text-base grow p-3 font-bold">
                            PIT-2/SM-01/18.10.22 {"\n"}
                            <Text className="text-xs font-normal text-[#006B7F]">
                                PREP_137
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                2022-08-28
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                PIT-2 (Ululere)
                            </Text>{"\n"}
                            <Text className="text-xs font-normal">
                                DOME-5
                            </Text>
                        </Text>
                    </View>
                    <View className="basis-1/6 items-center rounded-tr-xl mt-3 -ml-1">
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

            <View className="flex flex-row h-[52px] rounded-2xl mb bg-[#006B7F] mx-4 items-center justify-center shadow-xl">
                <View className="basis-1/3 items-end -ml-10">
                    <Ionicons
                        name="add-outline"
                        size={30}
                        color="white"
                    />
                </View>
                <View className="basis-1/3 items-start">
                    <Text className="font-bold text-xl text-white ">
                        Add Data
                    </Text>
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    input3: {
        height: 45,
        borderWidth: 1,
        padding: 2,
        width: "100%",
        borderRadius: 10,
        borderColor: "#8EA4BB",
        backgroundColor: "#006B7F",
    },
});