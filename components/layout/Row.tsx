import { FlexAlignType, FlexStyle, ViewProps } from 'react-native';
import Center from './Center';
import {
  FlexCrossAxisAlignTypes,
  FlexMainAxisAlignTypes
} from '../../enum/Axis';

export default function Row({
  children,
  mainAxisAlign = FlexMainAxisAlignTypes.center,
  crossAxisAlign = FlexCrossAxisAlignTypes.center,
  ...props
}: ViewProps & {
  mainAxisAlign?: FlexStyle['justifyContent'];
  crossAxisAlign?: FlexAlignType;
}) {
  return (
    <Center
      {...props}
      style={[
        props.style,
        {
          flexDirection: 'row',
          justifyContent: mainAxisAlign,
          alignItems: crossAxisAlign
        }
      ]}
    >
      {children}
    </Center>
  );
}
