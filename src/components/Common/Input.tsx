import React from "react";

type InputProps = {
  inputDetails: {
    id: string;
    type: string;
    required: boolean;
    placeholder: string;
    label:string;
  };
  formData: {
    fullName: string;
    name: string;
    email: string;
    message: string;
    location: string;
    work: string;
    domain: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      name: string;
      email: string;
      message: string;
      location: string;
      work: string;
      domain: string;
    }>
  >;
};

const Input = ({ inputDetails, formData, setFormData }: InputProps) => {
  let inputBoxName = inputDetails.id;
  const valueToUse = formData[inputBoxName as keyof typeof formData];
  return (
    <div className="flex flex-col relative z-0 w-full">
      
      <label className=" text-dark" htmlFor={inputDetails.id}>{inputDetails.label}</label>
      <input
        className=" focus:outline-none text-dark w-full     bg-gray-100  h-9 mb-4 px-2 py-1 rounded-md "
        type={inputDetails.type}
        required={inputDetails.required}
        id={inputDetails.id}
        name={inputDetails.id}
        placeholder={inputDetails.placeholder}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, [inputBoxName]: e.target.value }))
        }
        value={valueToUse}
      />
    </div>
  );
};

export default Input;
