import Button from "../components/Button";
import InputLabel from "../components/InputLabel";

function Register() {
  console.log("Register component mounted");
  return (
    <>



      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className='bg-orange-600'>
                Regístrate
              </h1>

              <form className="space-y-5" action="#" method="POST" >
                <InputLabel label="Correo" type="email" name="email" placeholder="example@gmail.com" />
                <InputLabel label="Nombre" type="text" name="name" placeholder="John Doe" />
                <InputLabel label="Contraseña" type="password" name="password" placeholder="********" />
                <InputLabel label="Confirmar contraseña" type="password" name="confirmPassword" placeholder="********" />
                <Button value="Registrarse" type="submit" />



              </form> 
            </div>
          </div>
        </div>
      </div>
    </>



  )
}

export default Register;
