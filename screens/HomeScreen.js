import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItems from "../components/CustomListItems";
import { auth, db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black", alignSelf: "center" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItems />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
