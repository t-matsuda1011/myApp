import type { Meta, StoryObj } from "@storybook/react";
import Header  from "./index";

const meta = {
    title: "Components/DetailItem",
    component: Header,
    tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;