import { FlexStyle, ViewProps } from 'react-native';

import {
  FlexCrossAxisAlignTypes,
  FlexMainAxisAlignTypes
} from '../../enum/Axis';
import Center from './Center';

export default function Column({
  children,
  mainAxisAlign = FlexMainAxisAlignTypes.center,
  crossAxisAlign = FlexCrossAxisAlignTypes.center,
  ...props
}: ViewProps & {
  mainAxisAlign: FlexStyle['justifyContent'];
  crossAxisAlign: FlexStyle['alignItems'];
}) {
  return (
    <Center
      {...props}
      style={[
        props.style,
        {
          flexDirection: 'column',
          justifyContent: mainAxisAlign,
          alignItems: crossAxisAlign
        }
      ]}
    >
      {children}
    </Center>
  );
}
