import { useMemo, useState } from 'react';
import type { FocusEvent, ReactNode } from 'react';
import { Button, TextField } from '@mui/material';
import { DICT_PATTERNS, PatternsDict } from 'utils/validation/validationDict';

type TBaseResponse = { reason?: string };
type TBaseData = Record<string, unknown>;

export type TFormInputs<TForm extends TBaseData> = Array<
  {
    [K in keyof TForm]: {
      name: K;
      label: string;
      type: 'text' | 'password' | 'number' | 'email';
      required?: boolean;
      mask?: boolean;
    };
  }[keyof TForm]
>;

type TProps<TForm extends TBaseData, TResponse extends TBaseResponse> = {
  data?: TForm;
  inputs: TFormInputs<TForm>;
  onSubmit: (data: TForm) => Promise<TResponse>;
  title?: string;
  submitText: string;
};

export const Form = <TForm extends TBaseData, TResponse extends TBaseResponse>({
  title,
  data,
  inputs,
  onSubmit,
  submitText,
}: TProps<TForm, TResponse>) => {
  const initialData = useMemo<TForm>(
    () => data || inputs.reduce<TForm>((acc, { name }) => ({ ...acc, [name]: '' }), {} as TForm),
    [data, inputs],
  );
  const [formData, setFormData] = useState<TForm>(initialData);
  const [errorText, setErrorText] = useState<Partial<TForm>>({});
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [apiError, setApiError] = useState<string>('');

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    const hasMask = inputs.find(({ name }) => name === input.name)?.mask;

    if (input && hasMask) {
      const currentInput: PatternsDict | undefined = DICT_PATTERNS[input.name];

      let isValidInput = false;

      if (currentInput) {
        isValidInput = currentInput.regexp.test(input.value);

        if (!isValidInput) {
          setErrorText((prevState) => ({ ...prevState, [input.name]: currentInput.errorText }));
          setDisabledBtn(true);
        }
      }
    }
  };

  const handleChange = (e: FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    setFormData((prevState) => ({ ...prevState, [input.name]: input.value }));
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const input = e.target;

    setErrorText((prevState) => ({ ...prevState, [input.name]: '' }));
    setDisabledBtn(false);

    if (apiError !== '') {
      setApiError('');
    }
  };

  const handleFormSubmit = () => {
    if (Object.keys(formData).length < inputs.length) {
      inputs.forEach((inputData) => {
        if (formData[inputData.name] === '') {
          setErrorText((prevState) => ({ ...prevState, [inputData.name]: 'Обязательное поле' }));
          setDisabledBtn(true);
        }
      });
    } else {
      onSubmit(formData)
        .then((res) => {
          if (res.reason) {
            setApiError(res.reason);
          }
        })
        .catch(() => {
          setApiError('что-то пошло не так');
        });
    }
  };

  return (
    <form>
      {title && <h1>{title}</h1>}
      {inputs.map((input, i: number) => (
        <TextField
          key={i}
          variant="standard"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          fullWidth
          error={Boolean(errorText[input.name])}
          name={input.name.toString()}
          type={input.type}
          helperText={(errorText[input.name] as ReactNode) || ' '}
          label={input.label}
          required
        />
      ))}
      <span className="card__error-message">{apiError}</span>
      <Button variant="outlined" fullWidth onClick={handleFormSubmit} disabled={disabledBtn}>
        {submitText}
      </Button>
    </form>
  );
};
