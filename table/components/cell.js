import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Cell extends Component {
  static propTypes = {
    style: View.propTypes.style,
    textStyle: Text.propTypes.style,
    borderStyle: View.propTypes.style,
    textNumberLines:React.PropTypes.number,
  }

  render() {
    const {data, width, height, flex, style, textStyle, textNumberLines} = this.props;
    let borderWidth,borderColor;
    if (this.props.borderStyle && this.props.borderStyle.borderWidth) {
      borderWidth = this.props.borderStyle.borderWidth;
    } else {
      borderWidth = 0.5;
    }
    if (this.props.borderStyle && this.props.borderStyle.borderColor) {
      borderColor = this.props.borderStyle.borderColor;
    } else {
      borderColor = '#000';
    }
    return (
      <View style={[
        {
          borderTopWidth: borderWidth,
          borderRightWidth: borderWidth,
          borderColor: borderColor,
        },
        styles.cell,
        width && {width: width},
        height && {height: height},
        flex && {flex: flex},
        !width && !flex && !height && {flex: 1},
        style
      ]}>
        <Text style={[textStyle, styles.text]} numberOfLines={textNumberLines}>{data}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
  },
})

export default Cell;
