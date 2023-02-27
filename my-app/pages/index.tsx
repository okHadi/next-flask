import axios from "axios";
import { GetServerSideProps } from "next";
import { useState } from "react";

type Props = {
  message: string;
};

const Home = ({ message }: Props) => {
  const [response, setResponse] = useState(message);
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Message from the server: {response}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await axios.get("http://127.0.0.1:5000/");
  const message = res.data.message || "No message received";
  return {
    props: { message },
  };
};

export default Home;
