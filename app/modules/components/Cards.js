import React, {Component} from "react";
import {Text, StyleSheet, View, TouchableOpacity, Image} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEnvelope, faDonate} from "@fortawesome/free-solid-svg-icons";
import TouchableScale from 'react-native-touchable-scale';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';


class Cards extends Component {

    state = {cards: []}

    componentDidMount() {
        firebase.database()
            .ref('/users/' + this.props.currentUser)
            .on('value', snapshot => {
                const cardsArray = [];
                snapshot.forEach((child) => {
                    cardsArray.push({
                        time: child.val().time,
                        location: child.val().location,
                    });
                });
                this.setState({
                    cards: cardsArray,
                });
                console.log(this.state.cards)
      });
    }

    render() {
        return(
            <View style={styles.cardsContainer}>
                {
                    this.state.cards.reverse().map((u, i) => {
                        return(
                            <TouchableScale style={[styles.card, {backgroundColor: '#fff'}]} pressOutFriction={200} pressInFriction={100} key={i}>
                                <View style={styles.cardContent}>
                                        <Text style={styles.title} numberOfLines={1}>{u.time}</Text>
                                        <Text style={styles.subTitle} numberOfLines={1}>{u.location}</Text>
                                </View>
                            </TouchableScale>
                        );
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardsContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '90%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        overflow: 'hidden',
        marginBottom: 20,
    },
    cardContent: {
        width: '100%',
        height: '100%',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 17,
        fontFamily: 'Montserrat-Bold',
        color: '#000',
    },
    subTitle: {
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
        color: '#000',
    },
})

export default Cards;
