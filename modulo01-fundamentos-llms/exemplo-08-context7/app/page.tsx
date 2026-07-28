"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

interface Session {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  } | null;
}

export default function Home() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        const { data } = await authClient.getSession();
        setSession(data);
      } catch (error) {
        console.error("Erro ao verificar sessão:", error);
      } finally {
        setLoading(false);
      }
    }

    checkSession();
  }, []);

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      setSession(null);
      router.refresh();
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Hello World 👋
      </h1>

      {session?.user ? (
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-gray-700">
              <span className="font-semibold">Logado como:</span>
            </p>
            <p className="text-lg font-medium text-blue-600 mt-1">
              {session.user.name || session.user.email}
            </p>
            {session.user.email && (
              <p className="text-sm text-gray-600 mt-1">{session.user.email}</p>
            )}
          </div>

          {session.user.image && (
            <div className="flex justify-center">
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="w-16 h-16 rounded-full border-2 border-blue-600"
              />
            </div>
          )}

          <button
            onClick={handleSignOut}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Sair
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-center text-gray-600">
            Você não está logado.
          </p>
          <Link
            href="/login"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center transition"
          >
            Ir para Login
          </Link>
        </div>
      )}
    </div>
  );
}
