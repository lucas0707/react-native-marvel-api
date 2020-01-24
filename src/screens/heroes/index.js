import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image
} from "react-native";
import * as api from "./heroes-api";
import HeroDetail from "../hero-detail";

const Heroes = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroes, setHeroes] = useState([]);
  const [heroDetails, setHeroDetails] = useState({});
  const [showHeroDetails, setShowHeroDetails] = useState(false);
  const [filter, setFilter] = useState({
    offset: 1
  });

  useEffect(() => {
    const fetchHeroes = async () => {
      if (!isLoading) return;
      const response = await api.get(filter);

      setIsLoading(false);
      setHeroes(response.data.results);
    };
    fetchHeroes();
  }, [isLoading, heroes, filter]);

  const handleOpenDetails = itemDetails => {
    setHeroDetails(itemDetails);
    setShowHeroDetails(true);
  };

  const handleCloseDetails = () => setShowHeroDetails(false);

  const handleNextPage = () => {
    let newOffset = filter.offset + 20;
    setFilter({
      ...filter,
      offset: newOffset
    });
    setIsLoading(true);
  };

  const handleBeforePage = () => {
    if (filter.offset > 1) {
      let newOffset = filter.offset - 20;
      setFilter({
        ...filter,
        offset: newOffset
      });
      setIsLoading(true);
    }
  };

  return (
    <View>
      <HeroDetail
        details={heroDetails}
        show={showHeroDetails}
        onClose={handleCloseDetails}
      />
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={heroes}
          renderItem={itemData => {
            return (
              <TouchableOpacity
                style={styles.listItem}
                activeOpacity={0.8}
                onPress={() => handleOpenDetails(itemData.item)}
              >
                <Text style={styles.item}>{itemData.item.name}</Text>
                <Image
                  style={styles.image}
                  imageStyle={{ resizeMode: "cover" }}
                  source={{
                    uri: `${itemData.item.thumbnail.path}.${itemData.item.thumbnail.extension}`
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
        <View style={styles.pagination}>
          <View style={styles.buttonView}>
            <Button
              disabled={filter.offset === 1}
              style={styles.buttonPage}
              title="<"
              onPress={handleBeforePage}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              style={styles.buttonPage}
              title=">"
              onPress={handleNextPage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  listItem: {
    paddingTop: 10,
    borderColor: "black",
    borderBottomWidth: 1
  },
  image: {
    width: "100%",
    height: 200
  },
  item: {
    color: "black",
    fontWeight: "bold"
  },
  pagination: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%"
  },
  buttonPage: {
    width: "50%"
  },
  buttonView: {
    width: "50%"
  }
});

export default Heroes;
