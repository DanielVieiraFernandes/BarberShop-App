import { firebase, FirebaseAuthTypes } from "@react-native-firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { MyBarberSchema } from "../screens/Register/RegisterBarbeiro";
import { MyClientSchema } from "../screens/Register/RegisterClient";
import { MySignInClientSchema } from "../screens/SignIn/SignInClient";
import { MySignInBarberSchema } from "../screens/SignIn/SignInBarber";

type authData = {
  userType: string;
};

type authContext = {
  userBarber: FirebaseAuthTypes.User | null;
  userClient: FirebaseAuthTypes.User | null;
  signIn: (
    data: MySignInClientSchema
  ) => Promise<void> | ((data: MySignInBarberSchema) => Promise<void>);
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

  const onSubscribe = () => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      console.log("onAuthStateChanged Triggered:", user);
      if (user) {
        try {
          const subscribe = firestore()
            .collection("users")
            .doc(user.uid)
            .onSnapshot((docS) => {
              const userData = docS.data();
              if (userData) {
                if (userData.tipo === "Barber") {
                  setUserBarber(user);
                  setUserClient(null);
                } else if (userData.tipo === "Client") {
                  setUserClient(user);
                  setUserBarber(null);
                } else {
                  setUserClient(null);
                  setUserBarber(null);
                }
              }
            });
          return subscribe;
        } catch (error) {
          console.error("Error fetching user document:", error);
        } finally {
          setIsloanding(false);
        }
      } else {
        setUserBarber(null);
        setUserClient(null);
      }
      setIsloanding(false);
    });

    return unsubscribe;
  };

  useEffect(() => {
    onSubscribe();
  }, []);

  const signIn = async (data: MySignInClientSchema | MySignInBarberSchema) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        data.email,
        data.senha
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
          setUserClient(null);
        } else if (userData.tipo === "Client") {
          setUserClient(user);
          setUserBarber(null);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    auth().signOut();
    setAuthType(null);
    setUserBarber(null);
    setUserClient(null);
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
          if (authType?.userType === "Barber") {
            setUserBarber(user);
            setUserClient(null);
          } else if (authType?.userType === "Client") {
            setUserBarber(null);
            setUserClient(user);
          }
        }
      }
      console.log("Registro concluído");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        throw new Error("Este Email já está em uso. Por favor, tente outro");
      }
      if (error.code === "auth/invalid-email") {
        throw new Error(
          "O email fornecido é inválido. Verifique e tente novamente"
        );
      }
      if (error.code === "auth/weak-password") {
        throw new Error("A senha é muito fraca. Escolha uma senha mais forte");
      }

      throw new Error("Erro ao cadastrar. Tente novamente.");
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
          if (authType?.userType === "Barber") {
            setUserBarber(user);
            setUserClient(null);
          } else if (authType?.userType === "Client") {
            setUserBarber(null);
            setUserClient(user);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
