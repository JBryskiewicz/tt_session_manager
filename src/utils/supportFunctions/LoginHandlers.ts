/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, FormEvent, SetStateAction } from "react";
import { NewUser } from "../../types/types";
import { createUser } from "../API_communication";
import { loginSchema, registerSchema } from "../validation/schema";
import { NavigateFunction } from "react-router-dom";
import { addressLibrary } from "../addressLibrary";
import { auth } from "../../firebase";

const { login, dashboard } = addressLibrary;

/** Handles register form submit, on yup validation failure, sets error message.
 *  On success creates user for firebase auth & session manager backend, then
 *  redirects to login screen.
 */
export const onRegisterSubmit = async (
  emailValue: string,
  passwordValue: string,
  repeatPassValue: string,
  createUserWithEmailAndPassword: any,
  navigate: NavigateFunction,
  setErrorMessage: Dispatch<SetStateAction<string>>,
  setValidated: Dispatch<SetStateAction<boolean>>,
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  try {
    await registerSchema.validate(
      {
        email: emailValue,
        password: passwordValue,
        repeatPassword: repeatPassValue,
      },
      { abortEarly: false }
    );
    if (passwordValue === repeatPassValue) {
      await createUserWithEmailAndPassword(emailValue, passwordValue).then(
        async () => {
          const newUser: NewUser = { email: emailValue, sessions: [] };
          await createUser(newUser);
          navigate(login);
        }
      );
    }
  } catch (error) {
    setValidated(false);
    setErrorMessage("Registration failed. Please check your inputs.");
    console.log("Sing up process failed => " + error);
  }
};

/** Handles login form submit, on yup validation failure set error message.
 * On success sends request to firebase for authentication of the user and redirects
 * logged in user to their dashboard.
 */
export const onLoginSubmit = async (
  emailValue: string,
  passwordValue: string,
  signInWithEmailAndPassword: any,
  navigate: NavigateFunction,
  setErrorMessage: Dispatch<SetStateAction<string>>,
  setValidated: Dispatch<SetStateAction<boolean>>,
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();
  try {
    await loginSchema.validate(
      { email: emailValue, password: passwordValue },
      { abortEarly: false }
    );
    await signInWithEmailAndPassword(auth, emailValue, passwordValue).then(
      () => {
        navigate(dashboard);
      }
    );
  } catch (error) {
    setErrorMessage("Either your password or email input is incorrect.");
    setValidated(false);
    console.log("Login failed " + error);
  }
};
