import { shallowMount } from "@vue/test-utils";
import PokemonCard from "@/components/PokemonCard.vue";

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: {
        is_default: true,
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
      },
    }),
}));

describe("PokemonCard.vue", () => {
  const wrapper = shallowMount(PokemonCard, { propsData: { name: "pikachu" } });
  it("it should render image and name", () => {
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.name).toMatch("pikachu");
      expect(wrapper.findAll("img").length).toEqual(1);
      expect(wrapper.findAll("h2").length).toEqual(1);
      expect(wrapper.find("img").attributes("src")).toBe(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      );
      expect(wrapper.find("h2").text()).toBe("pikachu");
    });
  });
});
