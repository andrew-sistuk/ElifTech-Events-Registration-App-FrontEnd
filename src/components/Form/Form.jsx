import DatePicker from 'react-datepicker';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';
import { useRef } from 'react';
import css from './Form.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { WHERE_MEMBER_HEAR } from '../../helpers/constants/info.jsx';
import { useDispatch } from 'react-redux';
import { registerMember } from '../../myRedux/events/operations.js';

function BookForm() {
  const datePickerRef = useRef(null);
  const { eventId } = useParams();
  const params = useParams();

  console.log(params);

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'The name must contain at least 3 characters'),
    email: yup.string().required('Email is required').email('Enter a valid email ***@***.**'),
    birthDate: yup.date().required('Date is required').typeError('Please enter a valid date'),
    info: yup.string().oneOf(WHERE_MEMBER_HEAR, 'Invalid selection'),
    comment: yup.string(),
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(newMember) {
    console.log('Form Data:', newMember);
    dispatch(
      registerMember({
        eventId,
        newMember,
      })
    );
    reset();
  }

  function onError(errors) {
    if (errors.birthDate) {
      datePickerRef.current?.focus();
    }
  }

  return (
    <form
      className={css.container}
      onSubmit={handleSubmit(onSubmit, onError)}
      autoComplete="off"
      noValidate
    >
      <h3 className={css.header}>Event registration</h3>
      <p className={css.paragraph}>
        Register now so you don`t miss out on important information and stay in touch!.
      </p>
      <input
        className={css.field}
        {...register('name')}
        type="text"
        placeholder="Name*"
        data-tooltip-id="my-tooltip-name"
      />
      <ReactTooltip
        id="my-tooltip-name"
        place="top-end"
        variant={errors.name ? 'error' : 'dark'}
        content={errors.name ? errors.name.message : 'You must write you real name'}
      />
      <input
        className={css.field}
        {...register('email')}
        type="email"
        placeholder="Email*"
        data-tooltip-id="my-tooltip-email"
      />
      <ReactTooltip
        id="my-tooltip-email"
        place="top-end"
        variant={errors.email ? 'error' : 'dark'}
        content={errors.email ? errors.email.message : 'You must write your real email'}
      />
      <label
        className={css.label}
        htmlFor="date"
        tabIndex={-1}
        ref={datePickerRef}
        data-tooltip-id="my-tooltip-date"
      >
        <Controller
          name="birthDate"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <DatePicker
              className={css.field}
              selected={field.value ? new Date(field.value) : null}
              popperPlacement="top-start"
              onChange={date => field.onChange(date)}
              placeholderText="Date of birth*"
              dateFormat="yyyy/MM/dd"
              onBlur={field.onBlur}
            />
          )}
        />
      </label>
      <ReactTooltip
        id="my-tooltip-date"
        place="top-end"
        variant={errors.birthDate ? 'error' : 'dark'}
        content={
          errors.birthDate ? errors.birthDate.message : 'You must write your real date of birth'
        }
      />
      <div className={css['container-info']} data-tooltip-id="my-tooltip-info">
        <label className={css['label-info']} htmlFor="social_media">
          <input
            checked
            className={css.info}
            type="radio"
            name="info"
            id="social_media"
            value="social_media"
            {...register('info')}
          />
          <p>Social media</p>
        </label>
        <label className={css['label-info']} htmlFor="friends">
          <input
            className={css.info}
            type="radio"
            name="info"
            id="friends"
            value="friends"
            {...register('info')}
          />
          <p>Friends</p>
        </label>
        <label className={css['label-info']} htmlFor="myself">
          <input
            className={css.info}
            type="radio"
            name="info"
            id="myself"
            value="myself"
            {...register('info')}
          />
          <p>Found myself</p>
        </label>
      </div>
      <ReactTooltip
        id="my-tooltip-info"
        place="top-end"
        variant={errors.birthDate ? 'error' : 'dark'}
        content={errors.info ? errors.info.message : 'This information makes us better. Thanks!'}
      />
      <textarea
        className={clsx(css.field, css.comment)}
        placeholder="Comment"
        data-tooltip-id="my-tooltip-comment"
        {...register('comment')}
      ></textarea>
      <ReactTooltip
        id="my-tooltip-comment"
        place="top-end"
        content="You can write some specific information here"
      />
      <button className={css.button} type="submit">
        Submit
      </button>
    </form>
  );
}

export default BookForm;
