// Приклад модульних тестів з використанням Jest або Mocha

import { mount } from '@vue/test-utils';
import RegistrationForm from '@/components/RegistrationForm.vue';

describe('RegistrationForm', () => {
  it('відображає форму реєстрації користувача', () => {
    const wrapper = mount(RegistrationForm);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('label[for="name"]').text()).toBe('Ім\'я:');
    expect(wrapper.find('label[for="email"]').text()).toBe('Email:');
    expect(wrapper.find('button[type="submit"]').text()).toBe('Зареєструватися');
  });

  it('валідація електронної пошти перед відправкою форми', () => {
    const wrapper = mount(RegistrationForm);
    wrapper.setData({ participant: { name: 'John Doe', email: 'invalid_email' } });
    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.find('.error-message').exists()).toBe(true);
    expect(wrapper.find('.error-message').text()).toContain('Введіть коректну адресу електронної пошти.');
  });

  it('відправка форми успішно', async () => {
    const wrapper = mount(RegistrationForm);
    wrapper.setData({ participant: { name: 'John Doe', email: 'john.doe@example.com' } });
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.emitted().formSubmitted).toBeTruthy();
  });
});
