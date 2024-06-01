import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { ElButton } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { h, markRaw, nextTick, ref } from 'vue'

describe('el-button', () => {
    it('have primary class', () => {
        const wrapper = mount(ElButton, {
            props: {
                type: 'primary'
            }
        })
        expect(wrapper.classes()).toContain('el-button--primary')
    })
    it('have icon', () => {
        const wrapper = mount(ElButton, {
            props: {
                icon: markRaw(Search)
            }
        })
        expect(wrapper.findComponent(markRaw(Search)).exists()).toBeTruthy()
    })
    it('nativeType', () => {
        const wrapper = mount(ElButton, {
            props: {
                nativeType: 'submit'
            }
        })
        expect(wrapper.attributes('type')).toBe('submit')
    })
    it('text', async () => {
        const text = ref(true)

        const wrapper = mount(ElButton, {
            props: {
                text: text.value,
                bg: false
            }
        });
        expect(wrapper.classes()).toContain('is-text')

        wrapper.setProps({ bg: true })

        await nextTick()

        expect(wrapper.classes()).toContain('is-has-bg')
    })
    it('render text', () => {
        const wrapper = mount(ElButton, {
            slots: {
                default: 'hello world'
            }
        });
        expect(wrapper.text()).toEqual('hello world')
    })
    it('handle click', async () => {
        const wrapper = mount(ElButton, {
            slots: {
                default: 'hello world'
            }
        });

        await wrapper.trigger('click')

        expect(wrapper.emitted()).toBeDefined()
    })
    it('handle click inside', async () => {
        const wrapper = mount(ElButton, {
            slots: {
                default: h('span', { class: 'inner-slot' }, 'hello world')
            }
        });

        wrapper.find('.inner-slot').trigger('click')
        expect(wrapper.emitted()).toBeDefined()

    })
    it('toBe', () => {
        const data = 100
        expect(data).toBe(100)

        const obj1 = {
            name: 'best',
            age: 18
        }

        const obj2 = obj1

        expect(obj1).toBe(obj2)
    })

    it('toEqual', () => {
        const obj1 = {
            name: 'best',
            age: 18
        }

        const obj2 = {
            name: 'best',
            age: 18,
        }

        expect(obj1).toEqual(obj2)
    })

    it('toBeTruthy', () => {
        expect(true).toBeTruthy()
    })
    it('toBeTruthy', () => {
        expect(false).toBeFalsy()
    })
})
