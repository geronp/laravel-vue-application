import {mount} from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Home from "../Home.vue";
const wrapper = mount(Home);

it("testing Home component", async () => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.text()).toContain('Welcome')
});