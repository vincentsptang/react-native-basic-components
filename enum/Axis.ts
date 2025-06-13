import { FlexAlignType, FlexStyle } from 'react-native';

export const FlexMainAxisAlignTypes: Record<
  string,
  FlexStyle['justifyContent']
> = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly'
};

export const FlexCrossAxisAlignTypes: Record<string, FlexStyle['alignItems']> =
  {
    ...FlexMainAxisAlignTypes,
    stretch: 'stretch'
  };

export const FlexAlignTypes: Record<string, FlexAlignType> = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline'
};
