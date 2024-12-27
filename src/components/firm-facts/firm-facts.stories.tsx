import type { Meta, StoryObj } from "@storybook/react";

import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { Button } from "../button";
import { FirmFactCard } from "../firm-fact-card";
import { FirmFacts } from "./firm-facts";

const meta = {
  title: "Components/FirmFacts",
  component: FirmFacts,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "100px" }}>
        <Story />
      </div>
    )
  ],
  args: {
    children: "Firm Facts"
  }
} satisfies Meta<typeof FirmFacts>;

export default meta;
type Story = StoryObj<typeof meta>;

const buttonTextLong =
  "This is a two line button that terminates with something very long";
const buttonTextShort = "This is a one line button";

export const Default: Story = {
  args: {
    children: (
      <>
        <FirmFactCard>
          <Button variant="icon" icon={<IconSearch size={18} color="white" />}>
            {buttonTextLong}
          </Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button variant="icon" icon={<IconSearch size={18} color="white" />}>
            {buttonTextLong}
          </Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button>{buttonTextShort}</Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button variant="icon" icon={<IconSearch size={18} color="white" />}>
            {buttonTextLong}
          </Button>
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button variant="icon" icon={<IconSearch size={18} color="white" />}>
            {buttonTextLong}
          </Button>
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button
            variant="icon"
            icon={<IconSearch size={18} color="white" />}
            disabled
          >
            {buttonTextLong}
          </Button>
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button variant="icon" icon={<IconSearch size={18} color="white" />}>
            {buttonTextLong}
          </Button>
        </FirmFactCard>
      </>
    )
  }
};
