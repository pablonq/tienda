import Button from "../components/Button";
import InputLabel from "../components/InputLabel";
import{Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";
import {Api} from "../services/Api";

function Register() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  console.log("Register component mounted");
  const initialValues ={
    name: "Pablo Navarro",
    email: "",
    password: "",
    confirmPassword: ""
    
  }
  const onSubmit = async (values) => {
    try {
      const response = await Api.post('/register', values);
      console.log('Registration successful:', response);
      // Handle success
    } catch (error) {
      console.error('Registration error:', error.message);
      // Handle error
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("El nombre es obligatorio")
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(20, "El nombre debe tener menos de 20 caracteres"),
    email: Yup.string()
      .email("El correo no es valido")
      .required("El correo es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(5, "La contraseña debe tener al menos 5 caracteres")
      .max(50, "La contraseña debe tener menos de 50 caracteres"),
    confirmPassword: Yup.string()
      .required("La contraseña es obligatoria")
      .oneOf([Yup.ref("password")], "Las contrasenias no coinciden"),
  });
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight text-gray-900 md:text-2xl dark:text-white">
                Regístrate
              </h1>
              {isLoading && <p>Cargando...</p>}
{error && <p className="text-red-500">{error}</p>}
{success && <p className="text-green-500">Registro exitoso!</p>}
              <Formik
              initialValues={{initialValues}}
              onSubmit={onSubmit}
              validationSchema={validationSchema}>
                {({
                  
                  errors,
                  
                  handleChange,
                  
                  handleSubmit,
                  
                }) => (
                
                  <form className="space-y-5" action="#" method="POST" onSubmit={handleSubmit}>
                <InputLabel
                  label="Correo"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  error={errors.email}
                  onChange={handleChange}
                />
                <InputLabel
                  label="Nombre"
                  type="text"
                  name="name"
                  placeholder="Pablo Navarro"
                  error={errors.name}
                  onChange={handleChange}
                />
                <InputLabel
                  label="Contraseña"
                  type="password"
                  name="password"
                  placeholder="********"
                  error={errors.password}
                  onChange={handleChange}
                />
                <InputLabel
                  label="Confirmar contraseña"
                  type="password"
                  name="confirmPassword"
                  placeholder="********"
                  error={errors.confirmPassword}
                  onChange={handleChange}
                />
                <Button value="Registrarse" type="submit"/>
              </form>
                )}
              
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
