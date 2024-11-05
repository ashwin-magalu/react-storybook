import React from "react";
import Input from "./Input";

export default {
  title: "form/Input", // Here, Form is a group, if we don't want to add it in a group, remove {group_name}/ from the title
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;

// Renaming a story
Small.storyName = 'Small Input'