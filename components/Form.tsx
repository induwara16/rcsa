"use client";

import { useForm } from "react-hook-form";

import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
  Radio,
  Checkbox,
  Tooltip,
  Spinner,
} from "flowbite-react";

import { title2slug } from "@/util/util";

import { FaAsterisk } from "react-icons/fa";
import { MdCheckCircle, MdError } from "react-icons/md";
import { submitForm } from "@/actions/submit";
import { useState } from "react";

type FormProps = {
  form_name: string;
};

const labelTransform = (label: string) =>
  `${label[0].toUpperCase()}${label.slice(1).toLowerCase()}`;

const requiredMsg = (label: string) => `${labelTransform(label)} is required`;

const Form: React.FC<FormProps> = ({ form_name }) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { fields, g_spreadsheet } = require(
    `@/content/forms/${title2slug(form_name)}.md`,
  ).attributes as FormAttributes;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Record<string, string>>();

  const isError = Object.keys(errors).length !== 0;

  const [submitStatus, setSubmitStatus] = useState<"error" | "success" | null>(
    null,
  );

  const onSubmit = async (data: Record<string, string>) => {
    const formData = new FormData();
    formData.append("sheet_id", g_spreadsheet);

    for (const key in data) {
      formData.append(key, data[key]);
    }

    if ((await submitForm(formData)).success) {
      setSubmitStatus("success");
      reset();
    } else {
      setSubmitStatus("error");
    }

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map((field) => {
        const slug = title2slug(field.label);
        let Field;
        switch (field.type) {
          case "textarea":
            Field = (
              <Textarea
                {...register(slug, {
                  required: {
                    value: !!field.required,
                    message: requiredMsg(field.label),
                  },
                  maxLength: {
                    value: field.max_letters || 1000,
                    message: `${labelTransform(field.label)} must be shorter than ${field.max_letters} letters`,
                  },
                })}
                placeholder={field.placeholder}
                rows={5}
              />
            );
            break;
          case "mcq":
            if (field.varient === "dropdown") {
              Field = (
                <Select
                  {...register(slug, {
                    required: {
                      value: !!field.required,
                      message: requiredMsg(field.label),
                    },
                  })}
                >
                  {field.options.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </Select>
              );
            } else {
              const Elem = field.varient === "radio" ? Radio : Checkbox;

              Field = (
                <div className="flex flex-col gap-1">
                  {field.options.map((option, i) => (
                    <div className="flex items-center gap-2" key={i}>
                      <Elem
                        {...register(slug, {
                          required: {
                            value: !!field.required,
                            message: requiredMsg(field.label),
                          },
                        })}
                        id={option}
                        name={slug}
                        value={option}
                      />
                      <Label>{option}</Label>
                    </div>
                  ))}
                </div>
              );
            }
            break;
          case "textedit":
            Field = (
              <TextInput
                {...register(slug, {
                  required: {
                    value: !!field.required,
                    message: requiredMsg(field.label),
                  },
                  pattern: {
                    value: field.regex ? new RegExp(field.regex) : /.+/,
                    message: `${labelTransform(field.label)} is invalid`,
                  },
                })}
                type="text"
                placeholder={field.placeholder}
              />
            );
            break;
        }
        return (
          <div key={slug}>
            <div className="mb-2 flex gap-2">
              <Label>{field.label}</Label>
              {field.required && (
                <Tooltip
                  className="!transition"
                  content="This field is required"
                >
                  <Label className="mb-auto !text-red-600">
                    <FaAsterisk className="size-2" />
                  </Label>
                </Tooltip>
              )}
              {errors[slug] && (
                <Tooltip className="!transition" content={errors[slug].message}>
                  <Label className="!text-amber-500">
                    <MdError />
                  </Label>
                </Tooltip>
              )}
            </div>
            {Field}
          </div>
        );
      })}

      <Button
        className="mt-2"
        type="submit"
        color={
          submitStatus === "error"
            ? "red"
            : submitStatus === "success"
              ? "green"
              : isError
                ? "gray"
                : "default"
        }
        pill
        disabled={isSubmitting || isError}
      >
        {submitStatus === "error" ? (
          <span className="flex gap-2">
            <MdError className="text-lg" /> Server Error!
          </span>
        ) : submitStatus === "success" ? (
          <span className="flex gap-2">
            <MdCheckCircle className="text-lg" /> Success!
          </span>
        ) : isSubmitting ? (
          <>
            <Spinner
              size="sm"
              className="my-auto mr-2 fill-gray-600 text-white dark:fill-gray-300"
            />{" "}
            Submitting...
          </>
        ) : isError ? (
          <span className="flex gap-2">
            <MdError className="text-lg" /> Check Errors
          </span>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default Form;
