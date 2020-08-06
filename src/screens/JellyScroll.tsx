import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { divide, interpolate, set, startClock, useCode } from 'react-native-reanimated';
import { useClock, useDiff, useScrollHandler, useValue } from 'react-native-redash';


//MY IMPORTS
import Card from '../components/Card';
import { data } from '../data/data';

const JellyScroll = () => {
    const clock = useClock();
    const velocity = useValue(0);
    const { scrollHandler, y } = useScrollHandler();
    const dt = useDiff(clock);
    const dy = useDiff(y);
    useCode(() => [
        startClock(clock),
        set(velocity, divide(dy, dt))
    ], []);

    return (
        <>
            <View style={styles.container}>
                <Animated.ScrollView
                    bounces={false}
                    {...scrollHandler}
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    {data.map((item, index) => {

                        const skewY = interpolate(velocity, {
                            inputRange: [-10, 0, 10],
                            outputRange: [-Math.PI / 9, 0, Math.PI / 9]
                        });

                        return (
                            <Animated.View
                                key={item.id}
                                style={{
                                    transform: [{ skewY }]
                                }}
                            >
                                <Card  {...item} isFirst={index === 0} />
                            </Animated.View>)
                    })}
                </Animated.ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4e3e3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        width: '100%',
        height: '100%',
    }
});

export default JellyScroll;
