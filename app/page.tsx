"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import "../app/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="EducaRecife Logo" width={200} height={60} />
        </div>
        <form>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CPF
          </label>
          <input
            type="text"
            placeholder="Insira seu CPF"
            className="w-full p-2 mb-1 border rounded text-black border-gray-300"
          />
          <p className="text-red-500 text-sm hidden">Formato de CPF inválido</p>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <input
            type="password"
            placeholder="Insira uma senha"
            className="w-full p-2 mb-4 border rounded text-black"
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Lembrar login?
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded"
          >
            Fazer Login
          </button>
          <p className="mt-4 text-red-500 text-center hidden">Mensagem de erro</p>
        </form>
        <div className="mt-4 text-center">
          <Link href="/registerUser" legacyBehavior>
            <a className="text-blue-500 hover:underline">
              Faça seu Cadastro Aqui!
            </a>
          </Link>
        </div>
        <div className="mt-4 text-xs text-gray-500 text-center">
          <p>Suporte — Termos de Uso — Política de Privacidade</p>
          <p>Todos os Direitos Reservados | Secretaria de Educação</p>
        </div>
      </div>
    </div>
  );
}