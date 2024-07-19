"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import "../../app/globals.css";

const registerUser = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6 cursor-pointer">
          <Link href="/" legacyBehavior>
              <Image src={logo} alt="EducaRecife Logo" width={200} height={60} />
          </Link>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border text-black rounded-md w-full"
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              className="mt-1 p-2 border text-black  rounded-md w-full"
              placeholder="Digite seu CPF"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              className="mt-1 p-2 border text-black  rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Função
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 p-2 border text-black  rounded-md w-full"
              required
            >
              <option value="">Selecione sua função</option>
              <option value="admin">Administrador</option>
              <option value="professor">Professor</option>
              <option value="student">Estudante</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border text-black  rounded-md w-full"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mr-2"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Concordo com os Termos de Uso e Política de Privacidade da EducaRecife.
            </label>
          </div>
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Registrar-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default registerUser;
