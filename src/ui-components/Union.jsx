/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Union(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="0px"
      height="0px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Union")}
    >
      <Icon
        width="nullpx"
        height="nullpx"
        viewBox={{ minX: 0, minY: 0, width: null, height: null }}
        paths={[]}
        position="absolute"
        top="NaN%"
        bottom="NaN%"
        left="NaN%"
        right="NaN%"
        {...getOverrideProps(overrides, "Union34462689")}
      ></Icon>
      <View
        position="absolute"
        top="Infinity%"
        bottom="-Infinity%"
        left="Infinity%"
        right="-Infinity%"
        overflow="hidden"
        transformOrigin="top left"
        transform="rotate(180deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 426")}
      ></View>
    </View>
  );
}
