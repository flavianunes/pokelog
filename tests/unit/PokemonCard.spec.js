import { shallowMount } from "@vue/test-utils";
import PokemonCard from "@/components/PokemonCard.vue";

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: {
        is_default: true,
        sprites: {
          front_details:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
      },
    }),
}));

describe("PokemonCard.vue", () => {
  it("it should render image and name", () => {
    const wrapper = shallowMount(PokemonCard, { name: "pikachu" });
    console.log({ wrapper: wrapper });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll("img").length).toBe(1);
    });
  });
});
