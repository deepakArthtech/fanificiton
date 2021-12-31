import React from "react";
import { Image, TextInput, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Header(props) {

    const {
        navigationState,
        navigation,
        activeTintColor,
        inactiveTintColor
    } = props;
    const activeTabIndex = navigation.state.index;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 20 }}>
                <View style={styles.textInputStyle}>
                    <Image source={require('../../asserts/search_icon.png')} />
                    <TextInput placeholder="Search For Novel" style={{ flex: 1, marginLeft: 10 }} />
                </View>
                <Image source={require('../../asserts/gift.png')} style={{ marginTop: 30, marginLeft: 5 }} />
                <Image source={require('../../asserts/filter2.png')} style={{ marginTop: 30, marginLeft: 5 }} />
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20 }}>
                {navigationState.routes.map((route, index) => {
                    const isRouteActive = index == activeTabIndex;
                    const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                    return (
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate(route.routeName)}
                            key={route.routeName}
                        >
                            <View>
                                <Text
                                    style={{
                                        fontSize: 17,
                                        textTransform: "uppercase",
                                        color: `${tintColor}`,
                                        fontWeight: `${isRouteActive ? "bold" : "normal"}`
                                    }}
                                >
                                    {route.routeName}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}


            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    textInputStyle: {
        marginTop: 30,
        borderColor: 'grey',
        color: 'black',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#F2F2F2',
        flex: 1
    },
    imageStyle: {
        height: windowHeight / 3,
        width: windowWidth / 3,
        borderRadius: 10
    }
});

export default Header


