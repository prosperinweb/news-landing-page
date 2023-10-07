import styles from "./ContactForm.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(2)
    .max(30)
    .regex(/^[A-Za-z]+$/i, "Name should contain only letters"),
  email: z.string().email(),
  message: z.string().min(1, "Message cannot be empty"),
});

type FormData = z.infer<typeof schema>;

const {
  contactForm,
  contactForm__title,
  contactForm__group,
  contactForm__group__label,
  contactForm__group__input,
  contactForm__group__textarea,
  contactForm__newsletter,
  contactForm__newsletter__checkbox,
  contactForm__button,
  contactForm__group__errorMessage,
} = styles;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form className={contactForm} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={contactForm__title}>Contact Us</h3>
      <div className={contactForm__group}>
        <label htmlFor="name" className={contactForm__group__label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          aria-required="true"
          className={contactForm__group__input}
        />
        {errors.name && (
          <span id="nameError" className={contactForm__group__errorMessage}>
            {errors.name.message}
          </span>
        )}
      </div>

      <div className={contactForm__group}>
        <label htmlFor="email" className={contactForm__group__label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          aria-required="true"
          className={contactForm__group__input}
        />
        {errors.email && (
          <span id="emailError" className={contactForm__group__errorMessage}>
            {errors.email.message}
          </span>
        )}
      </div>

      <div className={contactForm__group}>
        <label htmlFor="message" className={contactForm__group__label}>
          Message:
        </label>
        <textarea
          id="message"
          {...register("message")}
          aria-required="true"
          className={contactForm__group__textarea}
        ></textarea>
        {errors.message && (
          <span id="messageError" className={contactForm__group__errorMessage}>
            {errors.message.message}
          </span>
        )}
      </div>

      <div className={contactForm__newsletter}>
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          className={contactForm__newsletter__checkbox}
        />
        <label htmlFor="newsletter">Opt-in for Newsletter</label>
      </div>

      <button type="submit" className={contactForm__button} disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
