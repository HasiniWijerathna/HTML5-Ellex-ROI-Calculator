import { describe, expect, it } from '@angular/core/testing';

import {emailAddressValidator,
  passwordValidator
} from './custom-validators';

describe('customValidators', () => {

  it('should be a valied email', () => {

    expect(emailAddressValidator({ value: '' })).not.toBeNull();
    expect(emailAddressValidator({ value: null })).not.toBeNull();
    expect(emailAddressValidator({ value: 'foo@bar' })).not.toBeNull();
    expect(emailAddressValidator({ value: 'foo@.com' })).not.toBeNull();
    expect(emailAddressValidator({ value: 'foo@bar.com' })).toBeNull();
  });

  it('should be a valied password', () => {

    expect(passwordValidator({ value: '' })).not.toBeNull();
    expect(passwordValidator({ value: '12345' })).not.toBeNull();
    expect(passwordValidator({ value: 'abcdef' })).toBeNull();
  });

});
