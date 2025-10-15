import { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

export default function WelcomeScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: require("../../assets/welcomeimg.png"),
      text: "We are into automating Microfinance in World",
    },
    {
      id: 2,
      image: require("../../assets/Network.png"),
      text: "Paynow is a Microfinance business Software",
    },
  ];

  const handleNext = (i) => {
    const swiper = swiperRef.current;
    if (swiper && swiper.scrollBy) {
      if (i < slides.length - 1) {
        swiper.scrollBy(1);
      } else {
        navigation.navigate("Login");
      }
    }
  };

  return (
    <Swiper
      ref={(ref) => {
        swiperRef.current = ref;
      }}
      loop={false}
      showsPagination={true}
      onIndexChanged={(i) => setIndex(i)}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      {slides.map((slide, i) => (
        <View key={slide.id} style={styles.container}>
          <Image
            source={slide.image}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>{slide.text}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => handleNext(i)}
              style={styles.nextButton}
            >
              <Text style={styles.nextText}>
                {i < slides.length - 1 ? "Next" : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#002B5B",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 90,
    right: 30,
  },
  nextButton: {
    backgroundColor: "transparent",
  },
  nextText: {
    fontSize: 16,
    color: "#002B5B",
    fontWeight: "700",
  },
  dot: {
    backgroundColor: "#ddd",
    marginBottom: 30,
  },
  activeDot: {
    backgroundColor: "#002B5B",
    marginBottom: 30,
  },
});
