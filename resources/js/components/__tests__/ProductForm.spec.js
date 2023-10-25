import {mount} from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import ProductForm from "../ProductForm.vue";
const wrapper = mount(ProductForm);

it("testing ProductForm component", async () => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.text()).toContain('Add Product')
})

it('click the submit button', async () => {
    const form = wrapper.find('form')
    const spyOnForm = vi.spyOn(form, 'trigger')
    await form.trigger('click')
    
    // Failed
    //expect(spyOnForm).toHaveBeenCalledTimes(2)
    
    // Success
    expect(spyOnForm).toHaveBeenCalledOnce()
})