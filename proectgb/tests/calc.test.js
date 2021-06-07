import 'regenerator-runtime/runtime'
import HelloWorld from '../src/components/HelloWorld'
import { mount } from '@vue/test-utils'

describe('Calculator test', () => {  
  test('Test', () => {
    const Wrapper = mount(HelloWorld)
        
    const operand1 = Wrapper.find('input[name=operand1]')
    operand1.setValue('100')

    expect(Wrapper.vm.operand1).toBe(100)

    const operand2 = Wrapper.find('input[name=operand2]')
    operand2.setValue('5')

    expect(Wrapper.vm.operand2).toBe(5)

    const sumBtn = Wrapper.find('button[name="+"]')
    sumBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(105)

    const divBtn = Wrapper.find('button[name="/"]')
    divBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(20)

    const multiplyBtn = Wrapper.find('button[name="*"]')
    multiplyBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(500)

    const subBtn = Wrapper.find('button[name="-"]')
    subBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(95)

    const expBtn = Wrapper.find('button[name="^"]')
    expBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(10000000000)

    const remDivBtn = Wrapper.find('button[name="%"]')
    remDivBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(0)
  })
})