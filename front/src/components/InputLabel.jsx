/* type Props ={
  label: string;
  name: String;
  type?: "text" | "email" | "password" |"date";
  placeholder: string;
  error?: string;
   id? : string;
}; */
import React from 'react'

const InputLabel = ({label, type, name, id, placeholder, error}) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id= {id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      <small className="text-red-500">{error}</small>
    </div>
  );
};

export default InputLabel;