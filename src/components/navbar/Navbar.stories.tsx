import { NavBar } from "./Navbar";
import { Story, Meta } from "storybook-solid";

export default {
  component: NavBar,
  title: "Navigation/NavBar",
  args: {},
} as Meta;

const Template: Story = () => <NavBar />;

export const Primary = Template.bind({});
Primary.args = {};
