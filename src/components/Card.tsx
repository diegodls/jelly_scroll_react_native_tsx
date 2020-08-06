import React from 'react';
import { View, StyleSheet, Text, Image, ImageSourcePropType } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
IconFA.loadFont();

interface itemProps {
    id: number;
    info: string;
    image: ImageSourcePropType;
    isFirst: boolean;
}

const Card = ({ info, image, isFirst }: itemProps) => {
    return (
        <>
            <View style={[styles.container, {
                paddingTop: isFirst ? 45 : 0,
            }]}>
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={image} style={styles.image} />

                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>{info}</Text>
                        <IconFA name={'chevron-right'} size={24} color={'#222831'} />
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    cardContainer: {
        backgroundColor: '#FDFAFD',
        width: '90%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        overflow: 'hidden',
        shadowColor: "#222831",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
    },
    infoContainer: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',       
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 10,
        bottom: 10,
        position: 'absolute',        

    },
    infoText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222831',      
        transform: [{ scaleX: 1.01 }]
    }

});

export default Card;
