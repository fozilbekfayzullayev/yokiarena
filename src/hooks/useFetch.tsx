import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

interface Data {
  id: number;
  title: string;
  image_url: string;
}

export const useFetch = (category: string | null) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!category) {
        console.warn("⚠ category is empty or null");
        setLoading(false);
        return;
      }

      const { data: dbData, error } = await supabase
        .from(category)
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
