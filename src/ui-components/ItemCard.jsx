/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { Entry } from "../models";
import { schema } from "../models/schema";
import { Badge, Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function ItemCard(props) {
  const { entry, overrides, ...rest } = props;
  const vectorOnClick = useDataStoreDeleteAction({
    id: entry?.id,
    model: Entry,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="499px"
      height="160px"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(244,178,255,0.09)"
      {...rest}
      {...getOverrideProps(overrides, "ItemCard")}
    >
      <Badge
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="32px"
        backgroundColor="rgba(239,240,240,1)"
        fontSize="12px"
        lineHeight="12px"
        fontFamily="Inter"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        textAlign="left"
        direction="column"
        size="small"
        variation="default"
        children={entry?.date}
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="12px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={entry?.text}
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Icon
        width="14px"
        height="18px"
        viewBox={{ minX: 0, minY: 0, width: 14, height: 18 }}
        paths={[
          {
            d: "M11 6L11 16L3 16L3 6L11 6ZM9.5 0L4.5 0L3.5 1L0 1L0 3L14 3L14 1L10.5 1L9.5 0ZM13 4L1 4L1 16C1 17.1 1.9 18 3 18L11 18C12.1 18 13 17.1 13 16L13 4Z",
            fill: "rgba(190,126,241,0.54)",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        onClick={() => {
          vectorOnClick();
        }}
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
