import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("it should render image and name", () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.text()).toBe("Made with love");
  });
});
