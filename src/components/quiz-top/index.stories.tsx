import type { Meta, StoryObj } from "@storybook/react";
import Quiztop from "./index";

const meta = {
    title: "Components/DetailItem",
    component: Quiztop,
    tags: ["autodocs"],
} satisfies Meta<typeof Quiztop>;

export default meta;
type Story = StoryObj<typeof meta>;