import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
	image: string;
	title: string;
	author: string;
	price: number;
};

export const Material = ({ image, title, author, price }: Props) => {
	return (
		<TouchableOpacity style={style.wrapper}>
			<Image src={image} alt="preview" style={style.image} />
			<View style={style.descWrapper}>
				<Text numberOfLines={3} style={style.title}>
					{title}
				</Text>
				<Text style={style.author}>{author}</Text>
				<Text style={style.price}>{price} $</Text>
			</View>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	wrapper: {
		width: 170,
		height: 310,
		justifyContent: "flex-end",
		marginHorizontal: 20,
	},
	image: {
		width: 150,
		height: 200,
		position: "absolute",
		zIndex: 2,
		bottom: 110,
		left: 10,
		borderWidth: 1,
	},
	descWrapper: {
		borderWidth: 1,
		height: 220,
		justifyContent: "flex-end",
		paddingHorizontal: 8,
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
	},
	author: {
		color: "gray",
	},
	price: {
		fontWeight: "600",
		marginTop: 10,
	},
});
