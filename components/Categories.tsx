import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <CategoryCard
          key={el}
          imgUrl="https://picsum.photos/200"
          title={`Test ${el}`}
        />
      ))}
    </ScrollView>
  );
}
