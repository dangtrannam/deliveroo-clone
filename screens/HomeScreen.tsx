import { useNavigation } from "@react-navigation/native";
import Categories from "components/Categories";
import FeatureRow from "components/FeatureRow";
import { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

export const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    return () => {};
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row  items-center pb-3 mx-4 space-x-2">
        <Image
          source={{
            uri: "https://picsum.photos/200",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Category */}
        <Categories />
        {/* Feature */}
        <FeatureRow
          id="123"
          title="Featured"
          description="Paid placements from out partners"
        />
        {/* Tasty Discounts */}
        <FeatureRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        {/* Offers near you */}
        <FeatureRow
          id="1235"
          title="Offers near you"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
