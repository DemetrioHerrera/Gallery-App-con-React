import { useCallback, useEffect, useState } from "react";

export const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const peticion = useCallback(async () => {
    const Key = "client_id=DdgTaQHjZE7h1ILlhC9930AH2g1L1Up6mD0muQKhDrQ";

    let url = "";

    if (input !== "") {
      url = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${Key}`;
    } else {
      url = `https://api.unsplash.com/photos/?${Key}`;
    }

    setLoading(true);

    const res = await fetch(url);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }

    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text);
  };
  return [images, loading, handleSubmit];
};
