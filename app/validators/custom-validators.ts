import { Constants } from '../constants';
/**
 * Checks if the given control value is an email address
 * @param   control The Control
 * @return  Error object if validation fails
 */
export function emailAddressValidator(control) {
  let result = null;
  let emailPattern = Constants.VALIDATION_PATTERNS.EMAIL;

  if (!control || !control.value || !emailPattern.test(control.value)) {
    result = {
      notEmail: true
    };
  }

  return result;
}
/**
 * Checks if the given control value is holds minimum no of characters of password
 * @param   control The Control
 * @return  Error object if validation fails
 */
export function passwordValidator(control) {
  let minimumCharacters = Constants.MINIMUM_CHARACTERS_PASSWORD;
  let result = null;

  if (!control || !control.value || ((control.value.length < minimumCharacters))) {
    result = {
      notPassword: true
    };
  }

  return result;
}
