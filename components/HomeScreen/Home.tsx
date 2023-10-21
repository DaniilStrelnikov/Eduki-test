import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import {
	View,
	useWindowDimensions,
	FlatList,
	ActivityIndicator,
	SafeAreaView,
} from "react-native";
import { MaterialType, getPosts } from "../api/getPosts";
import { Material } from "../components/Material";
import style from "./style";
import { Search } from "../components/Search";

export const Home = () => {
	const [materials, setMaterials] = useState<MaterialType[]>();
	const [page, setPage] = useState<number>(0);
	const [value, setValue] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { width } = useWindowDimensions();

	const loadData = useCallback(
		(page: number, searchString?: string) => {
			if (isLoading) return;
			setIsLoading(true);
			getPosts(page, value).then((data) => {
				const mattData = data?.data?.items?.materials;
				if (searchString == undefined && materials != undefined)
					setMaterials([...materials, ...mattData]);
				else setMaterials(mattData);

				setIsLoading(false);
				setPage(page);
			});
		},
		[materials, isLoading]
	);

	const search = () => {
		setMaterials(undefined);
		loadData(0, value);
		setValue("");
	};

	const loadMore = () => {
		loadData(page + 1);
	};

	return (
		<SafeAreaView>
			<Search value={value} setValue={setValue} search={search} />
			<View>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={materials}
					keyExtractor={(_, id) => id.toString()}
					onEndReachedThreshold={0.6}
					onEndReached={loadMore}
					numColumns={Math.floor(width / 150)}
					contentContainerStyle={style.contentContainerStyle}
					ListFooterComponent={() =>
						isLoading ? (
							<ActivityIndicator style={style.ListFooterComponentStyle} />
						) : null
					}
					ItemSeparatorComponent={() => (
						<View style={style.ItemSeparatorComponentStyle} />
					)}
					renderItem={({ item }) => (
						<Material
							image={item.firstPreviewImage.watermarked}
							author={item.author.details.publicName}
							price={item.price}
							title={item.title}
						/>
					)}
				/>
			</View>

			<StatusBar style="auto" />
		</SafeAreaView>
	);
};
