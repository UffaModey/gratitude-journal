/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Entry } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, TextAreaField, TextField } from "@aws-amplify/ui-react";
export default function CreateEntry(props) {
  const { entry, overrides, ...rest } = props;
  const [textFieldValue, setTextFieldValue] = useStateMutationAction("");
  const [textAreaFieldValue, setTextAreaFieldValue] =
    useStateMutationAction("");
  const buttonThreeFourFiveSixTwoEightEightFourOnClick =
    useDataStoreCreateAction({
      fields: { date: textFieldValue, text: textAreaFieldValue },
      model: Entry,
      schema: schema,
    });
  const buttonThreeFourSixOneTwoSixSixSevenOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <Flex
      gap="20px"
      direction="column"
      position="relative"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreateEntry")}
    >
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 425")}
      >
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="300px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Date"
          placeholder="2022-09-09"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldValue}
          onChange={(event) => {
            setTextFieldValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 424")}
      >
        <TextAreaField
          display="flex"
          gap="8px"
          direction="column"
          width="300px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Entry"
          placeholder="What are you thankful for today?"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textAreaFieldValue}
          onChange={(event) => {
            setTextAreaFieldValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextAreaField")}
        ></TextAreaField>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(252,229,165,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Save"
          onClick={() => {
            buttonThreeFourFiveSixTwoEightEightFourOnClick();
          }}
          {...getOverrideProps(overrides, "Button34562884")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(192,41,217,0.15)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Home"
          onClick={() => {
            buttonThreeFourSixOneTwoSixSixSevenOnClick();
          }}
          {...getOverrideProps(overrides, "Button34612667")}
        ></Button>
      </Flex>
    </Flex>
  );
}
