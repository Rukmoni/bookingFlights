import React, { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { useLogin } from "../../api/hooks/useAuth";
import { useAppDispatch } from "../../store/hooks";
import { setCredentials } from "../../store/slices/authSlice";

export default function LoginScreen() {
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("password");
  const { mutateAsync, isPending } = useLogin();
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    try {
      const res = await mutateAsync({ email, password });
      dispatch(setCredentials({ token: res.token, user: res.user }));
      Alert.alert("Logged in!");
    } catch (e) {
      Alert.alert("Login failed");
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="Email"
        style={{ borderWidth: 1, marginBottom: 8, padding: 8, borderRadius: 6 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
        style={{ borderWidth: 1, marginBottom: 8, padding: 8, borderRadius: 6 }}
      />
      <Button
        title={isPending ? "Signing in..." : "Sign in"}
        onPress={onSubmit}
        disabled={isPending}
      />
    </View>
  );
}
