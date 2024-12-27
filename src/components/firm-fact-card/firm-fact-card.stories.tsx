import type { Meta, StoryObj } from "@storybook/react";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { Button } from "../button";
import { FirmFactCard } from "./firm-fact-card";

const meta = {
  title: "Components/FirmFactCard",
  component: FirmFactCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    variant: "default"
  }
} satisfies Meta<typeof FirmFactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const buttonText = "This is a one line button";

export const Default: Story = {
  args: {
    children: (
      <Button variant="icon" icon={<IconSearch size={18} color="white" />}>
        {buttonText}
      </Button>
    )
  }
};

export const Border: Story = {
  args: {
    children: (
      <Button variant="icon" icon={<IconSearch size={18} color="white" />}>
        {buttonText}
      </Button>
    ),
    variant: "border"
  }
};
