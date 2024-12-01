import { firebase, FirebaseAuthTypes } from "@react-native-firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { MyBarberSchema } from "../screens/Register/RegisterBarbeiro";
import { MyClientSchema } from "../screens/Register/RegisterClient";

type authData = {
  userType: string;
};

type authContext = {
  userBarber: FirebaseAuthTypes.User | null;
  userClient: FirebaseAuthTypes.User | null;
  notUser: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signOut: () => void;
  cadastrarBarbeiro: (data: MyBarberSchema) => Promise<void>;
  cadastrarCliente: (data: MyClientSchema) => Promise<void>;
  isLoading: boolean;
  isButtonLoading: boolean;
};

const AuthContext = createContext<authContext>({} as authContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authType, setAuthType] = useState<authData | null>(null);
  const [isLoading, setIsloanding] = useState<boolean>(true);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [userBarber, setUserBarber] = useState<FirebaseAuthTypes.User | null>(
    null
  );
  const [userClient, setUserClient] = useState<FirebaseAuthTypes.User | null>(
    null
  );
  const [notUser, setNotUser] = useState<boolean>(false);

  const onSubscribe = async () => {
    const user = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await firestore()
          .collection("users")
          .doc(user.uid)
          .get();
        const data = userDoc.data();
        if (data) {
          setAuthType({
            userType: data.tipo,
          });
          if (data.tipo === "Barber") {
            setUserBarber(user);
          } else if (data.tipo === " Client") {
            setUserClient(user);
          } else {
            setNotUser(true);
          }
        } else {
          setAuthType(null);
        }
      } 
      setIsloanding(false);
    });
    return user;
  };

  useEffect(() => {
    onSubscribe();
  }, []);

  const signIn = async (email: string, senha: string) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        senha
      );
      const user = userCredential.user;

      const userDoc = await firestore().collection("users").doc(user.uid).get();
      const userData = userDoc.data();

      if (userData) {
        setAuthType({
          userType: userData.tipo,
        });
        if (userData.tipo === "Barber") {
          setUserBarber(user);
        } else if (userData.tipo === " Client") {
          setUserClient(user);
        }else {
          setNotUser(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    auth().signOut();
    setAuthType(null);
  };

  const cadastrarBarbeiro = async (data: MyBarberSchema) => {
    setIsButtonLoading(true);
    setIsloanding(true);
    try {
      const userAuth = await auth().createUserWithEmailAndPassword(
        data.email,
        data.senha
      );
      const user = userAuth.user;
      if (user) {
        await firestore().collection("users").doc(user.uid).set({
          nome: data.nome,
          email: data.email,
          senha: data.senha,
          tipo: "Barber",
        });
        const userDoc = await firestore()
          .collection("users")
          .doc(user.uid)
          .get();
        const userData = userDoc.data();
        if (userData) {
          setAuthType({
            userType: userData.tipo,
          });
          if (userData.tipo === "Barber") {
            setUserBarber(user);
          } else if (userData.tipo === " Client") {
            setUserClient(user);
          } else {
            setNotUser(true);
          }
        }
      }
      console.log("Registro concluído");
    } catch (error) {
      console.log(error);
    } finally {
      setIsloanding(false);
      setIsButtonLoading(false);
    }
  };

  const cadastrarCliente = async (data: MyClientSchema) => {
    setIsButtonLoading(true);
    setIsloanding(true);
    try {
      const userAuth = await auth().createUserWithEmailAndPassword(
        data.email,
        data.senha
      );
      const user = userAuth.user;
      if (user) {
        await firestore().collection("users").doc(user.uid).set({
          nome: data.nome,
          email: data.email,
          senha: data.senha,
          tipo: "Client",
        });

        const userDoc = await firestore()
          .collection("users")
          .doc(user.uid)
          .get();
        const userData = userDoc.data();
        if (userData) {
          setAuthType({
            userType: userData.tipo,
          });
          if (userData.tipo === "Barber") {
            setUserBarber(user);
          } else if (userData.tipo === " Client") {
            setUserClient(user);
          } else {
            setNotUser(true);
          }
        }
      }
      console.log("Registro concluído");
    } catch (error) {
      console.log(error);
    } finally {
      setIsButtonLoading(false);
      setIsloanding(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        cadastrarCliente,
        cadastrarBarbeiro,
        signIn,
        signOut,
        userBarber,
        userClient,
        isButtonLoading,
        notUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
