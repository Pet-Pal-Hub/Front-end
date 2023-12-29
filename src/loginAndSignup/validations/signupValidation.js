import * as Yup from "yup";

export const signupValidation = Yup.object().shape({
    firstName: Yup.string()
        .required("Required").min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
        .required("Required").min(2, "Last name must be at least 2 characters"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            {message: "Must contain at least one uppercase, one lowercase, one number and one special case character"}
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Required"),
    phoneNumber: Yup.string()
        .min(11, "Phone number must be at least 11 characters")
        .max(11, "Phone number must be at most 11 characters")
        .required("Required"),
    shelterCode: Yup.string()
        .min(6, "Last name must be at least 6 characters")
        .required("Required"),
    shelterId: Yup.number()
        .positive("Shelter id must be positive")
        .required("Required")
});
