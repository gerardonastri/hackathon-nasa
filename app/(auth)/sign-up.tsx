import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View className="pt-10 px-8 flex-row items-center justify-between">
        <View />
        <Image source={images.logoSmall} resizeMode="cover" className="" />
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={icons.close}
            resizeMode="contain"
            tintColor="#DBDBDB"
            className="w-[25px] h-[25px]"
          />
        </TouchableOpacity>
      </View>

      <View className="mx-10 mt-12">
        <Text className="text-5xl text-secondary font-bold">
          Hey, {"\n"}
          <Text className="!text-primary">Login</Text> Now!
        </Text>

        <View className="mt-10">
          <Text className="text-secondary text-md font-medium mb-2">
            Email / Username
          </Text>
          <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholder="Enter e-mail address / username"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
          />
        </View>
        <View className="mt-7">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-secondary text-md font-medium">Password</Text>
            <Link
              href="/(auth)/forgot-password"
              className="text-[12px] text-gray-400"
            >
              Forgot password?
            </Link>
          </View>
          <TextInput
            onChangeText={(password) => setPassword(password)}
            placeholder="Enter password"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
          />
        </View>

        <TouchableOpacity
          className="mt-[50%] bg-primary w-[50%] flex-row items-center justify-center py-3 rounded-md mx-auto"
          onPress={() => router.push("/(auth)/onboarding")}
        >
          <View className="flex flex-row items-center gap-x-3 ">
            <Text className="text-white  text-lg">Sign in</Text>
            <Image
              source={icons.arrowRight}
              resizeMode="cover"
              tintColor="white"
              className="w-[26px] h-[26px]"
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
