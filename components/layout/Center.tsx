import { View, ViewProps } from 'react-native';

export default function Center({ children, ...props }: ViewProps) {
  return (
    <View {...props} style={[props.style, { flexDirection: 'column' }]}>
      {children}
    </View>
  );
}
