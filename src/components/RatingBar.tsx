import { FC } from 'react';
import { View } from 'react-native';

import Star from '../assets/star.svg';

interface IRatingBar {
  stars: number
}

export const RatingBar: FC<IRatingBar> = ({ stars }) => (
  <View style={{ flexDirection: 'row', gap: 9 }}>
    {
      [...Array(stars || 5)].map((star, index) => <Star key={index} />)
    }
  </View>
);
