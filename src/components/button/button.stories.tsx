import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: fn(),
    children: "Button",
    disabled: false,
    icon: null,
    variant: "default"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a one line button"
  }
};

export const Icon: Story = {
  args: {
    children:
      "This is a two line button that terminates with something very long",
    icon: <IconSearch size={18} color="white" />,
    variant: "icon"
  }
};

export const Disabled: Story = {
  args: {
    children: "This is a disabled button",
    disabled: true
  }
};
