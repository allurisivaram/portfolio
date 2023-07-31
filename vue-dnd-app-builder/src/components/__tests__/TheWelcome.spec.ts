import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'

describe('Welcome', () => {
  it('renders properly', () => {
    const wrapper = mount(TheWelcome, { props: { msg: 'Welcome Template......' } })
    expect(wrapper.text()).toContain('Welcome Template......')
  })
})
