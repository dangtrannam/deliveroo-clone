import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

interface IProps {
  id: string;
  title: string;
  description: string;
}
export default function FeatureRow({ id, title, description }: IProps) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00ccbb"} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card */}
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <RestaurantCard
            key={el}
            id={`${el}`}
            imgUrl={"https://picsum.photos/200"}
            title={"Yo! Sushi"}
            rating={4.5}
            genre={"Japanese"}
            address={"123 Main St"}
            short_description={"This is test description"}
            dishes={[]}
            long={20}
            lat={0}
          />
        ))}
      </ScrollView>
    </View>
  );
}
