import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

interface Data {
  id: number;
  title: string;
  img: string;
}

export const useFetch = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: dbData, error } = await supabase
        .from("Movies")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Fetch error:", error);
      } else {
        setData(dbData || []);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};
