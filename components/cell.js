import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export class Cell extends Component {
  static propTypes = {
    data: PropTypes.any,
    width: PropTypes.any,
    height: PropTypes.number,
    flex: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    borderStyle: PropTypes.object
  };

  render() {
    const { data, width, height, flex, style, textStyle, borderStyle, ...props } = this.props;
    if (typeof data === 'number') {
      estilosNumeros = props.estilosNumeros
    } else {
      estilosNumeros = null;
    }
    const textDom = React.isValidElement(data) ? (
      data
    ) : (
      <Text style={[textStyle, styles.text, estilosNumeros]} {...props}>
        {data}
      </Text>
    );
    const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
    const borderRightWidth = borderTopWidth;
    const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

    return (
      <View
        style={[
          {
            borderTopWidth,
            borderRightWidth,
            borderColor
          },
          styles.cell,
          width && { width },
          height && { height },
          flex && { flex },
          !width && !flex && !height && !style && { flex: 1 },
          style
        ]}
      >
        {textDom}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: { justifyContent: 'center' },
  text: { backgroundColor: 'transparent' }
});