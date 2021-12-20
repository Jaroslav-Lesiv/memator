import React, { useCallback, useState } from 'react';
import { Image as RNImage, ImageProps, LayoutChangeEvent } from 'react-native';

import styles from './styles';

interface Props extends ImageProps {
  /**
   * image aspect ration (width / height)
   *
   * @type {number}
   * @memberof Props
   */
  aspectRatio?: number;
}

const Image: React.FunctionComponent<Props> = ({ aspectRatio = 2, ...props }) => {
  const [height, setHeight] = useState(0);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setHeight(event.nativeEvent.layout.width / aspectRatio);

    if (props.onLayout) props.onLayout(event);
  }, []);

  return <RNImage {...props} style={[styles.image, { height, maxHeight: height }, props.style]} onLayout={onLayout} />;
};

export default Image;
