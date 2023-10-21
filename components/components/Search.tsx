import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
	value: string;
	setValue: (text: string) => void;
	search: () => void;
};

export const Search = ({ value, setValue, search }: Props) => {
	return (
		<View style={style.wrapper}>
			<TextInput
				style={style.searchText}
				value={value}
				onChangeText={(text) => setValue(text)}
			/>
			<TouchableOpacity onPress={search} style={style.buttonWrapper}>
				<Feather name="search" size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
};

const style = StyleSheet.create({
	wrapper: {
		borderWidth: 1,
		borderColor: "lightslategrey",
		marginHorizontal: 20,
		marginBottom: 20,
		borderRadius: 20,
		flexDirection: "row",
	},
	searchText: { fontSize: 16, flex: 1, padding: 12, paddingHorizontal: 20 },
	buttonWrapper: {
		backgroundColor: "lightskyblue",
		width: 50,
		alignItems: "center",
		justifyContent: "center",
		borderBottomEndRadius: 20,
		borderTopEndRadius: 20,
	},
});
