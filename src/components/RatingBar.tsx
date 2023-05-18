import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import Star from '../assets/star.svg';

interface IRatingBar {
  stars: number
}

export const RatingBar: FC<IRatingBar> = ({ stars }) => (
  <View style={styles.starBlock}>
    {
      [...Array(stars || 5)].map((star, index) => <Star key={index} />)
    }
  </View>
);

const styles = StyleSheet.create({
  starBlock: {
    flexDirection: 'row',
    gap: 9
  }
});
