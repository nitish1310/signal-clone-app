import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItems = ({ id, chatName, enterChat }) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://lh3.googleusercontent.com/proxy/UrxEaxy4aPfce2hxQZMQyOPKILHWwxn0fUvUUUfjUTQumb6RwX9_VFKs8y8Pqhvh74UXHQHIT77xFYx9shKNLyVCMm9qGJaa3N_qAgW7PagxdHGZ5xm6wQ",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItems;

const styles = StyleSheet.create({});
