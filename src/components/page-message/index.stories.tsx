import type { Meta, StoryObj } from "@storybook/react";
import PageMessage from "./index";

const meta = {
    title: "Components/PageMessage",
    component: PageMessage,
    tags: ["autodocs"],
} satisfies Meta<typeof PageMessage>;

export default meta;
type Story = StoryObj<typeof meta>;